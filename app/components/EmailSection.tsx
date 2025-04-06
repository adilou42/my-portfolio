"use client";

import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { language, translations } = useLanguage();
  const t = translations[language].contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log("data", resData);
    if (response.status === 200) {
      console.log("Message Sent");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative scroll-mt-[8rem]" id="contact">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          {t.title}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {t.description}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/adilou42" target="blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/adil-yakdi/" target="blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t.form.emailLabel}
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t.form.emailPlaceholder}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t.form.subjectLabel}
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t.form.subjectPlaceholder}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t.form.messageLabel}
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t.form.messagePlaceholder}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {t.form.submitButton}
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              {t.form.successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
