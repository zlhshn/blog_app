import React from "react";
import deer from "../assets/image/logo1.png";

const About = () => {
  return (
    <div className="min-h-[85vh] bg-homeBg flex justify-center items-center text-white">
      <div className="border border-[#00323B] m-20 py-5 px-10 rounded-xl bg-[#00323bb6] w-[70%] flex justify-center items-center ">
        <div className="w-[50%] h-1/2 mt-5">
          <h3 className="font-grace text-center text-2xl mb-10 ">ABOUT US</h3>
          <p className="font-grace text-xl leading-10 tracking-wider">
            Deer blog aims to offer a world filled with enjoyable content,
            steering clear of the ordinary. Whether you want to stay informed
            about the latest news in the world of technology or read interesting
            stories from different cultures, there's something for everyone
            here! We aspire to provide a world , offering delightful content. I
            hope the time you spend here brings you enjoyable moments.
          </p>
        </div>{" "}
        <div className="w-[50%] h-1/2">
          <img src={deer} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default About;
