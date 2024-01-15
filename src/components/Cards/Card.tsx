import React from "react";

const Card = ({
  heading,
  subheading,
  desc,
}: {
  heading: string;
  subheading: string;
  desc: string;
}) => {
  return (
    <div className="border border-[#1e2441] bg-[#13182a] p-5 rounded-xl">
      <p className="flex items-center gap-5 justify-between text-sm text-gray-400 font-[300]">
        <span>{heading}</span>
        <span
          className={
            parseFloat(subheading) > 0 ? "text-green-500" : "text-red-500"
          }
        >
          {subheading}
        </span>
      </p>
      <p className="py-5 uppercase text-xl font-[400]">{desc}</p>
    </div>
  );
};

export default Card;
