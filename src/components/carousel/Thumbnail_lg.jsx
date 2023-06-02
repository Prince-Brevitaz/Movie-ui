import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveness = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
    partialVisibilityGutter: 30,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    partialVisibilityGutter: 20,
    slidesToSlide: 2,
  },
};
function Thumbnail_lg() {
  return (
    <>
      <div className="relative">
        {/* <div className="flex justify-between mr-6">
        <div className="flex items-center font-semibold text-white text-2xl cursor-pointer">
          popular category
        </div>
      </div> */}

        <Carousel
          responsive={responsiveness}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={false}
          // autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="500ms ease-in-out"
          transitionDuration={500}
          containerClass="bg-transparent"
          itemClass="flex items-center object-cover text-white bg-transparent"
          partialVisible={true}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          centerMode={false}
          arrows={true}
          className="your-carousel-class mt-4"
        >
          <div className="object-cover hover:brightness-125 cursor-pointer mr-4">
            <img
              style={{ userSelect: "none" }}
              className="pointer-events-none h-[100%] z-[-1]"
              src={`https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png`}
              alt={"AfterSun"}
            />
          </div>

          <div className="object-cover hover:brightness-125 cursor-pointer mr-4">
            <img
              style={{ userSelect: "none" }}
              className="pointer-events-none h-[100%] z-[-1]"
              src={`https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png`}
              alt={"AfterSun"}
            />
          </div><div className="object-cover hover:brightness-125 cursor-pointer mr-4">
            <img
              style={{ userSelect: "none" }}
              className="pointer-events-none h-[100%] z-[-1]"
              src={`https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png`}
              alt={"AfterSun"}
            />
          </div><div className="object-cover hover:brightness-125 cursor-pointer mr-4">
            <img
              style={{ userSelect: "none" }}
              className="pointer-events-none h-[100%] z-[-1]"
              src={`https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png`}
              alt={"AfterSun"}
            />
          </div><div className="object-cover hover:brightness-125 cursor-pointer mr-4">
            <img
              style={{ userSelect: "none" }}
              className="pointer-events-none h-[100%] z-[-1]"
              src={`https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png`}
              alt={"AfterSun"}
            />
          </div>

          {/* <div className="group bg-zinc-900 col-span relative h-[12vm]">
        <img
          className="
                  cursor-pointer
                  object-cover
                  transition
                  duration-75
                  shadow-xl
                  rounded-md
                  group-hover:opacity-90
                  sm:group-hover:opacity-0
                  delay-300
                  w-full
                  h-[12vm]
                "
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"
          alt="Movie Thumbnail"
        />
        <div
          className="
                opacity-0
                absolute
                top-0
                transition
                duration-200
                z-10
                invisible
                sm:visible
                delay-300
                w-full
                group-hover:scale-110
                group-hover:-translate-y-[6vw]
                group-hover:translate-x-[2vw]
                group-hover:opacity-100
              "
        >
          <img
            className="
                  cursor-pointer
                  object-cover
                  transition
                  duration
                  shadow-xl
                  rounded-t-md
                  w-full
                  h-full
                "
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"
            alt="thumbnail"
          />
          <div
            className="
                  z-10
                  bg-zinc-800
                  p-2
                  lg:p-4
                  absolute
                  w-full
                  transition
                  shadow-md
                  rounded-b-md
                "
          >
            <div className=" flex flex-row items-center gap-3">
              <div
                className="
                      cursor-pointer
                      w-6
                      h-6
                      lg:w-10
                      lg:h-10
                      bg-white
                      rounded-full
                      flex
                      justify-center
                      items-center
                      transition
                      hover:bg-neutral-300
                    "
              >
                <i className="fa-solid fa-play fa-lg"></i>
              </div>
            </div>
            <div className="flex flex-row mt-4 gap-2 items-center">
              <p className="text-white text-[10px] lg:text-sm">duration</p>
            </div>

            <div className="flex flex-row mt-4 gap-2 items-center">
              <p className="text-white text-[10px] lg:text-sm">Comedy</p>
            </div>
          </div>
        </div>
      </div>  */}
        </Carousel>
      </div>
    </>
  );
}

export default Thumbnail_lg;
