import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";

const Chat = () => {
  return (
    <div className="border-conversation-border bg-conversation-panel-background border-1 w-full flex flex-col h-[100vh] z-10 empty-border">
      <ChatHeader />
      <ChatContainer />
      <MessageBar />
    </div>
  );
};

export default Chat;
