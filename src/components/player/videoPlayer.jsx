import { useRef } from "react";
import "./player.css";

const VideoPlayer = () => {
  const play = useRef
  return (
    <div className="m-0 flex h-screen w-screen items-center justify-center ">
      <div className="h-[100%] w-[100%] text-white">
        <video
          className="h-[100%] w-[100%]"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>
        <div className="flex fixed top-0 pt-[2%] pl-[5%] pb-[2%] w-[100%] bg-gradient-to-b from-via-slate-400 via-30% to-black">
          <div className="w-[100%]">
            <i className="inline ml-0 fa-solid fa-left-long text-[3vmin]"></i>
            <div className="inline ml-[25%] text-2xl">Dancing Fairy Tail</div>
          </div>
        </div>
        <div className="flex fixed top-[20%] h-[50%] w-[100%]">
          <div className="w-[100%] mt-[10%]">
            <div className="inline ml-[10%] mt-[50%] lg:mt-0 float-left">
              prev-10s
            </div>
            <div className="inline mr-[10%] mt-[50%] lg:mt-0 float-right">
              next-10s
            </div>
          </div>
        </div>
        <div className="flex w-[100%] fixed bottom-0 text-white">
          <div className="w-[100%] mt-[10%] pl-[5%] pr-[2%] pb-[1.5%] justify-evenly">
            <button className="bg-none outline-none shadow-none border-none" ref={play}>
              <i className="fa-solid fa-play text-[3vmin]"></i>
            </button>
            <button className="bg-none outline-none shadow-none border-none">
              <i className="fa-solid fa-pause text-[3vmin]"></i>
            </button>
            <button className="bg-none outline-none shadow-none border-none">
              <i className="fa-solid fa-download text-[3vmin]"></i>
            </button>
            <button className="bg-none outline-none shadow-none border-none">
              <i className="fa-solid fa-list text-[3vmin]"></i>
            </button>
            <button className="bg-none outline-none shadow-none border-none">
              <i className="fa-solid fa-volume-xmark text-[3vmin]"></i>
            </button>
            <button className="bg-none outline-none shadow-none border-none">
              <i className="fa-solid fa-volume-low text-[3vmin]"></i>
            </button>
            <button className="bg-none outline-none shadow-none border-none">
              <i className="fa-solid fa-volume-high text-[3vmin]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
