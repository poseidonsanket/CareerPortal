import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1F2937] h-max rounded-lg text-xl">
      <div className="md:flex md:items-center md:justify-between md:pt-5 text-center w-full">
        <div className="md:pl-10">
          <h1 className="text-2xl">
            <span>Career</span> <span className="text-blue-500">Portal</span>
          </h1>
        </div>
        <div className="md:pr-10">
          <h1>Copyright © 2024. All rights reserved.</h1>
        </div>
      </div>
      <div className="flex justify-center pb-2">
        Made With ❤️ by Sanket Dadali
      </div>
    </div>
  );
};

export default Footer;