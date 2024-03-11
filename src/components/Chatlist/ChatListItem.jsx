import React from "react";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import ContactsList from "./ContactsList";
import MessageStatus from "../common/MessageStatus";
import { FaCamera, FaMicrophone } from "react-icons/fa";

const ChatListItem = ({ data, isContactListPage = false }) => {
  const [{ userInfo, currentUser }, dispatch] = useStateProvider();

  console.log("current data", data);

  const handleChat = () => {
    if (!isContactListPage) {
      dispatch({
        type: "CHANGE_CURRENT_USER",
        user: {
          name: data.name,
          about: data.about,
          profilePicture: data.photoUrl,
          email: data.email,
          id: userInfo.id === data.senderId ? data.receiverId : data.senderId,
        },
      });
    } else {
      dispatch({ type: "CHANGE_CURRENT_USER", user: data });
      dispatch({ type: "ALL_CONTACTS_PAGE" });
    }
  };

  return (
    <div
      className="flex items-center cursor-pointer hover:bg-background-default-hover"
      onClick={handleChat}
    >
      <div className="px-5 pt-3 pb-1 min-w-fit">
        <Avatar type="lg" state={data?.photoUrl} />
      </div>
      <div className="flex flex-col justify-center w-full min-h-full pr-2 mt-3">
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div>
              <span className="text-white">{data?.name}</span>
            </div>
          </div>
          {!isContactListPage && (
            <div>
              <span
                className={`${
                  !data.totalUnreadMessages > 0
                    ? "text-secondary"
                    : "text-icon-green"
                } text-sm`}
              >
                {calculateTime(data.createdAt)}
              </span>
            </div>
          )}
        </div>
        <div className="flex pt-1 pb-2 border-b border-conversation-border ">
          <div className="flex justify-between w-full">
            <span className="flex gap-1 text-sm text-secondary line-clamp-1">
              {isContactListPage ? (
                data?.about || "\u00A0"
              ) : (
                <div className="flex items-center gap-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-[300px]">
                  {data.senderId === userInfo.id && (
                    <MessageStatus status={data.messageStatus} />
                  )}
                </div>
              )}
              {data.type === "text" && (
                <span className="truncate">{data.message}</span>
              )}
              {data.type === "audio" && (
                <span className="flex items-center gap-1">
                  <FaMicrophone className="text-panel-header-icon" />
                  Audio
                </span>
              )}
              {data.type === "image" && (
                <span className="flex items-center gap-1">
                  <FaCamera className="text-panel-header-icon" />
                  Image
                </span>
              )}
            </span>
            {data?.totalUnreadMessages > 0 && (
              <span className="text-sm rounded-full bg-icon-green  px-[5px] ">
                {data.totalUnreadMessages}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
