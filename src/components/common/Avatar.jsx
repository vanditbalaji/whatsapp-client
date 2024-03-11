import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";
import img from "../../../public/default_avatar.png";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";

function Avatar({ type, state, setImage }) {
  const [hover, setHover] = useState(false);
  const [contextMenuVisible, setContextmenuVisible] = useState(false);
  const [contextCoordinates, setContextCoordinates] = useState({ x: 0, y: 0 });
  const [grapPhoto, setGrabPhoto] = useState(false);
  const [photoLibrary, setPhotoLibrary] = useState(false);

  const handleContext = (e) => {
    e.preventDefault();
    setContextmenuVisible(true);
    setContextCoordinates({ x: e.pageX, y: e.pageY });
  };

  const options = [
    {
      name: "Choose From Library",
      callback: () => {
        setPhotoLibrary(true);
      },
    },
    {
      name: "Upload Photo",
      callback: () => {
        setGrabPhoto(true);
      },
    },
    {
      name: "Remove Photo",
      callback: () => {
        setImage(img);
      },
    },
  ];

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");
    reader.onload = function (event) {
      data.src = event.target.result;
      data.setAttribute("data-src", event.target.result);
    };
    reader.readAsDataURL(file);
    setTimeout(() => {
      setImage(data.src);
    }, 1000);
  };

  useEffect(() => {
    if (grapPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000);
      };
    }
  }, [grapPhoto]);
  return (
    <>
      {contextMenuVisible && (
        <ContextMenu
          options={options}
          coordinates={contextCoordinates}
          contextMenu={contextMenuVisible}
          setContextMenu={setContextmenuVisible}
        />
      )}
      {photoLibrary && (
        <PhotoLibrary setImage={setImage} setPhotoLibrary={setPhotoLibrary} />
      )}
      {grapPhoto && <PhotoPicker onChange={handlePhotoChange} />}
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative w-10 h-10">
            <Image className="rounded-full " src={state} fill alt="" />
          </div>
        )}

        {type === "lg" && (
          <div className="relative cursor-pointer">
            <div
              className="h-14 w-14"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div>
                {/* <FaCamera /> */}
              </div>
              <Image className="rounded-full " src={state} fill />
            </div>
          </div>
        )}

        {type === "xl" && (
          <div className="relative cursor-pointer avatar">
            <div
              className=""
              id="context-opener"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                id="context-opener"
                onClick={(e) => handleContext(e)}
                className={`absolute z-20 bg-photopicker-overlay-background top-0 m-0 flex justify-center items-center flex-col h-full w-full rounded-lg ${
                  hover ? "visible" : "hidden"
                }`}
              >
                <FaCamera color="white" id="context-opener" />
                <span className="mt-3 text-center text-white">
                  Choose Your Photo
                </span>
              </div>

              <Image
                className="z-0 w-full h-full rounded-full"
                src={state}
                id="context-opener"
                fill
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Avatar;
