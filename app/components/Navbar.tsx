"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UseScrollPosition } from "../utils/hooks/UseScrollPosition";
import TransitionLink from "./TransitionLink";
import { LogoArrowRight } from "../(home-sections)/ProjectsSection";
import { navbarLinks } from './NavigationFullScreen';

export default function Navbar({
  onOpenSidebar,
}: {
  isSideBarOpen: boolean;
  onOpenSidebar: () => void;
}) {
  const scrollPosition = UseScrollPosition();

  return (
    <nav
      className={`w-full fixed z-50 opacity-95  ${
        scrollPosition > 20
          ? "opacity-90 bg-[#0b0b0b] backdrop-blur-xl duration-700 3xl:py-4"
          : "duration-300"
      } } duration-300 flex flex-row justify-between items-center lg:bg-inherit px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 py-4 lg:py-8 3xl:py-6`}
    >
      <Link href={`/`}>
        <div className="flex items-center gap-2 lg:gap-4">
          <LogoIcon />
          <span className="text-[#ffffff] text-lg sm:text-xl lg:text-2xl font-bold">
            BitLyte Studios
          </span>
        </div>
      </Link>

      <div className="flex flex-row items-center gap-12">
        {navbarLinks.map(navbarLink => 
          <TransitionLink key={navbarLink.name} style={`font-medium text-lg text-[#ffffff]`} href={navbarLink.link} label={navbarLink.name} />
        )}
        
        {/* <div className="text-3xl text-red-300 z-40">
          <Link
            href={`/contact`}
            className="w-fit hover:bg-[#ffffff] flex gap-2 items-center justify-center text-[#ffffff] hover:text-[#252525] font-normal text-lg z-20 rounded-full py-2 px-6"
          >
            <LogoArrowRight fillColor="#ffffff" />
            Contact Us
          </Link>
        </div>
        <div
          onClick={() => onOpenSidebar()}
          className="flex items-center justify-center z-40"
        >
          <button className="cursor-pointer">
            <MenuButton />
          </button>
        </div> */}
      </div>

      <TransitionLink 
        href={`/contact`} 
        label={`Contact`} 
        style={`relative overflow-hidden w-fit flex items-center gap-2 py-3  px-8 text-[#000000] bg-[#ffffff] rounded-full font-medium text-lg`} 
      />
    </nav>
  );
}

const NavbarLink = ({ navbarLink }: { navbarLink: NavbarLink }) => {
  return (
    <li className="normal-case text-base text-[#ffffff] font-normal">
      <Link href={`${navbarLink.link}`}>{navbarLink.name}</Link>
    </li>
  );
};

export type NavbarLink = {
  name: string;
  link: string;
};

export const LogoIcon = () => {
  return (
    <svg
      width="45"
      height="40"
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z"
        fill="#ffffff"
      />
      <path
        d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const LogoIconWhite = ({
  width = 45,
  height = 45,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z"
        fill="#ffffff"
      />
      <path
        d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const MenuButton = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.3846 26.3076H31.1539" stroke="white" strokeWidth="2" />
      <path d="M13.7692 19.3845H34.5385" stroke="white" strokeWidth="2" />
    </svg>
  );
};
