import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useStateProvider } from "@/context/StateContext";
import ContactsList from "./ContactsList";

const ChatList = () => {
  const [{ allContacts }] = useStateProvider();
  const [page, setPage] = useState("defaultPage");
  useEffect(() => {
    if (allContacts) {
      setPage("allContactPage");
    } else {
      setPage("defaultPage");
    }
  }, [allContacts]);
  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen">
      {page === "defaultPage" && (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}
      {page === "allContactPage" && (
        <>
          <ContactsList />
        </>
      )}
    </div>
  );
};

export default ChatList;
