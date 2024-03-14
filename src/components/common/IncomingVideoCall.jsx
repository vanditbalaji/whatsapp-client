import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";

function IncomingVideoCall() {
  const [{ incomingVideoCall, socket, videoCall }, dispatch] =
    useStateProvider();

  const acceptCall = () => {
    dispatch({
      type: "SET_VIDEO_CALL",
      videoCall: { ...incomingVideoCall, type: "in-coming" },
    });

    socket.current.emit("accept-incoming-call", { id: incomingVideoCall.id });

    dispatch({
      type: "SET_INCOMING_VIDEO_CALL",
      incomingVideoCall: undefined,
    });
  };
  const rejectcall = () => {
    socket.current.emit("reject-video-call", { from: incomingVideoCall.id });
    dispatch({ type: "END_CALL" });
  };

  return (
    incomingVideoCall && (
      <div className="fixed z-50 flex items-center justify-start h-24 gap-5 p-4 mb-0 text-white border-2 rounded-sm w-80 bottom-8 right-6 bg-conversation-panel-background drop-shadow-2xl border-icon-green py-14">
        <div>
          <Image
            src={incomingVideoCall?.profilePicture}
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div>
          <div>{incomingVideoCall?.name}</div>
          <div className="text-xs">Incoming Video Call</div>
          <div className="flex gap-2 mt-2">
            <button
              className="p-1 px-3 text-sm bg-red-600 rounded-full"
              onClick={rejectcall}
            >
              Reject
            </button>
            <button
              className="p-1 px-3 text-sm bg-green-600 rounded-full"
              onClick={acceptCall}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default IncomingVideoCall;
