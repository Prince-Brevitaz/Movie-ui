import { useContext, useEffect } from "react";
import Billboard from "../components/hero/Billboard";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/carousel/Featured";
import Movie from "../components/carousel/Movie";
import Intro from "../components/splash/Intro";
import { LoginContext } from "../Context/LoginContext";
import Trending from "../components/carousel/Trending";
// import Thumbnail from "../components/carousel/Thumbnail";
// import Thumbnail_lg from "../components/carousel/Thumbnail_lg";
import Movie_lg from "../components/carousel/Movie_lg";

function Home() {
  let login = useContext(LoginContext);
  const differ = () => {
    setTimeout(() => {
      login.loading.setFirstLoading(false);
    }, 4800);
  };

  useEffect(() => {
    login.loading.firstLoading ? differ() : null;
  });

  return login.loading.firstLoading ? (
    <Intro />
    ) : (
    <>
      <Navbar />
      <Billboard />
      <Featured />
      <Movie_lg title="long"/>
      <Movie title="New" />
      <Trending />
      {/* <Thumbnail_lg /> */}
      {/* <Movie title="old" /> */}
      {/* <Movie title="play" /> */}
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
    </>
  );
}

export default Home;
