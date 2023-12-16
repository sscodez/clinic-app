"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { isTablet, useWidth } from "../../utils/Resize";
import Qr from "../../../public/qr.png";
const Section = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-[78vh] relative w-[100%]">
      <div className="text-5xl font-bold  ">Check In</div>
      <br />
      <div
        className={`flex w-[100%] items-center justify-center ${
          isMobile && "flex-col"
        } `}
      >
        <div
          className={`flex text-center items-center justify-center text-3xl font-bold ${
            isMobile ? "w-[90%] mb-8" : "w-[40%]"
          }`}
        >
          Scan the QR code with your phone camera to check in and register in
          our POS system. It's that easy!
        </div>
        <div className="flex  items-center justify-center w-[40%]">
          <Image alt={""} src={Qr} width={240} height={240} />
        </div>
        {isMobile && (
          <h1 className="absolute bottom-5 font-bold">Contact: 682 267 8396</h1>
        )}
      </div>
    </div>
  );
};

export default Section;
