import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/logo-portfolio.webp"
          width={80}
          height={80}
          alt="logo"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
