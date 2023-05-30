import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./mobile/MobileMenu";
import NavbarItem from "./NavbarItem";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((value) => !value);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((value) => !value);
  }, []);

  return (
    <>
      <nav className="w-full fixed z-40">
        <div
          className={`
          px-4 
          md:px-16 
          py-5 
          flex 
          flex-row 
          items-center 
          transition duration-500
          
          ${showBackground ? 'bg-zinc-900 bg-opacity-90' : '' }
        `}
        >
          <img
            className="h-6 mt-3 lg:h-7"
            src="/src/images/logo.png"
            alt="logo"
          />
          <div className="flex-row ml-16 gap-7 hidden lg:flex">
            <NavbarItem label={"Home"} />
            <NavbarItem label={"Featured"} />
            <NavbarItem label={"Series"} />
            <NavbarItem label={"Movies"} />
            <NavbarItem label={"My List"} />
          </div>
          <div
            onClick={toggleMobileMenu}
            className="lg:hidden mt-3 flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          >
            <p className="text-white  text-xl"> Browse</p>
            <i
              className={`fa-solid fa-chevron-down text-white transition ${
                showMobileMenu ? "rotate-180" : "rotate-0"
              } fa-lg`}
            ></i>
            <MobileMenu isVisible={showMobileMenu} />
          </div>
          <div className="flex flex-row mt-3 ml-auto gap-7 items-center">
            <div className="text-white hover:text-gray-400 cursor-pointer transition">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>
            <div
              onClick={toggleAccountMenu}
              className="flex flex-row items-center gap-2 cursor-pointer relative"
            >
              <div className="w-7 h-7 lg:w-11 lg:h-11 rounded-md overflow-hidden">
                <img src="/src/images/default-blue.png" alt="profile" />
              </div>
              <i
                className={`fa-solid fa-chevron-down text-white transition ${
                  showAccountMenu ? "rotate-180" : "rotate-0"
                } fa-lg`}
              ></i>
              <AccountMenu isVisible={showAccountMenu} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
