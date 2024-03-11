import { useStateProvider } from "@/context/StateContext";
import { GET_INITIAL_CONTACTS_ROUTES } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import ChatListItem from "./ChatListItem";

const List = () => {
  const [{ userInfo, userContacts, filteredContacts }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getContacts = async () => {
      if (userInfo?.id) {
        try {
          const {
            data: { user, onlineUsers },
          } = await axios.get(`${GET_INITIAL_CONTACTS_ROUTES}/${userInfo?.id}`);

          dispatch({ type: "SET_ONLINE_USERS", onlineUsers });
          dispatch({ type: "SET_USERS_CONTACTS", userContacts: user });
          console.log(user);
        } catch (err) {
          console.log(err);
        }
      }
    };

    getContacts();
  }, [userInfo]);

  const latestMessages = {};
  const filteredLatestMessage={}

   
   userContacts.forEach((contact) => {
     if (
       !latestMessages[contact.id] ||
       latestMessages[contact.id].createdAt < contact.createdAt
     ) {
       latestMessages[contact.id] = contact;
     }
   });
  
   filteredContacts.forEach((contact) => {
     if (
       !filteredLatestMessage[contact.id] ||
       filteredLatestMessage[contact.id].createdAt < contact.createdAt
     ) {
       filteredLatestMessage[contact.id] = contact;
     }
   });
  console.log(filteredLatestMessage)


  return (
    <div className="flex-auto max-h-full overflow-auto bg-search-input-container-background custom-scrollbar">
      {filteredContacts?.length > 0
        ? Object.values(filteredLatestMessage)?.map((contact) => (
            <>
              {console.log("a")}
              <ChatListItem data={contact} key={contact.id} />
            </>
          ))
        : Object.values(latestMessages).map((contact) => (
            <ChatListItem data={contact} key={contact.id} />
          ))}
    </div>
  );
};

export default List;
