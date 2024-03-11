import React, { useRef, useState } from "react";
import { useStateProvider } from "@/context/StateContext";
import { ADD_IMAGE_MESSAGE, ADD_MESSAGE } from "@/utils/ApiRoutes";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import PhotoPicker from "../common/PhotoPicker";
// import CaptureAudio from "../common/CaptureAudio";
//Mistake
import dynamic from "next/dynamic";
const CaptureAudio = dynamic(() => import("../common/CaptureAudio"), {
  ssr: false,
});

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const [{ userInfo, currentUser, socket }, dispatch] = useStateProvider();
  const [showEmojiPicker, setEmojiPicker] = useState(false);
  const [grapPhoto, setGrabPhoto] = useState(false);
  const [showCaptureAudio, setCaptureAudio] = useState(false);
  const emojiRef = useRef(null);

  const handleMessage = async () => {
    try {
      const { data } = await axios.post(ADD_MESSAGE, {
        sender: userInfo.id,
        receiver: currentUser.id,
        message,
      });

      socket.current.emit("send-msg", {
        senderId: userInfo.id,
        receiverId: currentUser.id,
        message: data.message.message,
        id: data.message.id,
        type: data.message.type,
        messageStatus: data.message.messageStatus,
        createdAt: data.message.createdAt,
      });

      dispatch({
        type: "ADD_MESSAGE",
        newMessage: {
          ...data.message,
        },
        fromSelf: true,
      });

      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleMessage();
    }
  };

  const handleEmojiPicker = () => {
    setEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage) => (prevMessage += emoji.emoji));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id !== "emoji-opener") {
        if (emojiRef.current && !emojiRef.current.contains(event.target)) {
          setEmojiPicker(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (grapPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000);
      };
    }
  }, [grapPhoto]);

  const handlePhotoChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(ADD_IMAGE_MESSAGE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          from: userInfo.id,
          to: currentUser.id,
        },
      });
      if (response.status === 201) {
        socket.current.emit("send-msg", {
          senderId: userInfo.id,
          receiverId: currentUser.id,
          message: response.data.message.message,
          id: response.data.message.id,
          type: response.data.message.type,
          messageStatus: response.data.message.messageStatus,
          createdAt: response.data.message.createdAt,
        });

        dispatch({
          type: "ADD_MESSAGE",
          newMessage: {
            ...response.data.message,
          },
          fromSelf: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex items-center h-20 gap-6 px-4 bg-panel-header-background ">
      {!showCaptureAudio && (
        <>
          {grapPhoto && <PhotoPicker onChange={handlePhotoChange} />}
          <div className="flex gap-6">
            <BsEmojiSmile
              id="emoji-opener"
              onClick={handleEmojiPicker}
              className="text-xl cursor-pointer text-panel-header-icon"
              title="emoji"
            />

            {showEmojiPicker && (
              <div className="absolute z-40 bottom-24 left-16" ref={emojiRef}>
                <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
              </div>
            )}

            <ImAttachment
              className="text-xl cursor-pointer text-panel-header-icon"
              title="Attach File"
              onClick={() => setGrabPhoto(true)}
            />
          </div>

          <div className="flex items-center w-full h-10 rounded-lg">
            <input
              type="text"
              placeholder="Type a message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onKeyDown={handleKeyDown}
              className="w-full h-10 px-5 py-4 text-white rounded-lg bg-input-background focus:outline-none "
            />
          </div>

          <div className="flex items-center justify-center w-10">
            {message && (
              <MdSend
                className="text-xl cursor-pointer text-panel-header-icon"
                onClick={handleMessage}
              />
            )}

            {!message && (
              <FaMicrophone
                className="text-xl cursor-pointer text-panel-header-icon"
                onClick={() => setCaptureAudio(true)}
              />
            )}
          </div>
        </>
      )}
      {showCaptureAudio && <CaptureAudio hide={setCaptureAudio} />}
    </div>
  );
};

export default MessageBar;
