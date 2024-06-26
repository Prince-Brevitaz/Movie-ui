// import React from 'react'
import { useCallback } from "react";
import data from "../../../movie.json";
import { Link } from "react-router-dom";

function Billboard() {
  //Remove this from here and shift to Home Component To load Faster
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const collect = useCallback(() => {
    const number = rand(1, 4);
    return data.find((obj) => obj.id === number);
  }, []);
  const video = collect();
  console.log(video);

  return (
    <>
      <div className="relative h-[95%]">
        <video
          className="
                w-full
                h-[95%]
                object-cover 
                brightness-[60%]"
          autoPlay
          muted
          poster={video?.thumbnailUrl}
          src={video?.videoUrl}
        ></video>
        <div className="absolute top-[20%] md:top-[25%] ml-4 md:ml-16">
          <p
            className="
          text-white 
          text-6xl 
          md:text-5xl 
          h-full 
          w-[50%] 
          lg:text-6xl 
          font-bold 
          drop-shadow-xl"
          >
            {video?.title}
          </p>
          <p
            className="
            text-white
            text-[18px]
            md:text-lg
            mt-3
            md:mt-8
            w-[90%]
            md:w-[80%]
            lg:w-[50%]
            drop-shadow-xl
          "
          >
            {video?.description}
          </p>
          <div
            className="
                flex flex-row items-center mt-3 md:mt-4 gap-3
            "
          >
            <Link to={`/video/${video.id}`}><button
              className="
                    bg-white
                    text-zinc-800
                    bg-opacity-50
                    rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    h-12
                    text-base lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    hover:text-zinc-300
                    transition
                    
                "
            >
              {/* <i className="fas fa-play-circle"></i> */}
              <i className="fa-solid fa-circle-play fa-xl mr-2"></i>
              Play
            </button></Link>
            <button
              className="
                    bg-white
                    text-white
                    bg-opacity-30
                    rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    h-12
                    text-base lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    transition
                "
            >
              <i className="fa-solid fa-circle-info fa-lg mr-2"></i>
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billboard;
