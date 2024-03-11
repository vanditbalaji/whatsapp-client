import React, { useEffect, useRef } from "react";

const ContextMenu = ({ options, coordinates, contextMenu, setContextMenu }) => {
  const contextRef = useRef();

  const handleContext = (e, name, callback) => {
    e.preventDefault();
    setContextMenu(false);
    callback();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id !== "context-opener") {
        if (contextRef.current && !contextRef.current.contains(event.target)) {
          setContextMenu(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed bg-dropdown-background z-[100] py-2 context-menu`}
      ref={contextRef}
      style={{ top: coordinates.y, left: coordinates.x }}
    >
      <ul>
        {options.map(({ name, callback }, index) => (
          <li
            key={index}
            className="p-2 m-2 text-white cursor-pointer hover:bg-dropdown-background-hover"
            onClick={(e) => handleContext(e, name, callback)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
