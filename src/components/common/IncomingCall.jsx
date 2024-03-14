import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";

function IncomingCall() {
  const [{ incomingVoiceCall, socket }, dispatch] = useStateProvider();

  const acceptCall = () => {
    dispatch({
      type: "SET_VOICE_CALL",
      voiceCall: { ...incomingVoiceCall, type: "in-coming" },
    });

    socket.current.emit("accept-incoming-call", { id: incomingVoiceCall.id });

    dispatch({
      type: "SET_INCOMING_VOICE_CALL",
      incomingVoiceCall: undefined,
    });
  };
  const rejectcall = () => {
    socket.current.emit("reject-voice-call", { from: incomingVoiceCall.id });
    dispatch({ type: "END_CALL" });
  };

  return (
    incomingVoiceCall && (
      <div className="fixed z-50 flex items-center justify-start h-24 gap-5 p-4 mb-0 text-white border-2 rounded-sm w-80 bottom-8 right-6 bg-conversation-panel-background drop-shadow-2xl border-icon-green py-14">
        <div>
          <Image
            src={incomingVoiceCall?.profilePicture}
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div>
          <div>{incomingVoiceCall?.name}</div>
          <div className="text-xs">Incoming Voice Call</div>
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

export default IncomingCall;
