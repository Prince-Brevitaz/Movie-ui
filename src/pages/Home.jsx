import { useContext, useEffect } from "react";
import Billboard from "../components/hero/Billboard";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/carousel/Featured";
import Movie from "../components/carousel/Movie";
// import Intro from "../components/splash/Intro";
import { LoginContext } from "../Context/LoginContext";
import Trending from "../components/carousel/Trending";

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

  return (
    // login.loading.firstLoading ? (
    // <Intro />
    // ) : (
    <>
      <Navbar />
      <Billboard />
      <Featured />
      <Movie title="New" />
      <Trending />  
      <Movie title="old" />
      {/* <Movie title="play" /> */}
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
      <div className="h-56" />
    </>
  );
}

export default Home;
