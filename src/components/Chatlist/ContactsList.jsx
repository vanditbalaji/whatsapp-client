import { useStateProvider } from "@/context/StateContext";
import { GET_ALL_USERS } from "@/utils/ApiRoutes";
import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatListItem from "./ChatListItem";

function ContactsList() {
  const [userContacts, setUserContacts] = useState();
  const [{ userInfo }, dispatch] = useStateProvider();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchContacts, setSearchContacts] = useState([]);

  useEffect(() => {
    
    const getAllUsers = async () => {
      try {
        const {
          data: { users },
        } = await axios.get(GET_ALL_USERS);
        setUserContacts(users);
        setSearchContacts(users);
      } catch (err) {
        console.log(err);
      }
    };
    
    getAllUsers();
    
  }, []);

  useEffect(() => {
    
    if (searchTerm) {
      const filteredData = {};
      Object.keys(userContacts).forEach((key) => {
        filteredData[key] = userContacts[key].filter((obj) =>
          obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }); 
      setSearchContacts(filteredData);
    }
    else {
      setSearchContacts(userContacts);
    }
    
  }, [searchTerm]);

  return (
    <div className="flex flex-col h-full">
      <div className="h-[66px] flex items-end px-3 py-4">
        <div className="flex items-end gap-12 text-white">
          
          <BiArrowBack
            className="text-xl cursor-pointer"
            onClick={() => dispatch({ type: "ALL_CONTACTS_PAGE" })}
          />
          
          <span>New Chat</span>
          <div></div>
        </div>
      </div>
      <div className="items-center justify-between flex-auto h-full gap-5 py-3 pl-5 pr-5 overflow-auto bg-search-input-container-background h-14 custom-scrollbar">
        <div className="flex items-center flex-grow px-3 py-1 rounded-lg bg-panel-header-background w-1/1">
          <div>
            <BiSearchAlt2 className="text-lg cursor-pointer text-panel-header-icon" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search your new friend"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full ml-2 text-sm text-white bg-transparent focus:outline-none"
            />
          </div>
        </div>
        {searchContacts &&
          Object.entries(searchContacts).map(([initialLetter, users]) => {
            return (
              users?.id !== userInfo?.id && (
                <div key={initialLetter + users.id}>
                  {Array.isArray(users) &&
                    users.map(
                      (contact) =>
                        contact.id !== userInfo.id && (
                          <>
                            <div
                              className="pt-5 pb-1 pl-10 text-teal-light "
                              key={contact.id}
                            >
                              {initialLetter}
                            </div>
                            <ChatListItem
                              key={contact.id}
                              data={contact}
                              isContactListPage={true}
                            />
                          </>
                        )
                    )}
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}

export default ContactsList;
