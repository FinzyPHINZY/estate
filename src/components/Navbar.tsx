import { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" className="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>

        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* mobile menu here */}
      {showMobileMenu && (
        <div
          className={`md:hidden ${showMobileMenu ? 'fixed w-full ' : 'h-0 w-0'}right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              src={assets.cross_icon}
              alt=""
              className="w-6"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium *:px-4 *:py-2 *:rounded-full *:inline-block">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#header"
              className=""
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#about"
              className=""
            >
              About
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#projects"
              className=""
            >
              Projects
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#testimonials"
              className=""
            >
              Testimonials
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};
