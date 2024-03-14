import React, { useEffect, useRef, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { useRouter } from "next/router";
import { CHECK_USER, GET_MESSAGE, HOST } from "@/utils/ApiRoutes";
import axios from "axios";
import { useStateProvider } from "@/context/StateContext";
import Chat from "./Chat/Chat";
import { io } from "socket.io-client";
import SearchMessages from "./Chat/SearchMessages";
import VideoCall from "./Call/VideoCall";
import VoiceCall from "./Call/VoiceCall";
import IncomingVideoCall from "./common/IncomingVideoCall";
import IncomingCall from "./common/IncomingCall";

function Main() {
  const { push: redirect } = useRouter();
  const [
    {
      userInfo,
      currentUser,
      message,
      messageSearch,
      videoCall,
      voiceCall,
      incomingVoiceCall,
      incomingVideoCall,
    },
    dispatch,
  ] = useStateProvider();
  const [socketEvent, setSocketEvent] = useState(false);
  const socket = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (currentUser) => {
        if (!currentUser) redirect("/login");
        const userEmail = currentUser?.email;

        const { data } = await axios.post(CHECK_USER, { userEmail });

        if (!data.status) redirect("/login");

        const { name, about, photoUrl, email, id } = data?.data;

        dispatch({
          type: "USER_INFO",
          userInfo: { name, email, about, photoUrl, id },
        });

        dispatch({
          type: "NEW_USER_INFO",
          newUser: false,
        });
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const {
          data: { messages },
        } = await axios.get(
          `${GET_MESSAGE}?from=${userInfo?.id}&to=${currentUser?.id}`
        );
        dispatch({ type: "SET_MESSAGE", message: messages });
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (currentUser?.id) fetchMessages();
  }, [userInfo, currentUser]);

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST);
      socket.current.emit("add-user", userInfo.id);
      dispatch({ type: "SET_SOCKET", socket });
    }
  }, [userInfo]);

  useEffect(() => {
    if (socket.current && !socketEvent) {
      socket.current.on("msg-receive", (data) => {
        dispatch({
          type: "ADD_MESSAGE",
          newMessage: {
            ...data,
          },
        });
      });

      socket.current.on("incoming-voice-call", ({ from, roomId, callType }) => {
        dispatch({
          type: "SET_INCOMING_VOICE_CALL",
          incomingVoiceCall: { ...from, roomId, callType },
        });
      });

      socket.current.on("incoming-video-call", ({ from, roomId, callType }) => {
        dispatch({
          type: "SET_INCOMING_VIDEO_CALL",
          incomingVideoCall: { ...from, roomId, callType },
        });
      });

      socket.current.on("voice-call-rejected", () => {
        dispatch({ type: "END_CALL" });
      });

      socket.current.on("video-call-rejected", () => {

        dispatch({ type: "END_CALL" });
      });

      setSocketEvent(true);
    }
  }, [socket.current,socketEvent]);

  return (
    <>
   
      {incomingVideoCall && <IncomingVideoCall />}
      {incomingVoiceCall && <IncomingCall />}

      {videoCall && (
        <div className="w-screen h-screen max-h-full overflow-hidden">
          <VideoCall />
        </div>
      )}

      {voiceCall && (
        <div className="w-screen h-screen max-h-full overflow-hidden">
          <VoiceCall />
        </div>
      )}
      {!videoCall && !voiceCall && (
        <div className="grid w-screen h-screen max-h-screen grid-cols-main max-w-screen over">
          <ChatList />
          {currentUser ? (
            <div className={messageSearch ? "grid grid-cols-2" : "grid-cols-2"}>
              <Chat /> {messageSearch && <SearchMessages />}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      )}
    </>
  );
}

export default Main;
