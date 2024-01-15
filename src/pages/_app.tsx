import Header from "@/components/Navigations/Header";
import Sidebar from "@/components/Navigations/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen relative">
      <Header />
      <div className="flex items-start w-full px-12 py-10  text-white gap-10 ">
        <Sidebar />
        <div className="w-[30%]"></div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
