import Main from "@/components/Main";
import { useStateProvider } from "@/context/StateContext";
import React from "react";

const index = () => {
  const [state, dispatch] = useStateProvider();
  return (
    <div>
      <Main />
    </div>
  );
};

export default index;
