import { useStateProvider } from "@/context/StateContext";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

const SearchBar = () => {
  const [{ contactSearch }, dispatch] = useStateProvider();

  return (
    <div className="flex items-center justify-between gap-5 py-3 pl-5 bg-search-input-container-background h-14">
      <div className="flex items-center flex-grow w-full px-3 py-1 rounded-lg bg-panel-header-background">
        <div>
          <BiSearchAlt2 className="text-lg cursor-pointer text-panel-header-icon" />
        </div>
        <div>
          <input
            type="text"
            value={contactSearch}
            onChange={(e) => dispatch({ type: "SET_CONTACT_SEARCH",contactSearch:e.target.value })}
            placeholder="Search or start new chat"
            className="w-full ml-2 text-sm text-white bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="mr-5 text-xl cursor-pointer text-panel-header-icon">
        <BsFilter />
      </div>
    </div>
  );
};

export default SearchBar;
