import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import Avatar from "../common/Avatar";
import { BsThreeDotsVertical, BsFillChatLeftTextFill } from "react-icons/bs";
const ChatListHeader = () => {
  const [{ userInfo }, dispatch] = useStateProvider();

  const img = userInfo?.photoUrl;

  const handleAllContactPage = () => {
    dispatch({
      type: "ALL_CONTACTS_PAGE",
    });
  };
  return (
    <div className="px-4 py-3 h-16 flex justify-between items-center">
      <div className="cursor-pointer justify-start">
        <Avatar state={img} type="sm" />
      </div>
      <div className="flex gap-6">
        <BsFillChatLeftTextFill
          className="text-panel-header-icon text-xl cursor-pointer"
          title="NewChat"
          onClick={handleAllContactPage}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon text-xl cursor-pointer"
          title="Menu"
        />
      </div>
    </div>
  );
};

export default ChatListHeader;
