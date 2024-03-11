import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import React from "react";
import MessageStatus from "../common/MessageStatus";
import ImageMessage from "./ImageMessage";
import dynamic from "next/dynamic";
//Mistake
// import VoiceMessage from "./VoiceMessage";

const VoiceMessage = dynamic(() => import("./VoiceMessage"), { ssr: false });

const ChatContainer = () => {
  const [{ message, currentUser, userInfo }, dispatch] = useStateProvider();

  console.log(message)

  return (
    <div className="h-[88vh] w-full flex-grow overflow-auto custom-scrollbar relative">
      <div className="fixed z-0 w-full h-full bg-fixed bg-chat-background opacity-5"></div>
      <div className="relative bottom-0 left-0 z-40 mx-10 my-6">
        <div className="flex w-full">
          <div className="flex flex-col justify-end w-full gap-1 overflow-auto">
            {message.map((message, index) => {
              return (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === currentUser.id
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  {message.type === "text" && (
                    <div
                      className={`text-white px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%]${
                        message.senderId === currentUser.id
                          ? " bg-outgoing-background"
                          : " bg-incoming-background"
                      }`}
                    >
                      <span className="break-all">{message.message}</span>
                      <div className="flex items-end gap-1">
                        <span className="text-bubble-meta text-[11px] pt-1 min-w-fit">
                          {calculateTime(message.createdAt)}
                        </span>
                        <span>
                          {message?.senderId === userInfo?.id && (
                            <MessageStatus status={message.messageStatus} />
                          )}
                        </span>
                      </div>
                    </div>
                  )}
                  {message.type === "image" && (
                    <ImageMessage message={message} />
                  )}
                  {message.type === "audio" && (
                    <VoiceMessage message={message} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
