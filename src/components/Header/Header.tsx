"use client";
import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
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
    <div className="flex bg-[#B8C8E1] items-center justify-between font-semibold  px-2  h-[12vh] w-full">
      {!isMobile && <h1>Contact: 682 267 8396</h1>}
      {!isMobile && <h1>Clinica San Miguel | River Oaks</h1>}
      {!isMobile && (
        <div className="flex items-center ">
          Language:{" "}
          <div className="flex itmes-center justify-center mx-1 text-white text-xs bg-[#202B40] border-[2px] border-[#2D3C59]  rounded-[20px] px-3 py-2">
            {" "}
            English
          </div>{" "}
          <div className="flex itmes-center justify-center mx-1 bg-white text-xs border-[2px] border-[#F5F6F7] rounded-[20px] px-3 py-2">
            Spanish{" "}
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col">
          <h1 className="font-bold">Clinica San Miguel </h1>
          <h1 className="text-grey-500 text-xs">River Oaks</h1>
        </div>
      )}
      {isMobile && <h1>en</h1>}
    </div>
  );
};

export default Header;
