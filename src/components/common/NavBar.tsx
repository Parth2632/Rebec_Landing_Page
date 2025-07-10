"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import { animate } from "framer-motion";

function NavBar() {
  const [menu, setMenu] = useState(false);
  
  const links = [
    {
      name: "Features",
      link: "#service-section",
    },
    {
      name: "How it works",
      link: "#consultation-section",
    },
    {
      name: "Founders",
      link: "#team-section",
    },
    {
      name: "Portfolio",
      link: "#contactus-section",
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 20; // offset for sticky navbar
      animate(window.scrollY, y, {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
    setMenu(false); // Close mobile menu after clicking
  };

  const handleLinkClick = (link: string) => {
    if (link.startsWith('http')) {
      // External link
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Internal section link
      scrollToSection(link);
    }
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/gopal-ag0224/next-launch-mvp-consultation?month=2025-07", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="md:sticky md:top-0 z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block p-2 bg-white border-b border-gray-200 text-black">
        <div className="flex justify-between mx-2 md:mx-8 items-center">
          <div>
            <img src="/images/rebec_img.png" alt="logo" className="w-32 h-auto filter-black-logo" />
          </div>
          <div className="flex items-center gap-4 xl:gap-6 text-[16px] select-none">
            {links.map((link, index) => (
              <p
                key={index}
                className="font-bold uppercase tracking-wide whitespace-nowrap transition-colors duration-200 hover:underline cursor-pointer"
                onClick={() => handleLinkClick(link.link)}
              >
                {link.name}
              </p>
            ))}
          </div>
          <div className="ml-4">
            <MainButton
              text="BOOK A CALL"
              action={handleBookCall}
              classes="px-4 py-1 text-base font-bold"
            />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] py-2 bg-white border-b border-gray-200 text-black ${menu ? "py-1" : ""}`}
      >
        <div className="flex justify-between items-center px-2">
          <div>
            <img src="/images/rebec_img.png" alt="logo" className="w-28 h-auto filter-black-logo" />
          </div>
          <div>
            {menu ? (
              <X
                className="cursor-pointer text-black w-6 h-6"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.png"
                alt="menu"
                className="cursor-pointer w-6 h-6"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="px-2 py-3 select-none animate-in slide-in-from-right">
            <div className="flex flex-col space-y-3">
              {links.map((link, index) => (
                <p
                  key={index}
                  className="hover:underline cursor-pointer font-bold uppercase tracking-wide transition-all duration-300 text-black text-lg"
                  onClick={() => handleLinkClick(link.link)}
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;


