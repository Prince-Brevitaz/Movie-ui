import Thumbnail_lg from "./Thumbnail_lg"
import PropTypes from "prop-types";

function Movie_lg({title}) {
  return (
    <div
      className="relative w-full -top-48 md:-top-96 mt-10
     bg-gradient-to-b from-transparent to-95%"
    >
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
          {title}
        </p>
        <Thumbnail_lg />
      </div>
    </div>
  )
}

Movie_lg.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default Movie_lg