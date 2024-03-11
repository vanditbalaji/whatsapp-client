import React, { useContext, useState } from "react";
import { StateContext, useStateProvider } from "@/context/StateContext";
import gif from "../../public/whatsapp.gif";
import Image from "next/image";
import Input from "@/components/common/Input";
import default_avatar from "../../public/default_avatar.png";
import Avatar from "@/components/common/Avatar";
import axios from "axios";
import { ONBOARD_USER } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
const onboarding = () => {
  const [userInfo, dispatch] = useContext(StateContext);
  const [name, setName] = useState(userInfo?.userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(default_avatar);
  const router = useRouter();

  const handleUserOnBoard = async () => {
    const email = userInfo.userInfo.email;
    if (validate()) {
      const { data } = await axios.post(ONBOARD_USER, {
        email,
        name,
        about,
        photoUrl: image.src,
      });
      if (data.status) {
        dispatch({
          type: "USER_INFO",
          userInfo: { name, email, about, photoUrl: image.src },
        });
        dispatch({
          type: "NEW_USER_INFO",
          newUser: false,
        });
        router.push("/");
      }
      try {
      } catch (err) {
        console.error(err);
      }
    }
  };

  const validate = () => {
    if (name === "") {
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-2 overflow-hidden bg-panel-header-background">
      <div className="flex items-center justify-center">
        <Image
          src={gif}
          alt="whatsapp"
          className="whatsapp-gif"
          width={300}
          height={300}
        />
        <span className="mr-4 text-4xl text-white lg:text-7xl">Whatsapp</span>
      </div>
      <span className="mt-4 text-white text-1xl lg:text-2xl">
        Create Your Profile
      </span>
      <div className="flex gap-6 mt-3 avatarImage">
        <div className="flex flex-col items-center justify-center gap-5 mt-6">
          <Input name="Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div>
            <button
              onClick={handleUserOnBoard}
              className="flex items-center justify-center p-1 mt-2 rounded-lg bg-search-input-container-background lg:p-3 text-white"
            >
              Create Profile
            </button>
          </div>
        </div>
        <div className="">
          <Avatar type="xl" state={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
};

export default onboarding;
