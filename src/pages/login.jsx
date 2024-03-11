import Image from "next/image";
import React, { useEffect } from "react";
import gif from "../../public/whatsapp.gif";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";

const login = () => {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();
  const { push: redirect } = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (currentUser) => {
        if (!currentUser) redirect("/login");
        const userEmail = currentUser.email;

        const response = await axios.post(CHECK_USER, { userEmail });
        const data = response.data;

        // if (!data || !data.data || !data.status) redirect("/login");
        if (data.data) {
          const { name, about, photoUrl, email, id } = data.data;
          console.log("data", name, about, photoUrl, email);
          dispatch({
            type: "USER_INFO",
            userInfo: { name, email, about, photoUrl, id },
          });

          dispatch({
            type: "NEW_USER_INFO",
            newUser: false,
          });
          redirect("/");
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);

    try {
      if (email) {
        const user = await axios.post(CHECK_USER, { email });
        console.log(user);
        if (!user.data.status) {
          dispatch({
            type: "USER_INFO",
            userInfo: { name, email, profileImage },
          });
          dispatch({
            type: "NEW_USER_INFO",
            newUser: true,
          });
          router.push("/onboarding");
        }
      }
    } catch (err) {
      console.error(err);
    }
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

      <button
        className="flex items-center justify-center p-3 mt-5 rounded-lg bg-search-input-container-background gap-7 lg:p-5"
        onClick={handleLogin}
      >
        <FcGoogle size={30} />
        <span className="text-white text-1xl lg:text-2xl">
          {" "}
          Login With Google
        </span>
      </button>
    </div>
  );
};

export default login;
