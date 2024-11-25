"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
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
            <span>Hello, I{"'"}m</span>
            <br />
            <TypeAnimation
              sequence={[
                "Adil",
                1000,
                "Web Developer",
                1000,
                // "Mobile Developer",
                // 1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            This portfolio showcases my journey, including:{" "}
          </p>
          <ul className="list-disc ml-5">
            <li className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Projects that reflect creativity and technical skills.
            </li>
            <li className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              A glimpse into my professional experience and contributions.
            </li>
            <li className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Insights into my development process, tools, and methodologies.
            </li>
          </ul>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Feel free to explore and connect with me for collaboration
            opportunities. Let{"'"}s build something amazing together!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/cv_yakdi_adil_.pdf"
              target="blank"
              download="Yakdi_Adil_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
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
