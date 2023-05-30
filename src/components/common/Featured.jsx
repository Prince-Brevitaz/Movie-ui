import Thumbnail from "./Thumbnail";
// import data from "../../../movie.json";

function Featured() {
//   const video = data;
  return (
    <div className="relative -top-80 ml-4 md:ml-16">
      <p
        className="
          text-white 
          text-3xl 
          md:text-4xl 
          h-full 
          w-[50%] 
          lg:text-4xl 
          font-bold 
          drop-shadow-xl"
      >
        Trending Movies
      </p>
      <Thumbnail />
      {/* {video.map((obj) => (
        <h1>{obj.title}</h1>
      ))} */}
    </div>
  );
}

export default Featured;
