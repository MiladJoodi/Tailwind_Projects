import React from "react";
import { HiOutlineDownload } from "react-icons/hi";


function Boxes({color}) {
  return (
    <div className="p-4 md:w-1/4 sm:1/2 w-full">
      <div className={`px-4 py-6 rounded-lg ${color}`}>
        <HiOutlineDownload className="text-white h-12 w-12 mb-3 inline-block" />
        <h2 className="font-medium text-3xl text-white">2700</h2>
        <p className="leading-relaxed text-white">دانلود</p>
      </div>
    </div>
  );
}

export default Boxes;
