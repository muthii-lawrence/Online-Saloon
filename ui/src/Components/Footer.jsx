import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#da1b9e] w-full mt-1">
      <div className="flex items-center justify-center py-4 px-2">
        <div>
          {" "}
          <p className="px-2 py-1 font-bold font-serif text-[20px]">
            Subscribe to our Newspaper
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              className="outline-none border border-rose-400 rounded py-2 px-4 md:w-full w-[70%]"
              placeholder="Enter Email Address"
            />{" "}
            <button className="bg-purple-700 px-4 py-2 rounded text-white hover hover:bg-pink-100 hover:text-black">
              Subscribe
            </button>{" "}
          </div>
        </div>
      </div>
      <hr />
      <div className="py-1 flex text-center justify-center">
        c 2024 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
