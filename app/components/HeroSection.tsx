"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].hero;
  const [key, setKey] = useState(0); // Add a key state to force re-render

  // Reset the animation component when language changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [language]);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span>{t.greeting}</span>
            <br />
            <TypeAnimation
              key={key} // Add the key prop here to force re-render
              sequence={t.animation}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {t.description}
          </p>
          <ul className="list-disc ml-5">
            <li className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              {t.projectsShowcase}
            </li>
            <li className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              {t.experience}
            </li>
            <li className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              {t.insights}
            </li>
          </ul>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {t.explore}
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              {t.hireMe}
            </Link>
            <Link
              href={language === "fr" ? "/Adil_Yakdi_CV_FR.pdf" : "/Adil_Yakdi_CV_EN.pdf"}
              target="blank"
              download={language === "fr" ? "Adil_Yakdi_CV_FR.pdf" : "Adil_Yakdi_CV_EN.pdf"}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t.downloadCV}
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/photo-42.jpeg"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
