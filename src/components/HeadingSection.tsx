import { lazy } from "react";
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
const HeadingSection = () => {
  return (
    <div className="heading">
      <div>
        <h1 className="text-7xl font-semibold">
          VirtualR build tools <span className="text-orange-500">for</span>{" "}
        </h1>
        <h1 className="devlop">developers</h1>
      </div>
      <div className="heading !mt-10">
        <p className="text-center text-lg text-[#737373]">
          Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started
          today and turn your imagination into immersive reality!
        </p>
      </div>
      <div className=" !max-w-[50%] !mt-10">
        <div className="flex gap-8 justify-center items-center">
          <button className="Create hover:!scale-105 !py-3 !px-6">Start for free</button>
          <button className="SignIn hover:!scale-105 !py-3 !px-6">Documentation</button>
        </div>
      </div>
      <div className="!mt-10">
        <div className="flex justify-center gap-6">
          <div className="rounded-lg w-1/2 border border-orange-500 overflow-hidden mx-2 my-4">
            <video autoPlay loop muted src={Video1}></video>
          </div>
          <div className="rounded-lg w-1/2 border border-orange-500 overflow-hidden  mx-2 my-4">
            <video autoPlay loop muted src={Video2}></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
