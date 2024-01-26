import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-secondary md:flex flex-row justify-center py-[10rem]">
      <div className="px-14">
        <Image
          className="w-[55vh] hidden md:block"
          alt="d"
          src="/images/about-img.png"
          width="400"
          height="400"
        />
      </div>
      <div className="px-14 md:w-[65vh] text-white items-center flex">
        <div>
          <p className="font-dancing text-5xl">We Are Food</p>
          <p className="font-raleway my-10 text-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. 
          </p>
          <button className="bg-primary px-8 py-5 rounded-xl text-black font-raleway hover:opacity-45 tracking-[3px]">
            Read More..
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
