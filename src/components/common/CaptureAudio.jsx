import { useStateProvider } from "@/context/StateContext";
import { ADD_AUDIO_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  FaMicrophone,
  FaPauseCircle,
  FaPlay,
  FaStop,
  FaTrash,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import WaveSurfer from "wavesurfer.js";

const CaptureAudio = ({ hide }) => {
  const [{ userInfo, currentUser, socket }, dispatch] = useStateProvider();

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [waveForm, setWaveForm] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, settotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  const [renderedAudio, setRenderedaudio] = useState(null);

  const audioRef = useRef();
  const mediaRecordedRed = useRef();
  const waveFormRef = useRef();

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration((prevDuration) => {
          settotalDuration(prevDuration + 1);
          return prevDuration + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording]);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveFormRef.current,
      waveColor: "#ccc",
      progressColor: "#4a9eff",
      cursorColor: "#7ae3c3",
      barWidth: 2,
      height: 30,
      responsive: true,
    });
    setWaveForm(wavesurfer);

    wavesurfer.on("finish", () => {
      setIsPlaying(false);
    });

    return () => {
      wavesurfer.destroy();
    };
  }, []);

  useEffect(() => {
    if (recordedAudio) {
      const updatePlaybackTime = () => {
        setCurrentPlaybackTime(recordedAudio.currentTime);
      };
      recordedAudio.addEventListener("timeupdate", updatePlaybackTime);
      return () => {
        recordedAudio.removeEventListener("timeupdate", updatePlaybackTime);
      };
    }
  }, [recordedAudio]);

  useEffect(() => {
    if (waveForm) handleStartRecording();
  }, [waveForm]);

  const handleStartRecording = () => {
    setRecordingDuration(0);
    setCurrentPlaybackTime(0);
    settotalDuration(0);
    setRecordedAudio(null);
    setIsRecording(true);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecordedRed.current = mediaRecorder;
        audioRef.current.srcObject = stream;

        const chunk = [];
        mediaRecorder.ondataavailable = (e) => chunk.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunk, { type: "audio/ogg; codecs=opus" });
          const audioUrl = URL.createObjectURL(blob);
          const audio = new Audio(audioUrl);
          console.log("this is audio",audio)
          setRecordedAudio(audio);
          waveForm.load(audioUrl);
        };
        mediaRecorder.start();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecordedRed.current && isRecording) {
      mediaRecordedRed.current.stop();
      setIsRecording(false);
      waveForm.stop();

      const audioChunk = [];
      mediaRecordedRed.current.addEventListener("dataavailable", (event) => {
        const audioBlob = new Blob(audioChunk, { type: "audio/mp3" });
        const audioFile = new File([audioBlob], "recording.mp3");
        setRenderedaudio(audioFile);
      });
    }
  };

  const handlePlayRecording = () => {
    if (recordedAudio) {
      waveForm.stop();
      waveForm.play();
      recordedAudio.play();
      setIsPlaying(true);
    }
  };

  const handlePauseRecording = () => {
    waveForm.stop();
    recordedAudio.pause();
    setIsPlaying(false);
  };

  const sendRecording = async () => {
    try {
      const formData = new FormData();
    formData.append(
      "audio",
      new Blob([recordedAudio], { type: "audio/mp3" }),
      "audio.mp3"
    );


      // Mistake

      // formData.append("audio", renderedAudio);

      const response = await axios.post(ADD_AUDIO_MESSAGE_ROUTE, formData, {
        params: {
          from: userInfo.id,
          to: currentUser.id,
        },
      });

      if (response.status === 201) {
        socket.current.emit("send-msg", {
          senderId: userInfo.id,
          receiverId: currentUser.id,
          message: response.data.message.message,
          id: response.data.message.id,
          type: response.data.message.type,
          messageStatus: response.data.message.messageStatus,
          createdAt: response.data.message.createdAt,
        });

        dispatch({
          type: "ADD_MESSAGE",
          newMessage: {
            ...response.data.message,
          },
          fromSelf: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-end w-full text-2xl">
      <div className="pt-1">
        <FaTrash className="text-panel-header-icon" onClick={() => hide()} />
      </div>
      <div className="flex items-center justify-center gap-3 px-4 py-2 mx-4 text-lg text-white rounded-full bg-search-input-container-background drop-shadow-lg">
        {isRecording ? (
          <div className="text-center text-red-500 animate-pulse w-60">
            Recording <span>{recordingDuration} s</span>
          </div>
        ) : (
          <div>
            {recordedAudio && (
              <>
                {!isPlaying ? (
                  <FaPlay onClick={handlePlayRecording} />
                ) : (
                  <FaStop onClick={handlePauseRecording} />
                )}
              </>
            )}
          </div>
        )}
        <div className="w-60" ref={waveFormRef} hidden={isRecording}>
          {recordedAudio && isRecording && (
            <span>{formatTime(currentPlaybackTime)}</span>
          )}
          {recordedAudio && !isPlaying && (
            <span>{formatTime(totalDuration)}</span>
          )}
          <audio ref={audioRef} hidden />
        </div>
        <div className="mr-4">
          {!isRecording ? (
            <FaMicrophone
              className="text-red-500"
              onClick={handleStartRecording}
            />
          ) : (
            <FaPauseCircle
              className="text-red-500"
              onClick={handleStopRecording}
            />
          )}
        </div>
        <div>
          <MdSend
            className="mr-4 cursor-pointer text-panel-header-icon "
            title="send"
            onClick={sendRecording}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptureAudio;
