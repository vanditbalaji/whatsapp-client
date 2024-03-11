import React, { useEffect } from "react";

function Input({ name, state, setState, label }) {

  
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor="name" className="px-1 text-lg text-teal-light">
        {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-1 pl-1 m-2 text-white pl- bg-input-background text-start focus:outline-none"
        />
      </div>
    </div>
  );
}

export default Input;
