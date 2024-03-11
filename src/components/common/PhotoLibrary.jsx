import React from "react";
import { IoClose } from "react-icons/io5";
import img1 from "../../../public/avatars/1.png";
import img2 from "../../../public/avatars/1.png";
import img4 from "../../../public/avatars/4.png";
import img5 from "../../../public/avatars/5.png";
import img6 from "../../../public/avatars/6.png";
import img7 from "../../../public/avatars/7.png";
import img8 from "../../../public/avatars/8.png";
import img9 from "../../../public/avatars/9.png";
import img3 from "../../../public/avatars/3.png";
import Image from "next/image";
function PhotoLibrary({ setImage, setPhotoLibrary }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="z-20 fixed flex justify-center items-center top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full ">
      <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-4">
        <div
          className="pt-2 pe-2 flex justify-end items-end"
          onClick={() => setPhotoLibrary(false)}
        >
          <IoClose className="h-10 w-10 text-white cursor-pointer" />
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-16 p-20 w-full">
          {images.map((name, index) => (
            <div
              onClick={() => {
                setPhotoLibrary(false);
                setImage(images[index]);
              }}
            >
              <div className="h-24 w-24 cursor-pointer">
                <Image src={name} alt="avatar" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
