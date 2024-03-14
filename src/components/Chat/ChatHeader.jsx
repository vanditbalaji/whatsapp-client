import React from "react";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";

const ChatHeader = () => {
  const [{ currentUser }, dispatch] = useStateProvider();

  const handleVoiceCall = () => {
    dispatch({
      type: "SET_VOICE_CALL",
      voiceCall: {
        ...currentUser,
        type: "out-going",
        callType: "voice",
        roomId: Date.now(),
      },
    });
  };

  const handleVideoCall = () => {
    dispatch({
      type: "SET_VIDEO_CALL",
      videoCall: {
        ...currentUser,
        type: "out-going",
        callType: "video",
        roomId: Date.now(),
      },
    });
  };

  return (
    <div className="z-10 flex items-center justify-between h-16 px-4 py-3 bg-panel-header-background">
      <div className="flex items-center justify-center gap-6">
    
        <Avatar alt="hello" state={currentUser?.profilePicture} type="sm" />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentUser?.name}</span>
          <span className="text-sm text-secondary">Online/Offline</span>
        </div>
      </div>

      <div className="flex gap-6">
        <MdCall
          className="text-xl cursor-pointer text-panel-header-icon"
          onClick={handleVoiceCall}
        />
        <IoVideocam
          className="text-xl cursor-pointer text-panel-header-icon"
          onClick={handleVideoCall}
        />
        <BiSearchAlt2
          className="text-xl cursor-pointer text-panel-header-icon"
          onClick={() => dispatch({ type: "SET_MESSAGE_SEARCH" })}
        />
        <BsThreeDotsVertical className="text-xl cursor-pointer text-panel-header-icon" />
      </div>
    </div>
  );
};

export default ChatHeader;
