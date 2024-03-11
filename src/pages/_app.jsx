import "@/styles/globals.css";
import "./login.css";
import { StateProvider } from "@/context/StateContext";
import Head from "next/head";
import favicon from "../../public/favicon.ico";
import reducer, { initialState } from "@/context/StateReducers";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <Link rel="icon" href={favicon} />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}
