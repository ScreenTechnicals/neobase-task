import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full py-5 px-16 flex sticky top-0 left-0 items-center justify-between border-b border-[#1d2235] z-[9999] backdrop-blur-xl">
      <div className="flex items-center gap-5 ">
        <Link href={"/"} className="text-[#b0b0b0] text-4xl">
          <FaArrowLeft />
        </Link>
        <span className="text-4xl text-white">Instance Name</span>
      </div>
      <div className="text-white flex items-center gap-5">
        <div>
          <p className="text-4xl">Node Moniker</p>
          <p className="text-sm text-[#b0b0b0] font-[400]">3w45rty...axdtyf</p>
        </div>
        <div className="w-[1px] h-[50px] bg-gradient-to-tr from-[#00a75f] to-[#003f24]"></div>
        <div className="">
          <button className="text-lg bg-[#00a75f] py-2 px-20 rounded-xl">
            Start
          </button>
        </div>
      </div>
      <div>
        <Image
          src={"/images/logo.png"}
          width={200}
          height={100}
          alt="loading logo"
        />
      </div>
    </header>
  );
};

export default Header;
