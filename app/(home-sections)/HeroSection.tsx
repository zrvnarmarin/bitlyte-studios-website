import React from "react";
import "../../public/test.css";
import HeroSectionWrapper from "../components/HeroSectionWrapper";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";
import Link from "next/link";
import { Logo } from "../services/[serviceId]/StepsSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <p className="text-sm sm:text-base md:text-xl text-center font-bold text-[#ffffff] uppercase pb-2 z-30">
        Success begins here
      </p>
      <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-none  text-[#ffffff] font-medium text-center z-30">
        Your caring
        <span className="custom-text font-black"> Design Partner </span>
        that provides experienced Product Designers
      </h1>

      {/* Services */}
      <ul className="hidden xs:flex xs:flex-wrap relative w-full items-center justify-center z-30">
        <li className="w-fit bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-base text-[#95d3ff] font-normal border-[0.5px] border-[#0a2030] z-20 rounded-full  px-4 py-2">
          <span>Digital Marketing</span>
        </li>
        <span className="w-20 h-0.5 border-[0.5px] border-[#0a2030]"></span>
        <li className="w-fit bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-base text-[#95d3ff] font-normal border-[0.5px] border-[#0a2030] z-20 rounded-full  px-4 py-2">
          <span>Web Development</span>
        </li>
        <span className="w-20 h-0.5 border-[0.5px] border-[#0a2030]"></span>
        <li className="w-fit bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-base text-[#95d3ff] font-normal border-[0.5px] border-[#0a2030] z-20 rounded-full  px-4 py-2">
          <span>Digital Design</span>
        </li>
      </ul>

      {/* CTA button */}
      <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
        <Link href={`/contact`}>
          <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#57b7fc] to-[#27A5FF] rounded-full font-medium text-xl xs:text-2xl sm:text-2xl md:text-3xl">
            <LogoForButtonRotated fillColor="#ffffff" width={18} height={20} />
            Start Building
          </button>
        </Link>
      </div>

      {/* Logo Behind */}
      <div className="absolute inset-0 flex items-center justify-center z-20 xs:pt-24 sm:pt-0 md:pt-0">
        <div className="hidden sm:block w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[130px]"></div>
        <Logo width={500} height={500} />
      </div>

      {/* Blur background */}
      {/* <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div> */}
    </HeroSectionWrapper>
  );
}
