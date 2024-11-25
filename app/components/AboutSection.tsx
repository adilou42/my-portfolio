"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id:"Skills",
        content: (
            <ul className="list-disc pl-2">
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>TypeScript</li>
                <li>C/C++</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"Education",
        content: (
            <ul className="list-disc pl-2">
                <li>42 School - Paris</li>
                <li>OpenClassRooms - Online</li>
                <li>FrontEnd Roadmap - Scrimba</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id:"Experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Web Developer - OpenClassrooms - 18 months</li>
                <li>FullStack Developer - Chabé - 18 months</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-[8rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desktop_Image.webp"
          alt="aboutme"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            👋 Hello! I{"'"}m Adil Yakdi 🚀 Full-Stack Developer (NodeJS,
            NextJS and TypeScript) with a passion for creating robust and
            scalable web applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
