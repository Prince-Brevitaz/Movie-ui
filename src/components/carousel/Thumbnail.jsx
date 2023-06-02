import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveness = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5,
    partialVisibilityGutter: 40,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 30,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.4,
    partialVisibilityGutter: 20,
    slidesToSlide: 2,
  },
};

const Thumbnail = () => {
  return (
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
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div><div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div><div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div><div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div><div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div><div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>

        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
        <div className="object-cover h-[100%] hover:brightness-125 cursor-pointer mr-4">
          <img
            style={{ userSelect: "none" }}
            className="pointer-events-none h-[100%] z-[-1]"
            src={`/src/images/Aftersun.png`}
            alt={"AfterSun"}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Thumbnail;
