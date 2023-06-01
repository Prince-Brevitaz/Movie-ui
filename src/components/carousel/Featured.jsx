import Thumbnail from "./Thumbnail";
function Featured() {
  return (
    <div className="relative w-full -top-48 md:-top-96
     bg-gradient-to-b from-transparent to-95%">
      <div className="relative  ml-4 md:ml-16">
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
          Featured Movies
        </p>
        <Thumbnail />
      </div>
    </div>
  );
}

export default Featured;
