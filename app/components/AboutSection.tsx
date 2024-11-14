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
                <li>Node.js</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"Education",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js2</li>
                <li>Express2</li>
                <li>JavaScript2</li>
                <li>React2</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id:"Experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js3</li>
                <li>Express3</li>
                <li>JavaScript3</li>
                <li>React3</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/photo-42.jpeg"
          alt="aboutme"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            👋 Hello! I&apos;m Adil Yakdi 🚀 Full-Stack Developer (NodeJS,
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
