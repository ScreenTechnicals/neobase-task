import React from "react";
import Card from "@/components/Cards/Card";

const Section1 = () => {
  const sessionData = [
    {
      heading: "Active Sessions",
      subheading: "+12.21",
      desc: "10h",
    },
    {
      heading: "Total Sessions",
      subheading: "-2.21",
      desc: "100h",
    },
    {
      heading: "Highest Active Sessions",
      subheading: "+12.21",
      desc: "10h",
    },
    {
      heading: "Longest Sessions",
      subheading: "-2.21",
      desc: "12h:31m:2s",
    },
  ];
  return (
    <div>
      <p className="text-4xl">Session History</p>
      <div className="w-full mt-5 flex items-center gap-5 justify-between">
        {sessionData.map((data, index) => {
          return (
            <Card
              key={index}
              heading={data.heading}
              subheading={data.subheading}
              desc={data.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
