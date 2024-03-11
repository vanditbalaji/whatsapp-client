import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function SearchMessages() {
  const [{ currentUser, message }, dispatch] = useStateProvider();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMessages, setSearchedMessages] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      setSearchedMessages(
        message.filter(
          (message) =>
            message.type === "text" && message.message.includes(searchTerm)
        )
      );
    } else {
      setSearchedMessages([]);
    }
  }, [searchTerm]);
  
  return (
    <div className="z-10 flex flex-col w-full max-h-screen border border-conversation-border border-1 bg-conversation-panel-background">
      <div className="flex items-center h-16 gap-10 px-4 py-5 bg-panel-header-background text-primary-strong ">
        <IoClose
          className="text-2xl cursor-pointer text-icon-lighter"
          onClick={() => dispatch({ type: "SET_MESSAGE_SEARCH" })}
        />
        <span>Search Messages</span>
      </div>
      <div className="h-full overflow-auto custom-scrollbar">
        <div className="flex flex-col items-center">
          <div className="flex items-center w-full gap-3 px-5 h-14">
            <div className="flex items-center flex-grow w-full px-3 py-1 rounded-lg bg-panel-header-background">
              <div>
                <BiSearchAlt2 className="text-lg cursor-pointer text-panel-header-icon" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search Messages"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full ml-2 text-sm text-white bg-transparent focus:outline-none"
                />
              </div>
            </div>
          </div>
          <span className="mt-10 text-secondary">
            {!searchTerm.length &&
              `Search for messages with ${currentUser.name}`}
          </span>
        </div>
        <div className="flex flex-col justify-center h-full">
          {searchTerm.length > 0 && !searchedMessages.length && (
            <span className="flex justify-center w-full text-secondary">
              No messages found
            </span>
          )}

          <div className="flex flex-col w-full h-full ">
            {searchedMessages.map((message) => (
              <div className="flex flex-col justify-center w-full px-5 py-5 cursor-pointer hover:bg-background-default-hover">
                <div className="text-sm text-secondary">
                  {calculateTime(message.createdAt)}
                </div>
                <div className="text-icon-green">{message.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMessages;
