import React from "react";
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_social_networking_re_i1ex 1.svg'
import HeroSectionWrapper from "../../components/HeroSectionWrapper";

export default function HeroSection() {
    return (
        <HeroSectionWrapper>
            <p className="text-xs md:text-md font-bold md:font-bold text-[#ffffff] uppercase pt-2">Who are we?</p>
            <h1 className="text-5xl text-[#ffffff] font-semibold text-start">
                We are a team of designers and developers who brings you 
                <span className="custom-text font-black">
                    {" "}best results {" "}
                </span>
            </h1>
            <div className="bg-red-400 w-full h-full">
                <Image src={HeroImage} alt="hero_image" className="" />
            </div>
        </HeroSectionWrapper>
    )
}