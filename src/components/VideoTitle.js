import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video py-40 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        {/* <button className="  mx-2 text-black p-4 px-9 text-xl rounded-lg bg-white hover:bg-opacity-75">
          ▶️Play
        </button>
        <button className="hover:bg-opacity-75 bg-slate-800 mx-2 bg-opacity-50 text-white p-4 px-9 text-xl rounded-lg">
          ❗MoreInfo
        </button> */}
      </div>
    </div>
  );
};

export default VideoTitle;
