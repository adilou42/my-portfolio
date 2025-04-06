"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const navLinks = [
    {
      title: translations[language].navLinks.about,
      path: "#about",
    },
    {
      title: translations[language].navLinks.projects,
      path: "#projects",
    },
    {
      title: translations[language].navLinks.contact,
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex flex-row items-center gap-5">
          <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
            <Image src="/images/logo-portfolio.webp" width={80} height={80} alt="logo" />
          </Link>
          {language === "fr" ? (
            <Image
              className="h-5 cursor-pointer"
              src="/images/Flag_of_the_United_Kingdom_(1-2).svg.png"
              width={30}
              height={20}
              alt="uk"
              onClick={() => setLanguage("en")}
            />
          ) : (
            <Image
              className="h-5 cursor-pointer"
              src="/images/Flag_of_France.svg.png"
              width={30}
              height={20}
              alt="france"
              onClick={() => setLanguage("fr")}
            />
          )}
        </div>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border broder-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border broder-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
