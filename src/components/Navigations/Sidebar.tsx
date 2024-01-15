import Link from "next/link";
import React from "react";
import { RiNodeTree } from "react-icons/ri";
import { TfiAngleRight } from "react-icons/tfi";
import { FaCoins } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BiMessageAdd } from "react-icons/bi";
import { PiRecordFill } from "react-icons/pi";
import { MdRebaseEdit } from "react-icons/md";

type Link = {
  name: string;
  path: string;
  icon: any;
};
const Sidebar = () => {
  const navLinks: Array<Link> = [
    {
      name: "Node Overview",
      path: "node-overview",
      icon: <RiNodeTree />,
    },
    {
      name: "DVPN Earnings",
      path: "dvpn-earnings",
      icon: <FaCoins />,
    },
    {
      name: "Session History",
      path: "session-history",
      icon: <IoMdTime />,
    },
    {
      name: "Subscription History",
      path: "subscription-history",
      icon: <BiMessageAdd />,
    },
    {
      name: "Bandwidth Usage",
      path: "bandwidth-usage",
      icon: <PiRecordFill />,
    },
    {
      name: "Edit Node Configuration",
      path: "edit-node-configuration",
      icon: <MdRebaseEdit />,
    },
  ];
  return (
    <div className="w-[400px] fixed top-[20%]  border rounded-md border-[#1e2441] bg-[#13182a] p-5 text-white">
      <div>
        <div className="font-[200] px-2 flex items-center justify-start gap-3 border-b border-[#29364d] pb-4">
          <span className="w-[80px] text-gray-500">IP Address</span>
          <span className=" w-1/7 text-gray-500">:</span>
          <span className="w-1/4">136.151.15.107</span>
        </div>
        <div className="font-[200] px-2 flex items-center justify-start gap-3 border-b border-[#29364d] py-4">
          <span className="w-[80px] text-gray-500">Country</span>
          <span className=" w-1/7 text-gray-500">:</span>
          <span className="w-1/4">Canada</span>
        </div>
      </div>
      <div className="pt-5 space-y-3">
        {navLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className="flex items-center justify-between gap-4 px-[13px] py-[14px] rounded-xl bg-[#00000065] border border-[#25283e] transition-all hover:border-[#2e5284]"
            >
              <span className="flex items-center gap-4 ">
                <span className="bg-[#187cff] p-2 rounded-full">
                  {link.icon}
                </span>
                <span className="text-lg font-[200] text-gray-400">
                  {link.name}
                </span>
              </span>
              <span>
                <TfiAngleRight />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
