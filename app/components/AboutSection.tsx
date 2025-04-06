"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const { language, translations } = useLanguage();
  const t = translations[language].about;

  const TAB_DATA = [
    {
      title: t.tabTitles.skills,
      id: "Skills",
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
      title: t.tabTitles.education,
      id: "Education",
      content: (
        <ul className="list-disc pl-2">
          <li>{t.education.school42}</li>
          <li>{t.education.openClassrooms}</li>
          <li>{t.education.scrimba}</li>
        </ul>
      )
    },
    {
      title: t.tabTitles.experience,
      id: "Experience",
      content: (
        <ul className="list-disc pl-2">
          <li>{t.experience.openClassrooms}</li>
          <li>{t.experience.chabe}</li>
        </ul>
      )
    }
  ];

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
          <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-base lg:text-lg">
            {t.description}
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
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
