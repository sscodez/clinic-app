import React from "react";

const CheckInHeader = () => {
  return (
    <div className="flex bg-[#B8C8E1] items-center justify-between font-semibold  px-2  h-[12vh] w-full">
      <div className="flex flex-col items-start ">
        <h1 className="text-2xl font-bold ">Check-In</h1>
        <h1 className="text-xs font-bold text-[#343131]">
          Clinica San Miguel | River Oaks
        </h1>
      </div>

      <div className="flex items-center font-bold ">en</div>
    </div>
  );
};

export default CheckInHeader;
