import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxFXMQ_un7dOlpAKtYbd9R41BaW-kW4Hg",
  authDomain: "whatsapp-5cf5b.firebaseapp.com",
  projectId: "whatsapp-5cf5b",
  storageBucket: "whatsapp-5cf5b.appspot.com",
  messagingSenderId: "1062221731119",
  appId: "1:1062221731119:web:3fd1de680225d40884fdda",
  measurementId: "G-ZR71VD8LHT",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
