import React from "react";

type Data = {
  sessionStartTime?: string;
  date?: string;
  duration?: string;
  nodeUsed?: string;
  dataConsumed?: string;
  LocationOfNode?: string;
};
const Section3 = () => {
  const dataHisitory: Array<Data> = [
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "Wiregaurd",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "Wiregaurd",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "V2Ray",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "V2Ray",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "Wiregaurd",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "OpenVPN",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "OpenVPN",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
    {
      sessionStartTime: "11:43:23",
      date: "27-07-24",
      duration: ".234 sec",
      nodeUsed: "OpenVPN",
      dataConsumed: "0.15 MB",
      LocationOfNode: "Singapore",
    },
  ];
  return (
    <div className="py-5 border rounded-xl border-[#1e2441] bg-[#13182a] mb-10">
      <p className="px-5 pb-5 text-4xl">Session History</p>
      <div className="flex justify-between w-full bg-[#272d40] p-5">
        <div className="w-1/6 text-md font-[300] capitalize text-center">
          session start time
        </div>
        <div className="w-1/6 text-md font-[300] capitalize text-center">
          date
        </div>
        <div className="w-1/6 text-md font-[300] capitalize text-center">
          duration
        </div>
        <div className="w-1/6 text-md font-[300] capitalize text-center">
          node used
        </div>
        <div className="w-1/6 text-md font-[300] capitalize text-center">
          data consumed
        </div>
        <div className="w-1/6 text-md font-[300] capitalize text-center">
          location of node
        </div>
      </div>
      {dataHisitory.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index === dataHisitory.length - 1
                ? "flex justify-between items-center w-full  p-5"
                : "flex justify-between items-center w-full border-b border-[#272d40] p-5"
            }
          >
            <div className="w-1/6 text-md font-[300] capitalize text-center">
              {item?.sessionStartTime}
            </div>
            <div className="w-1/6 text-md font-[300] capitalize text-center">
              {item?.date}
            </div>
            <div className="w-1/6 text-md font-[300] capitalize text-center">
              {item?.duration}
            </div>
            <div
              className={
                item?.nodeUsed === "Wiregaurd"
                  ? "w-1/6 text-md font-[300] capitalize text-center rounded-md bg-[#1462ff] py-2"
                  : item?.nodeUsed === "V2Ray"
                  ? "w-1/6 text-md rounded-md bg-[#ff2727] py-2 font-[300] capitalize text-center"
                  : "w-1/6 text-md rounded-md bg-[#ffffff] text-[#1462ff] py-2 font-[500] capitalize text-center"
              }
            >
              {item?.nodeUsed}
            </div>
            <div className="w-1/6 text-md font-[300] capitalize text-center">
              {item?.dataConsumed}
            </div>
            <div className="w-1/6 text-md font-[300] capitalize text-center">
              {item?.LocationOfNode}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section3;
