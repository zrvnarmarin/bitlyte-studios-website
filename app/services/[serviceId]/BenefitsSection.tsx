"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../../public/test.css";
import {
  facilityCardData,
  UniqueSellingPointIconOne,
} from "@/app/(home-sections)/ServicesSection";
import { useState } from "react";
import LogoImage from "../../../public/images/Rectangle 1.svg";

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper>
      <p className="w-full text-start text-3xl text-[#ffffff]">
        Explore how landing page
        <span className="linear-gradient-purple-text">
          {" "}
          boosts conversions{" "}
        </span>{" "}
        and makes your{" "}
        <span className="linear-gradient-purple-text">
          {" "}
          product more impactful{" "}
        </span>
      </p>

      {/* Right side */}
      <div className="">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {businessBenefits.map((card, index) => (
            <BenefitCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export const BenefitCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li
      className={`overflow-hidden relative group flex flex-col gap-4 rounded-lg p-5 cursor-pointer border-[0.5px] border-[#252525]`}
    >
      <div className="w-full flex justify-center">
        <HighBrandAwareness />
      </div>
      {/* Blur background */}
      <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[330px]"></div>

      <div className="flex flex-col items-center justify-center gap-1 z-20">
        <div className="w-full flex items-center gap-2">
          <h3 className="w-full text-[#ffffff] font-semibold text-2xl text-center ">
            {title}
          </h3>
        </div>
        <p className="text-base text-[#eeeeee] font-normal text-center pt-2">
          {description}
        </p>
      </div>
    </li>
  );
};

export const businessBenefits: BusinessBenefitsCardType[] = [
  {
    id: 1,
    icon: UniqueSellingPointIconOne,
    imageSrc: LogoImage,
    title: "Boosted Engagment",
    description:
      "A service landing page is crafted with a clear focus on converting visitors into leads or customers. By highlighting key benefits, using compelling calls to action (CTAs), and providing an easy-to-navigate layout, these pages can greatly enhance conversion rates.",
    gradient: "bg-gradient-to-r from-[#292929] to-[#ED1AFF]",
  },
  {
    id: 2,
    icon: UniqueSellingPointIconOne,
    imageSrc: LogoImage,
    title: "Enhanced User Experience",
    description:
      "A thoughtfully designed landing page offers a smooth and intuitive user experience. This can lead to longer visits and lower bounce rates, which are both positive indicators for search engines and can improve overall engagement.",
    gradient: "bg-gradient-to-r from-[#292929] to-[#FF7A1A]",
  },
  {
    id: 3,
    icon: UniqueSellingPointIconOne,
    imageSrc: LogoImage,
    title: "Targeted Messaging",
    description:
      "Landing pages allow for highly targeted messaging tailored to specific audiences or campaigns. This ensures that the content resonates with the visitor’s needs and interests, improving the relevance and effectiveness of your marketing efforts.",
    gradient: "bg-gradient-to-r from-[#292929] to-[#9FFF1A]",
  },
];

export type BusinessBenefitsCardType = {
  id: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  icon: () => JSX.Element;
  gradient: string;
};

const allServicesArray = [
  {
    id: 1,
    name: "Landing Page",
    benefits: [
      {
        id: 1,
        title: "Increased Conversion Rates",
        description:
          "A service landing page is crafted with a clear focus on converting visitors into leads or customers. By highlighting key benefits, using compelling calls to action (CTAs), and providing an easy-to-navigate layout, these pages can greatly enhance conversion rates",
      },
      {
        id: 2,
        title: "Clear Value Proposition",
        description:
          "A service landing page allows you to clearly communicate your unique value proposition and differentiate your services from competitors. This helps in capturing the interest of potential customers and persuading them to take action",
      },
      {
        id: 3,
        title: "Targeted Messaging",
        description:
          "Landing pages allow for highly targeted messaging tailored to specific audiences or campaigns. This ensures that the content resonates with the visitor’s needs and interests, improving the relevance and effectiveness of your marketing efforts",
      },
    ],
  },
  {
    id: 2,
    name: "Website Development",
    benefits: [
      {
        id: 1,
        title: "Brand Consistency",
        description:
          "Professional development ensures that your website aligns with your brand identity, including colors, fonts, and messaging. Consistent branding across your site helps reinforce your brand`s image and values.",
      },
      {
        id: 2,
        title: "Higher Conversion Rates",
        description:
          "Well-designed websites are optimized for conversions. Features such as clear calls to action, effective landing pages, and streamlined checkout processes can significantly increase the likelihood of turning visitors into customers",
      },
      {
        id: 3,
        title: "Increased Credibility and Trust",
        description:
          "A professionally designed website with high-quality content and design elements boosts your brand`s credibility. A polished, functional site reassures visitors that your business is legitimate and trustworthy",
      },
    ],
  },
  {
    id: 3,
    name: "Frontend Development",
    benefits: [
      {
        id: 1,
        title: "Brand Consistency",
        description:
          "Professional development ensures that your website aligns with your brand identity, including colors, fonts, and messaging. Consistent branding across your site helps reinforce your brand`s image and values.",
      },
      {
        id: 2,
        title: "Higher Conversion Rates",
        description:
          "Well-designed websites are optimized for conversions. Features such as clear calls to action, effective landing pages, and streamlined checkout processes can significantly increase the likelihood of turning visitors into customers",
      },
      {
        id: 3,
        title: "Increased Credibility and Trust",
        description:
          "A professionally designed website with high-quality content and design elements boosts your brand`s credibility. A polished, functional site reassures visitors that your business is legitimate and trustworthy",
      },
    ],
  },
];

// export const LandingPageIcon = () => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       viewBox="0 0 63.97 41.71"
//       width={200}
//       height={200}
//     >
//       <defs>
//         <style>
//           {`
//           .cls-1 {
//             fill-rule: evenodd;
//           }

//           .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10 {
//             stroke-width: 0px;
//           }

//           .cls-1, .cls-9 {
//             fill: #fff;
//           }

//           .cls-2 {
//             fill: url(#linear-gradient);
//           }

//           .cls-3 {
//             fill: url(#linear-gradient-6);
//           }

//           .cls-4 {
//             fill: url(#linear-gradient-11);
//           }

//           .cls-11 {
//             opacity: .8;
//           }

//           .cls-5 {
//             fill: url(#linear-gradient-2);
//           }

//           .cls-6 {
//             fill: url(#linear-gradient-7);
//           }

//           .cls-7 {
//             fill: url(#linear-gradient-9);
//           }

//           .cls-12 {
//             fill: url(#linear-gradient-3);
//             stroke: url(#linear-gradient-4);
//             stroke-width: .15px;
//           }

//           .cls-12, .cls-13 {
//             stroke-miterlimit: 10;
//           }

//           .cls-8 {
//             fill: url(#linear-gradient-8);
//           }

//           .cls-13 {
//             fill: none;
//             stroke: url(#linear-gradient-5);
//             stroke-width: .16px;
//           }

//           .cls-10 {
//             fill: url(#linear-gradient-10);
//           }
//         `}
//         </style>
//         <linearGradient
//           id="linear-gradient"
//           x1="8.14"
//           y1="23.16"
//           x2="55.83"
//           y2="46.41"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0" stopColor="#3cf2de" stopOpacity=".8" />
//           <stop
//             offset=".15"
//             stopColor="rgba(67, 231, 224, .82)"
//             stopOpacity=".82"
//           />
//           <stop
//             offset=".38"
//             stopColor="rgba(86, 203, 231, .88)"
//             stopOpacity=".88"
//           />
//           <stop
//             offset=".67"
//             stopColor="rgba(117, 156, 243, .97)"
//             stopOpacity=".97"
//           />
//           <stop offset=".77" stopColor="#818cf8" />
//         </linearGradient>
//         <linearGradient
//           id="linear-gradient-2"
//           x1="14.01"
//           y1="28.81"
//           x2="49.76"
//           y2="46.24"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-3"
//           x1=".08"
//           y1="3.43"
//           x2="63.89"
//           y2="3.43"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-4"
//           x1="0"
//           y1="3.43"
//           x2="63.96"
//           y2="3.43"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-5"
//           x1="0"
//           y1="24.21"
//           x2="63.97"
//           y2="24.21"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-6"
//           x1="39.43"
//           y1="23.33"
//           x2="57.64"
//           y2="32.2"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-7"
//           x1="39.43"
//           y1="19.71"
//           x2="57.64"
//           y2="28.59"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-8"
//           x1="39.43"
//           y1="16.1"
//           x2="57.64"
//           y2="24.98"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-9"
//           x1="39.43"
//           y1="12.49"
//           x2="57.64"
//           y2="21.36"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-10"
//           x1="39.43"
//           y1="8.87"
//           x2="57.64"
//           y2="17.75"
//           xlinkHref="#linear-gradient"
//         />
//         <linearGradient
//           id="linear-gradient-11"
//           x1="3.96"
//           y1="13.57"
//           x2="32.49"
//           y2="27.47"
//           xlinkHref="#linear-gradient"
//         />
//       </defs>
//       <g>
//         <g className="cls-11">
//           <rect
//             className="cls-2"
//             x="2.55"
//             y="34.17"
//             width="58.87"
//             height="1.24"
//             rx=".62"
//             ry=".62"
//           />
//         </g>
//         <g className="cls-11">
//           <rect
//             className="cls-5"
//             x="9.86"
//             y="36.87"
//             width="44.06"
//             height="1.31"
//             rx=".6"
//             ry=".6"
//           />
//         </g>
//       </g>
//       <path
//         className="cls-12"
//         d="M63.89,2.05v4.74H.08V2.05C.08.97,1.07.08,2.27.08h59.42c1.21,0,2.19.89,2.19,1.97Z"
//       />
//       <path
//         className="cls-13"
//         d="M63.89,6.79v32.58c0,1.25-.99,2.26-2.19,2.26H2.27c-1.21,0-2.19-1.01-2.19-2.26V6.79h63.81Z"
//       />
//       <g>
//         <g className="cls-11">
//           <rect
//             className="cls-3"
//             x="37.44"
//             y="26.82"
//             width="22.19"
//             height="1.88"
//             rx=".76"
//             ry=".76"
//           />
//         </g>
//         <g className="cls-11">
//           <rect
//             className="cls-6"
//             x="37.44"
//             y="23.21"
//             width="22.19"
//             height="1.88"
//             rx=".76"
//             ry=".76"
//           />
//         </g>
//         <g className="cls-11">
//           <rect
//             className="cls-8"
//             x="37.44"
//             y="19.6"
//             width="22.19"
//             height="1.88"
//             rx=".76"
//             ry=".76"
//           />
//         </g>
//         <g className="cls-11">
//           <rect
//             className="cls-7"
//             x="37.44"
//             y="15.98"
//             width="22.19"
//             height="1.88"
//             rx=".76"
//             ry=".76"
//           />
//         </g>
//         <g className="cls-11">
//           <rect
//             className="cls-10"
//             x="37.44"
//             y="12.37"
//             width="22.19"
//             height="1.88"
//             rx=".76"
//             ry=".76"
//           />
//         </g>
//       </g>
//       <g className="cls-11">
//         <rect
//           className="cls-4"
//           x="4.35"
//           y="10.22"
//           width="27.75"
//           height="20.61"
//           rx="3.32"
//           ry="3.32"
//         />
//       </g>
//       <g>
//         <path
//           className="cls-1"
//           d="M13.99,14.25L4.34,30.86h19.92S14.6,14.25,14.6,14.25c-.13-.23-.47-.23-.6,0Z"
//         />
//         <path
//           className="cls-1"
//           d="M24.44,20.23l-3.49,4.94,3.31,5.68h7.86s-7.11-10.62-7.11-10.62c-.13-.2-.42-.2-.56,0Z"
//         />
//         <ellipse className="cls-9" cx="22.29" cy="14.59" rx="1.71" ry="1.78" />
//       </g>
//     </svg>
//   );
// };

// Benefits

export const BoostedEngagement = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="200"
      height="200"
      version="1.1"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 8333 8333"
    >
      <defs>
        <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ECD1">
            <animate
              attributeName="stop-color"
              values="#00ECD1; #7486F7; #a5b4fc; #00ECD1"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#7486F7">
            <animate
              attributeName="stop-color"
              values="#7486F7; #a5b4fc; #00ECD1; #7486F7"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#a5b4fc">
            <animate
              attributeName="stop-color"
              values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <style type="text/css">
          {`
            .fil0 {fill:url(#animatedGradient)}
            .fil1 {fill:#EEB244}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M7364 5973l-6394 0c-67,0 -121,-54 -121,-120l0 -2834c0,-67 54,-121 121,-121 66,0 120,54 120,121l0 2713 6153 0 0 -2717c0,-67 54,-121 121,-121 66,0 120,54 120,121l0 2838c0,66 -54,120 -120,120zm-1666 -3983l-3059 0c-67,0 -121,-54 -121,-120 0,-67 54,-121 121,-121l3059 0c67,0 121,54 121,121 0,66 -54,120 -121,120z"
        ></path>
        <path
          className="fil0"
          d="M5032 6751l-1731 0c-67,0 -121,-55 -121,-121l0 -777c0,-67 54,-121 121,-121l1731 0c67,0 121,54 121,121l0 777c0,66 -54,121 -121,121zm-1610 -242l1489 0 0 -536 -1489 0 0 536z"
        ></path>
        <path
          className="fil0"
          d="M5580 7342l-2826 0c-67,0 -121,-54 -121,-120l0 -592c0,-67 54,-121 121,-121l2826 0c66,0 120,54 120,121l0 592c0,66 -54,120 -120,120zm-2706 -241l2585 0 0 -350 -2585 0 0 350z"
        ></path>
        <path
          className="fil0"
          d="M5259 3136l-2185 0c-67,0 -121,-54 -121,-121 0,-67 54,-121 121,-121l2185 0c67,0 121,54 121,121 0,67 -54,121 -121,121z"
        ></path>
        <path
          className="fil0"
          d="M6200 3658l-4067 0c-67,0 -121,-54 -121,-121 0,-66 54,-120 121,-120l4067 0c67,0 121,54 121,120 0,67 -54,121 -121,121z"
        ></path>
        <path
          className="fil0"
          d="M7601 3136l-1903 0c-67,0 -121,-54 -121,-121l0 -1903c0,-67 54,-121 121,-121l1903 0c67,0 121,54 121,121l0 1903c0,67 -54,121 -121,121zm-1782 -242l1661 0 0 -1661 -1661 0 0 1661z"
        ></path>
        <path
          className="fil0"
          d="M6713 3136l-1015 0c-43,0 -83,-23 -105,-61 -21,-37 -21,-84 1,-121l507 -872c22,-37 62,-60 105,-60 43,0 82,23 104,60l368 632c34,58 14,132 -44,165 -13,8 -26,13 -40,15l119 0c67,0 121,54 121,121 0,67 -54,121 -121,121zm-805 -242l646 0c-34,-6 -66,-26 -85,-58l-263 -453 -298 511z"
        ></path>
        <path
          className="fil0"
          d="M7601 3136l-1167 0c-43,0 -83,-23 -105,-61 -21,-37 -21,-84 1,-121l647 -1112c21,-37 61,-60 104,-60l0 0c43,0 83,23 105,60l520 894c33,57 14,131 -44,165 -3,2 -6,3 -9,5 41,19 69,61 69,109 0,67 -54,121 -121,121zm-957 -242l886 0c-13,-9 -24,-22 -33,-37l-416 -714 -437 751z"
        ></path>
        <path
          className="fil0"
          d="M1249 2695c-21,0 -42,-6 -60,-16 -38,-22 -61,-62 -61,-105l0 -1017c0,-43 23,-83 61,-105 37,-21 83,-21 120,0l874 509c37,22 60,61 60,104 0,43 -23,83 -60,105l-873 508c-19,11 -40,17 -61,17zm120 -928l0 597 514 -299 -514 -298z"
        ></path>
        <path
          className="fil0"
          d="M4956 5973l-1578 0c-67,0 -121,-54 -121,-120l0 -363c0,-266 217,-483 483,-483l853 0c267,0 484,217 484,483l0 363c0,66 -54,120 -121,120zm-1458 -241l1337 0 0 -242c0,-133 -108,-242 -242,-242l-853 0c-133,0 -242,109 -242,242l0 242 0 0z"
        ></path>
        <path
          className="fil0"
          d="M4167 4888c-299,0 -542,-243 -542,-542 0,-298 243,-541 542,-541 298,0 541,243 541,541 0,299 -243,542 -541,542zm0 -842c-166,0 -301,135 -301,300 0,166 135,301 301,301 165,0 300,-135 300,-301 0,-165 -135,-300 -300,-300z"
        ></path>
        <path
          className="fil0"
          d="M2958 5973l-1578 0c-67,0 -121,-54 -121,-120l0 -363c0,-266 217,-483 483,-483l853 0c267,0 484,217 484,483l0 363c0,66 -54,120 -121,120zm-1458 -241l1337 0 0 -242c0,-133 -108,-242 -242,-242l-853 0c-133,0 -242,109 -242,242l0 242z"
        ></path>
        <path
          className="fil0"
          d="M2169 4888c-299,0 -542,-243 -542,-542 0,-298 243,-541 542,-541 298,0 541,243 541,541 0,299 -243,542 -541,542zm0 -842c-166,0 -301,135 -301,300 0,166 135,301 301,301 165,0 300,-135 300,-301 0,-165 -135,-300 -300,-300z"
        ></path>
        <path
          className="fil0"
          d="M6954 5973l-1578 0c-67,0 -121,-54 -121,-120l0 -363c0,-266 217,-483 483,-483l853 0c267,0 484,217 484,483l0 363c0,66 -54,120 -121,120zm-1458 -241l1337 0 0 -242c0,-133 -108,-242 -242,-242l-853 0c-133,0 -242,109 -242,242l0 242 0 0z"
        ></path>
        <path
          className="fil0"
          d="M6165 4888c-299,0 -542,-243 -542,-542 0,-298 243,-541 542,-541 298,0 541,243 541,541 0,299 -243,542 -541,542zm0 -842c-166,0 -300,135 -300,300 0,166 134,301 300,301 165,0 300,-135 300,-301 0,-165 -135,-300 -300,-300z"
        ></path>
      </g>
    </svg>
  );
};

export const TargetedAudience = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    width="200"
    height="200"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate
            attributeName="stop-color"
            values="#00ECD1; #7486F7; #a5b4fc; #00ECD1"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate
            attributeName="stop-color"
            values="#7486F7; #a5b4fc; #00ECD1; #7486F7"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate
            attributeName="stop-color"
            values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
          .cls-2 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <title>n</title>
    <path
      className="cls-1"
      d="M81.013,56.63793A17.02141,17.02141,0,0,0,67.0733,39.90124c-.288-.05279-.57781-.09716-.86925-.13479l-.00014-2.2316h2.2159l-.76675-12.84941a3.653,3.653,0,1,0-7.306.00551l-.50176,12.843,1.97438-.00092v2.235c-.19671.02542-.39321.051-.58766.08282A17.01345,17.01345,0,1,0,81.013,56.63793ZM64.00043,68.42214A11.78381,11.78381,0,1,1,75.78385,56.63868,11.74725,11.74725,0,0,1,64.00043,68.42214Z"
    />
    <path
      className="cls-2"
      d="M125.97463,79.92524a5.039,5.039,0,0,0-2.70723-3.65444c-4.71941-2.3485-15.06627-5.82362-15.06627-5.82362V67.03372l.28586-.21857a9.88967,9.88967,0,0,0,3.75536-6.28323l.056-.36434h.28528a3.80866,3.80866,0,0,0,3.53173-2.37652,4.17067,4.17067,0,0,0,.52126-2.01218,3.80152,3.80152,0,0,0-.27464-1.41808,1.96844,1.96844,0,0,0-.76285-1.23311l-.95843-.5773.24156-1.03695c1.7202-7.52192-4.10287-14.29278-11.92242-14.47772-.19-.00561-.38059-.00561-.56553,0-.185-.00561-.37556-.00561-.56611,0-7.819.18494-13.64261,6.9558-11.91626,14.47772l.2354,1.03695-.95286.5773a1.97294,1.97294,0,0,0-.76788,1.23311,3.79069,3.79069,0,0,0-.27464,1.41808,4.17067,4.17067,0,0,0,.52126,2.01218A3.82139,3.82139,0,0,0,92.21,60.16758h.28025l.05549.36434a9.8903,9.8903,0,0,0,3.75595,6.28323l.28528.21857v3.41347S86.24012,73.9223,81.52686,76.2708a5.0331,5.0331,0,0,0-1.65345,1.32277c4.25979,1.5526,9.43882,3.548,12.71719,5.179a9.92933,9.92933,0,0,1,5.33092,7.18c.14013.824.26906,1.71513.38114,2.64h28.6248A110.01651,110.01651,0,0,0,125.97463,79.92524Z"
    />
    <path
      className="cls-2"
      d="M35.40885,82.77236c3.27892-1.631,8.45794-3.62643,12.71719-5.179a5.03752,5.03752,0,0,0-1.6529-1.32277c-4.71383-2.3485-15.06066-5.82362-15.06066-5.82362V67.03351l.28586-.2186a9.88959,9.88959,0,0,0,3.75536-6.28323l.056-.36431H35.79a3.82139,3.82139,0,0,0,3.53676-2.37652,4.1708,4.1708,0,0,0,.52126-2.01221,3.80134,3.80134,0,0,0-.27464-1.41805,1.97261,1.97261,0,0,0-.76788-1.23311l-.95341-.57733.23595-1.03691c1.72581-7.52195-4.09726-14.29278-11.91623-14.47775-.19059-.00561-.38117-.00561-.56611,0-.185-.00561-.37556-.00561-.56611,0-7.819.185-13.64261,6.9558-11.92242,14.47775l.24156,1.03691-.95844.57733a1.96524,1.96524,0,0,0-.76231,1.23311,3.802,3.802,0,0,0-.27464,1.41805,4.1708,4.1708,0,0,0,.52126,2.01221,3.80734,3.80734,0,0,0,3.53118,2.37652h.28583l.05549.36431A9.89021,9.89021,0,0,0,19.513,66.81491l.28528.2186v3.41343S9.45146,73.92206,4.73263,76.27056A5.04108,5.04108,0,0,0,2.02482,79.925a109.9651,109.9651,0,0,0-.95228,12.66731h28.6248c.11211-.92481.241-1.816.38114-2.63994A9.9287,9.9287,0,0,1,35.40885,82.77236Z"
    />
    <path
      className="cls-1"
      d="M91.09,85.782c-6.1207-3.0508-19.55367-7.56-19.55367-7.56H70.40025l-3.67576,4.9038,3.44593,23.842H95.84421a142.11749,142.11749,0,0,0-1.23479-16.44508A6.53929,6.53929,0,0,0,91.09,85.782Z"
    />
    <path
      className="cls-1"
      d="M56.46322,78.22212s-13.433,4.50867-19.55364,7.56a6.53924,6.53924,0,0,0-3.51942,4.74072A142.11789,142.11789,0,0,0,32.15538,106.968H57.82972L61.2751,83.126l-3.67576-4.90384Z"
    />
  </svg>
);

export const RecognizedVisualIdentity = () => {
  return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={200}
        height={200}
      >
        <defs>
          <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ECD1">
              <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#7486F7">
              <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#a5b4fc">
              <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <style>
            {`
              .cls-1, .cls-2 { fill: url(#animatedGradient); }
            `}
          </style>
        </defs>
        <path className="cls-1" d="M13.79,31.86l-.49.42a1,1,0,0,0,.3,1.65l.08,0a1,1,0,0,0,.92-.15A16.46,16.46,0,0,0,16,32.55h0A23,23,0,0,0,23,16a3,3,0,0,0-6,0,17,17,0,0,1-7,13.73c-.19.14-.38.28-.58.41a1,1,0,0,0,0,1.63l.06,0a1,1,0,0,0,1.08,0q.65-.44,1.26-.93A19,19,0,0,0,19,16a1,1,0,0,1,2,0A20.94,20.94,0,0,1,13.79,31.86Z"></path>
        <path className="cls-1" d="M18.64,35h.07a1,1,0,0,0,.78-.3c.52-.54,1-1.1,1.48-1.69a26.83,26.83,0,0,0,6-17,7,7,0,0,0-14,0A13,13,0,0,1,7,27l-.71.44a1,1,0,0,0-.25,1.51l0,.05a1,1,0,0,0,1.18.18c.39-.22.77-.45,1.15-.71A15,15,0,0,0,15,16a5,5,0,0,1,10,0A24.89,24.89,0,0,1,18.39,33c-.12.14-.25.27-.37.4A1,1,0,0,0,18.64,35Z"></path>
        <path className="cls-1" d="M24.54,34.49l.1,0a1,1,0,0,0,.55-.39,28.79,28.79,0,0,0,1.6-2.46A30.77,30.77,0,0,0,31,16,11,11,0,0,0,9,16a9,9,0,0,1-4.2,7.6,9.34,9.34,0,0,1-.87.5,1,1,0,0,0-.42,1.34l0,.06a1,1,0,0,0,1.28.39c.34-.17.66-.35,1-.55A11,11,0,0,0,11,16a9,9,0,0,1,18,0,28.79,28.79,0,0,1-5.22,16.57c-.08.13-.17.25-.26.38A1,1,0,0,0,24.54,34.49Z"></path>
        <path className="cls-1" d="M1.85,21.66a1,1,0,0,0,1.37.6A6.28,6.28,0,0,0,4,21.78,7,7,0,0,0,7,16a13,13,0,0,1,26,0,33.07,33.07,0,0,1-.35,4.8,1.06,1.06,0,0,0,1.76.94l0,0a.41.41,0,0,0,.13-.25A34,34,0,0,0,35,16h0A15,15,0,0,0,5,16,5,5,0,0,1,3.41,19.7a4.71,4.71,0,0,1-1.09.78,1,1,0,0,0-.49,1.12Z"></path>
        <path className="cls-2" d="M39.82,23.44l-.88-1.8a14.72,14.72,0,0,0-1.81,1.05l1.11,1.66A13.76,13.76,0,0,1,39.82,23.44Z"></path>
        <path className="cls-2" d="M58.55,29.79l1.79-.89a15.37,15.37,0,0,0-1.05-1.8l-1.66,1.11A14.76,14.76,0,0,1,58.55,29.79Z"></path>
        <path className="cls-2" d="M54.88,22.69a16.28,16.28,0,0,0-1.81-1l-.88,1.79a14.76,14.76,0,0,1,1.58.92Z"></path>
        <path className="cls-2" d="M56.52,26.76,58,25.44A15.79,15.79,0,0,0,56.54,24l-1.32,1.5A14.39,14.39,0,0,1,56.52,26.76Z"></path>
        <path className="cls-2" d="M43.27,22.27l-.38-2a16.65,16.65,0,0,0-2,.54l.64,1.9A12,12,0,0,1,43.27,22.27Z"></path>
        <path className="cls-2" d="M46,22l1,0,.13-2q-.52,0-1,0c-.34,0-.7,0-1,0l.13,2Q45.53,22,46,22Z"></path>
        <path className="cls-2" d="M51.14,20.84a17.69,17.69,0,0,0-2-.54l-.39,2a12.15,12.15,0,0,1,1.77.47Z"></path>
        <path className="cls-2" d="M61.7,39.09l-2-.39a13.57,13.57,0,0,1-.47,1.77l1.9.64A15.8,15.8,0,0,0,61.7,39.09Z"></path>
        <path className="cls-2" d="M59.73,33.24l2-.39a17.69,17.69,0,0,0-.54-2l-1.9.65A13.47,13.47,0,0,1,59.73,33.24Z"></path>
        <path className="cls-2" d="M57.66,43.74l1.66,1.11a16.37,16.37,0,0,0,1-1.81l-1.8-.88A12.43,12.43,0,0,1,57.66,43.74Z"></path>
        <path className="cls-2" d="M60,36c0,.3,0,.59,0,.89L62,37c0-.33,0-.67,0-1s0-.72,0-1.08l-2,.14C60,35.37,60,35.68,60,36Z"></path>
        <path className="cls-1" d="M46,40a4,4,0,1,0-4-4A4,4,0,0,0,46,40Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,46,34Z"></path>
        <path className="cls-1" d="M30,36v.64L25.7,41.8a3,3,0,0,0-.7,1.92V44a3,3,0,0,0,3,3h2v5a3,3,0,0,0,3,3h5v7a1,1,0,0,0,1,1H59a1,1,0,0,0,1-1.15L57.66,46.93l-.07-.48a1,1,0,0,0-.27-.55h0l-5-5A7.9,7.9,0,0,0,54,36a8,8,0,0,0-8-8,7.92,7.92,0,0,0-4.9,1.69L35.42,24A15.89,15.89,0,0,0,30,36Zm16-6a6,6,0,1,1-6,6A6,6,0,0,1,46,30ZM35.42,26.84l4.27,4.26A7.92,7.92,0,0,0,38,36a8,8,0,0,0,8,8,7.9,7.9,0,0,0,4.89-1.69l4.77,4.77L57.83,61H40V54a1,1,0,0,0-1-1H33a1,1,0,0,1-1-1V51h5V49H32V47h2V45H28a1,1,0,0,1-1-1v-.28a1,1,0,0,1,.23-.64l4.54-5.44A1,1,0,0,0,32,37V36A13.86,13.86,0,0,1,35.42,26.84Z"></path>
      </svg>
  );
}

export const ClientSatisfaction = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="200"
    height="200"
    version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }}
    viewBox="0 0 1707 1707"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style type="text/css">
        {`
          .fil0 { fill: url(#animatedGradient) }
        `}
      </style>
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
      <path className="fil0" d="M499 931c-12,0 -86,-36 -102,-44l-92 42c-18,8 -39,-7 -37,-27l11 -100 -67 -74c-14,-15 -6,-40 14,-44l98 -20 50 -87c10,-18 36,-18 46,0l49 87 99 20c20,4 28,29 14,44l-68 74 11 100c2,15 -10,29 -26,29zm357 -20c-28,0 -55,-5 -81,-17 -11,30 -15,49 -42,67 78,23 163,23 240,0 -27,-18 -30,-36 -42,-65 -24,10 -50,15 -75,15zm-128 -45c-63,-49 -115,-146 -115,-272l0 -72c0,-54 44,-98 99,-98l420 0c54,0 23,114 -40,162 -5,140 -52,232 -114,281 20,52 9,51 101,74 111,26 278,66 249,318 -2,14 -13,24 -27,24l-896 0c-13,0 -25,-10 -26,-24 -29,-251 137,-291 248,-318 93,-22 81,-21 101,-75zm-60 -245c23,299 337,335 369,-7 -15,4 -31,7 -48,7l-321 0zm382 -71c1,-1 3,-2 4,-2 24,-17 42,-42 49,-71l-391 0c-25,0 -45,21 -45,45l0 46 322 0c22,0 43,-7 61,-18zm80 679l0 -106c0,-35 53,-35 53,0l0 106 94 0c12,-183 -106,-211 -210,-236 -6,-2 -12,-3 -17,-5 -44,21 -112,44 -197,44 -84,0 -152,-23 -195,-43 -6,1 -13,3 -19,4 -104,25 -221,54 -209,236l93 0 0 -106c0,-35 54,-35 54,0l0 106 553 0zm-277 375c-413,0 -750,-337 -750,-751 0,-414 336,-750 750,-750 414,0 751,336 751,750 0,414 -337,751 -751,751zm0 -1448c-384,0 -697,313 -697,697 0,385 313,698 697,698 385,0 698,-313 698,-698 0,-384 -313,-697 -698,-697zm0 1551c-35,0 -35,-54 0,-54 441,0 800,-359 800,-800 0,-35 54,-35 54,0 0,471 -383,854 -854,854zm-826 -827c-15,0 -27,-12 -27,-27 0,-470 383,-853 853,-853 35,0 35,53 0,53 -441,0 -800,359 -800,800 0,15 -12,27 -26,27zm1181 51c-16,0 -29,-14 -27,-29l11 -100 -67 -74c-14,-15 -6,-40 14,-44l98 -20 50 -87c10,-18 36,-18 46,0l50 87 98 20c20,4 28,29 14,44l-67 74 11 100c2,20 -19,35 -38,27l-91 -42c-16,8 -91,44 -102,44zm-12 -204c62,68 54,42 43,134 85,-39 57,-39 142,0 -11,-92 -19,-66 43,-134 -91,-19 -68,-3 -114,-83 -46,80 -23,64 -114,83zm-799 104c11,0 56,23 70,30 -10,-92 -19,-66 44,-134 -91,-19 -68,-3 -114,-83 -46,80 -23,64 -114,83 62,68 54,42 43,134 14,-7 60,-30 71,-30z"></path>
    </g>
  </svg>
);

export const IncomeGrowth = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200"
    height="200"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <path
      className="cls-1"
      d="M41.5,39.426V8h-7V45.362A45.543,45.543,0,0,0,41.5,39.426Z"
    />
    <path
      className="cls-1"
      d="M27.5,49.479V24h-7V52.5A70.31,70.31,0,0,0,27.5,49.479Z"
    />
    <path
      className="cls-1"
      d="M13.5,54.729V40h-7V56.31C8.424,55.96,10.817,55.454,13.5,54.729Z"
    />
    <path
      className="cls-1"
      d="M17.6,11.884l-.465-.257a.742.742,0,0,1-.4-.748,6.164,6.164,0,0,0,0-1.758.742.742,0,0,1,.4-.748l.465-.257a.75.75,0,0,0,.294-1.049L16.6,4.933a.825.825,0,0,0-1.1-.281l-.471.26a.852.852,0,0,1-.915-.075A6.884,6.884,0,0,0,12.616,4a.788.788,0,0,1-.524-.719V2.768a.786.786,0,0,0-.8-.768H8.711a.786.786,0,0,0-.8.768v.515A.788.788,0,0,1,7.384,4a6.884,6.884,0,0,0-1.5.835.852.852,0,0,1-.915.075l-.471-.26a.825.825,0,0,0-1.1.281L2.108,7.067A.75.75,0,0,0,2.4,8.116l.465.257a.742.742,0,0,1,.4.748,6.164,6.164,0,0,0,0,1.758.742.742,0,0,1-.4.748l-.465.257a.75.75,0,0,0-.294,1.049L3.4,15.067a.825.825,0,0,0,1.1.281l.471-.26a.852.852,0,0,1,.915.075,6.884,6.884,0,0,0,1.5.835.788.788,0,0,1,.524.719v.515a.786.786,0,0,0,.8.768h2.578a.786.786,0,0,0,.8-.768v-.515A.788.788,0,0,1,12.616,16a6.884,6.884,0,0,0,1.5-.835.852.852,0,0,1,.915-.075l.471.26a.825.825,0,0,0,1.1-.281l1.288-2.134A.75.75,0,0,0,17.6,11.884ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Z"
    />
    <path
      className="cls-1"
      d="M61.687,39.59l-1.37-14.357L47.591,32.02l3.128,1.68C37.057,58.148,2,61,2,61s39.469,6.9,56.252-23.255Z"
    />
    <path
      className="cls-1"
      d="M1.059,12.1a1.723,1.723,0,0,0,.193,1.349L2.54,15.583a1.835,1.835,0,0,0,2.438.641l.376-.208a7.825,7.825,0,0,0,1.553.867v.349A1.789,1.789,0,0,0,8.711,19h2.578a1.789,1.789,0,0,0,1.8-1.768v-.349a7.847,7.847,0,0,0,1.553-.867l.376.208a1.834,1.834,0,0,0,2.437-.64l1.29-2.134a1.727,1.727,0,0,0,.192-1.349,1.788,1.788,0,0,0-.86-1.093l-.329-.181a7.148,7.148,0,0,0,0-1.654l.329-.181a1.788,1.788,0,0,0,.86-1.093,1.723,1.723,0,0,0-.193-1.349L17.46,4.417a1.833,1.833,0,0,0-2.438-.641l-.376.208a7.825,7.825,0,0,0-1.553-.867V2.768A1.789,1.789,0,0,0,11.289,1H8.711a1.789,1.789,0,0,0-1.8,1.768v.349a7.847,7.847,0,0,0-1.553.867l-.376-.208a1.834,1.834,0,0,0-2.437.64L1.251,6.55A1.727,1.727,0,0,0,1.059,7.9a1.788,1.788,0,0,0,.86,1.093l.329.181a7.148,7.148,0,0,0,0,1.654l-.329.181A1.788,1.788,0,0,0,1.059,12.1ZM4.2,10a5.019,5.019,0,0,1,.054-.738,1.732,1.732,0,0,0-.9-1.764L3.1,7.359,4.157,5.608l.324.179a1.862,1.862,0,0,0,1.992-.144,5.809,5.809,0,0,1,1.283-.712A1.787,1.787,0,0,0,8.907,3.283V3h2.186v.283a1.787,1.787,0,0,0,1.151,1.648,5.8,5.8,0,0,1,1.284.713,1.86,1.86,0,0,0,1.991.143l.324-.179L16.9,7.359l-.25.138a1.733,1.733,0,0,0-.9,1.768A5.087,5.087,0,0,1,15.8,10a5.019,5.019,0,0,1-.054.738,1.732,1.732,0,0,0,.9,1.764l.251.139-1.057,1.751-.324-.179a1.86,1.86,0,0,0-1.992.144,5.809,5.809,0,0,1-1.283.712,1.787,1.787,0,0,0-1.151,1.648V17H8.907v-.283a1.787,1.787,0,0,0-1.151-1.648,5.8,5.8,0,0,1-1.284-.713,1.864,1.864,0,0,0-1.991-.143l-.324.179L3.1,12.641l.25-.138a1.733,1.733,0,0,0,.9-1.768A5.087,5.087,0,0,1,4.2,10Z"
    />
    <path
      className="cls-1"
      d="M10,14a4,4,0,1,0-4-4A4,4,0,0,0,10,14Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,10,8Z"
    />
    <path
      className="cls-1"
      d="M1.828,61.985a63.741,63.741,0,0,0,9.642.651c12.829,0,35.267-3.174,47.168-23.548l2.575,1.383a1,1,0,0,0,1.469-.975l-1.37-14.357a1,1,0,0,0-1.465-.788L47.12,31.137a1,1,0,0,0,0,1.763l2.221,1.193C35.753,56.98,2.26,59.976,1.919,60a1,1,0,0,0-.091,1.982Zm49.765-27.8a1,1,0,0,0-.4-1.369l-1.482-.8,9.754-5.2,1.05,11-1.788-.96a1,1,0,0,0-1.348.394C45.742,58.168,22.637,60.83,10.321,60.634,21.714,58.148,41.955,51.433,51.593,34.188Z"
    />
    <path
      className="cls-1"
      d="M35.5,9h5V40.442c.687-.67,1.356-1.363,2-2.087V8a1,1,0,0,0-1-1h-7a1,1,0,0,0-1,1V46.03q1.011-.666,2-1.384Z"
    />
    <path
      className="cls-1"
      d="M21.5,25h5V49.964q1-.478,2-1V24a1,1,0,0,0-1-1h-7a1,1,0,0,0-1,1V52.858q.992-.351,2-.739Z"
    />
    <path
      className="cls-1"
      d="M14.5,54.449V40a1,1,0,0,0-1-1h-7a1,1,0,0,0-1,1V56.485c.606-.1,1.279-.224,2-.364V41h5V54.99Q13.473,54.74,14.5,54.449Z"
    />
  </svg>
);

export const ResponsiveAndAdaptive = () => (
  <svg viewBox="0 0 64 64" width="200" height="200">
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <g id="Responsive-2" data-name="Responsive">
      <path
        className="cls-1"
        d="M57,18H46V7a5.006,5.006,0,0,0-5-5H7A5.006,5.006,0,0,0,2,7V57a5.006,5.006,0,0,0,5,5H57a5.006,5.006,0,0,0,5-5V23A5.006,5.006,0,0,0,57,18ZM40,18H39a5.006,5.006,0,0,0-5,5v7H8V14H40Zm-4,8H60V54H36Zm24-3v1H36V23a3,3,0,0,1,3-3H57A3,3,0,0,1,60,23ZM42,18V13a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H34V50H4V10L44,9.93V18ZM7,4H41a3,3,0,0,1,3,3v.93L4,8V7A3,3,0,0,1,7,4ZM4,57V52H34v5a4.948,4.948,0,0,0,1.026,3H7A3,3,0,0,1,4,57Zm53,3H39a3,3,0,0,1-3-3V56H60v1A3,3,0,0,1,57,60Z"
      />
      <rect x="25" y="5" width="4" height="2" className="cls-1" />
      <rect x="21" y="5" width="2" height="2" className="cls-1" />
      <rect x="49" y="21" width="4" height="2" className="cls-1" />
      <rect x="45" y="21" width="2" height="2" className="cls-1" />
      <rect x="46" y="57" width="4" height="2" className="cls-1" />
      <path
        className="cls-1"
        d="M24,53a3,3,0,1,0,3,3A3,3,0,0,0,24,53Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,24,57Z"
      />
      <path
        className="cls-1"
        d="M25,28a6,6,0,1,0-6-6A6.006,6.006,0,0,0,25,28Zm0-10a4,4,0,1,1-4,4A4,4,0,0,1,25,18Z"
      />
      <path
        className="cls-1"
        d="M57,28H39a1,1,0,0,0-1,1V41a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V29A1,1,0,0,0,57,28ZM56,40H40V30H56Z"
      />
      <path
        className="cls-1"
        d="M48,39a4,4,0,1,0-4-4A4,4,0,0,0,48,39Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,48,33Z"
      />
      <path
        className="cls-1"
        d="M6,47a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V35a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1ZM8,36h8V46H8Z"
      />
      <rect x="20" y="36" width="12" height="2" className="cls-1" />
      <rect x="20" y="40" width="12" height="2" className="cls-1" />
      <rect x="20" y="44" width="12" height="2" className="cls-1" />
      <path
        className="cls-1"
        d="M45,44H39a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V45A1,1,0,0,0,45,44Zm-1,6H40V46h4Z"
      />
      <rect x="48" y="45" width="10" height="2" className="cls-1" />
      <rect x="48" y="49" width="10" height="2" className="cls-1" />
    </g>
  </svg>
);

export const StrongDigitalPresence = () => (
  <svg width="200" height="200" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <path className="cls-1" d="M473 16H391C378.317 16 368 26.318 368 39V105C368 117.682 378.317 128 391 128H473C485.683 128 496 117.682 496 105V39C496 26.318 485.683 16 473 16ZM416.227 112C416.227 103.178 423.405 96 432.227 96C441.049 96 448.227 103.178 448.227 112H416.227ZM424.227 64C424.227 59.589 427.816 56 432.227 56C436.638 56 440.227 59.589 440.227 64C440.227 68.411 436.638 72 432.227 72C427.816 72 424.227 68.411 424.227 64ZM480 105C480 108.86 476.859 112 473 112H464.227C464.227 99.453 456.964 88.575 446.426 83.334C452.365 78.961 456.227 71.924 456.227 64C456.227 50.766 445.46 40 432.227 40C418.994 40 408.227 50.766 408.227 64C408.227 71.924 412.089 78.961 418.028 83.334C407.489 88.575 400.227 99.453 400.227 112H391C387.141 112 384 108.86 384 105V39C384 35.14 387.141 32 391 32H473C476.859 32 480 35.14 480 39V105Z"></path>
    <path className="cls-1" d="M313 208H183.547L182.716 206.996L283.781 179.934C286.115 179.309 288.041 177.663 289.022 175.455C290.003 173.247 289.934 170.715 288.834 168.563L237.84 68.8451C236.739 66.6941 234.727 65.1561 232.362 64.6581C229.996 64.1611 227.534 64.7601 225.663 66.2861L137.531 138.113L109.793 152.298C90.156 162.34 82.351 186.487 92.393 206.124C92.719 206.761 93.062 207.385 93.418 207.999H39C26.317 207.999 16 218.317 16 230.999V408.999C16 421.681 26.317 431.999 39 431.999H147.106L140.254 455.999H136C118.355 455.999 104 470.354 104 487.999C104 492.417 107.582 495.999 112 495.999H240C244.418 495.999 248 492.417 248 487.999C248 470.354 233.645 455.999 216 455.999H211.745L204.893 431.999H313C325.683 431.999 336 421.681 336 408.999V231C336 218.318 325.683 208 313 208ZM192.177 243.521C193.574 245.209 193.897 246.979 193.922 248.181C193.975 250.506 192.913 253.563 189.781 255.165C186.57 256.804 182.727 256.01 180.431 253.238L152.982 220.067L166.882 212.959L192.177 243.521ZM232 280V352H64V280H232ZM204.041 264C206.104 261.668 207.686 258.957 208.683 256H232V264H204.041ZM64 264V256H161.95L168.109 263.442C168.267 263.633 168.434 263.814 168.597 264H64ZM228.101 84.9421L270.084 167.039L175.246 192.433L151.996 146.968L228.101 84.9421ZM117.079 166.544L138.447 155.617L160.302 198.354L137.37 210.005C137.364 210.007 137.359 210.01 137.354 210.012C132.044 212.267 126.169 212.542 120.624 210.749C114.524 208.777 109.558 204.548 106.64 198.84C100.614 187.057 105.297 172.569 117.079 166.544ZM216 472C221.91 472 227.082 475.221 229.853 480H122.147C124.918 475.221 130.089 472 136 472H216ZM156.894 456L163.746 432H188.255L195.107 456H156.894ZM320 409C320 412.86 316.859 416 313 416H39C35.141 416 32 412.86 32 409V400H320V409ZM320 384H32V231C32 227.14 35.141 224 39 224H110.762C112.353 224.756 113.998 225.422 115.702 225.973C119.754 227.283 123.911 227.932 128.05 227.932C131.307 227.932 134.55 227.52 137.72 226.72L148.71 240H56C51.582 240 48 243.582 48 248V360C48 364.418 51.582 368 56 368H240C244.418 368 248 364.418 248 360V248C248 243.582 244.418 240 240 240H208.403C207.494 237.606 206.189 235.356 204.504 233.32L196.79 224H313C316.859 224 320 227.14 320 231V384Z"></path>
    <path className="cls-1" d="M95.5339 304H143.534C147.952 304 151.534 300.418 151.534 296C151.534 291.582 147.952 288 143.534 288H95.5339C91.1159 288 87.5339 291.582 87.5339 296C87.5339 300.418 91.1159 304 95.5339 304Z"></path>
    <path className="cls-1" d="M167.534 312H95.5339C91.1159 312 87.5339 315.582 87.5339 320C87.5339 324.418 91.1159 328 95.5339 328H167.534C171.952 328 175.534 324.418 175.534 320C175.534 315.582 171.952 312 167.534 312Z"></path>
    <path className="cls-1" d="M277.582 111.42C278.998 114.188 281.803 115.779 284.712 115.779C285.938 115.779 287.182 115.497 288.348 114.9L316.839 100.33C320.773 98.318 322.331 93.499 320.319 89.565C318.306 85.631 313.488 84.072 309.553 86.085L281.062 100.655C277.129 102.667 275.57 107.486 277.582 111.42Z"></path>
    <path className="cls-1" d="M266.229 86.2689C267.465 86.9609 268.805 87.2889 270.128 87.2889C272.931 87.2889 275.65 85.8129 277.116 83.1929L291.2 58.0199C293.357 54.1639 291.98 49.2899 288.125 47.1329C284.271 44.9769 279.396 46.3519 277.237 50.2089L263.154 75.3819C260.997 79.2369 262.374 84.1119 266.229 86.2689Z"></path>
    <path className="cls-1" d="M291.328 135.348C290.82 139.737 293.966 143.707 298.355 144.215L327.008 147.533C327.32 147.569 327.631 147.587 327.938 147.587C331.945 147.587 335.403 144.583 335.876 140.506C336.384 136.117 333.238 132.147 328.849 131.639L300.196 128.321C295.807 127.813 291.837 130.96 291.328 135.348Z"></path>
    <path className="cls-1" d="M121 16H39C26.317 16 16 26.318 16 39V105C16 117.682 26.317 128 39 128H121C133.683 128 144 117.682 144 105V39C144 26.318 133.683 16 121 16ZM64 112C64 103.178 71.178 96 80 96C88.822 96 96 103.178 96 112H64ZM72 64C72 59.589 75.589 56 80 56C84.411 56 88 59.589 88 64C88 68.411 84.411 72 80 72C75.589 72 72 68.411 72 64ZM128 105C128 108.86 124.859 112 121 112H112C112 99.453 104.738 88.575 94.199 83.334C100.137 78.961 104 71.924 104 64C104 50.766 93.233 40 80 40C66.767 40 56 50.766 56 64C56 71.924 59.863 78.961 65.801 83.334C55.262 88.575 48 99.453 48 112H39C35.141 112 32 108.86 32 105V39C32 35.14 35.141 32 39 32H121C124.859 32 128 35.14 128 39V105Z"></path>
    <path className="cls-1" d="M473 200H391C378.317 200 368 210.318 368 223V289C368 301.682 378.317 312 391 312H473C485.683 312 496 301.682 496 289V223C496 210.318 485.683 200 473 200ZM416.227 296C416.227 287.178 423.405 280 432.227 280C441.049 280 448.227 287.178 448.227 296H416.227ZM424.227 248C424.227 243.589 427.816 240 432.227 240C436.638 240 440.227 243.589 440.227 248C440.227 252.411 436.638 256 432.227 256C427.816 256 424.227 252.411 424.227 248ZM480 289C480 292.86 476.859 296 473 296H464.227C464.227 283.453 456.964 272.575 446.426 267.334C452.365 262.961 456.227 255.924 456.227 248C456.227 234.766 445.46 224 432.227 224C418.994 224 408.227 234.766 408.227 248C408.227 255.924 412.089 262.961 418.028 267.334C407.489 272.575 400.227 283.453 400.227 296H391C387.141 296 384 292.86 384 289V223C384 219.14 387.141 216 391 216H473C476.859 216 480 219.14 480 223V289Z"></path>
    <path className="cls-1" d="M473 384H391C378.317 384 368 394.318 368 407V473C368 485.682 378.317 496 391 496H473C485.683 496 496 485.682 496 473V407C496 394.318 485.683 384 473 384ZM416.227 480C416.227 471.178 423.405 464 432.227 464C441.049 464 448.227 471.178 448.227 480H416.227ZM424.227 432C424.227 427.589 427.816 424 432.227 424C436.638 424 440.227 427.589 440.227 432C440.227 436.411 436.638 440 432.227 440C427.816 440 424.227 436.411 424.227 432ZM480 473C480 476.86 476.859 480 473 480H464.227C464.227 467.453 456.964 456.575 446.426 451.334C452.365 446.961 456.227 439.924 456.227 432C456.227 418.766 445.46 408 432.227 408C418.994 408 408.227 418.766 408.227 432C408.227 439.924 412.089 446.961 418.028 451.334C407.489 456.575 400.227 467.453 400.227 480H391C387.141 480 384 476.86 384 473V407C384 403.14 387.141 400 391 400H473C476.859 400 480 403.14 480 407V473Z"></path>
  </svg>
);

export const CostEfficiency = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1707 1707"
    width="1.70666in"
    height="1.70666in"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
      <g id="_297491360">
        <g>
          <path className="cls-1" d="M1681 1699l-1655 0c-14,0 -26,-11 -26,-26l0 -1640c0,-14 12,-26 26,-26 14,0 26,12 26,26l0 1614 1629 0c14,0 26,12 26,26 0,15 -12,26 -26,26z"></path>
          <path className="cls-1" d="M382 1699l-183 0c-15,0 -26,-11 -26,-26l0 -318c0,-14 11,-26 26,-26l183 0c15,0 26,12 26,26l0 318c0,15 -11,26 -26,26zm-157 -52l132 0 0 -266 -132 0 0 266z"></path>
          <path className="cls-1" d="M753 1699l-184 0c-14,0 -25,-11 -25,-26l0 -451c0,-14 11,-26 25,-26l184 0c15,0 26,12 26,26l0 451c0,15 -11,26 -26,26zm-158 -52l132 0 0 -399 -132 0 0 399z"></path>
          <path className="cls-1" d="M1124 1699l-184 0c-14,0 -26,-11 -26,-26l0 -605c0,-14 12,-25 26,-25l184 0c14,0 26,11 26,25l0 605c0,15 -12,26 -26,26zm-158 -52l132 0 0 -553 -132 0 0 553z"></path>
          <path className="cls-1" d="M1495 1699l-184 0c-14,0 -26,-11 -26,-26l0 -733c0,-15 12,-26 26,-26l184 0c14,0 26,11 26,26l0 733c0,15 -12,26 -26,26zm-158 -52l132 0 0 -682 -132 0 0 682z"></path>
          <path className="cls-1" d="M291 1191c-8,0 -16,-4 -21,-10l-122 -161c-8,-11 -6,-28 5,-36 12,-9 28,-7 37,5l75 99 0 -275c0,-14 11,-26 26,-26 14,0 25,12 25,26l0 352c0,11 -7,21 -17,25 -3,0 -6,1 -8,1z"></path>
          <path className="cls-1" d="M291 1191c-3,0 -6,-1 -9,-1 -10,-4 -17,-14 -17,-25l0 -352c0,-14 11,-26 26,-26 14,0 25,12 25,26l0 275 75 -99c9,-12 25,-14 37,-5 11,8 13,25 5,36l-122 161c-5,6 -12,10 -20,10z"></path>
          <path className="cls-1" d="M1403 868c-8,0 -15,-3 -20,-9l-121 -145c-10,-11 -8,-28 3,-37 11,-9 27,-8 36,3l76 91 0 -247c0,-14 12,-26 26,-26 14,0 26,12 26,26l0 318c0,11 -7,21 -17,25 -3,1 -6,1 -9,1z"></path>
          <path className="cls-1" d="M1403 868c-3,0 -6,0 -9,-1 -10,-4 -17,-14 -17,-25l0 -318c0,-14 12,-26 26,-26 14,0 26,12 26,26l0 247 76 -91c9,-11 25,-12 36,-3 11,9 13,26 3,37l-121 145c-5,6 -12,9 -20,9z"></path>
          <path className="cls-1" d="M1032 993c-7,0 -15,-4 -20,-9l-121 -146c-9,-11 -8,-27 3,-36 11,-9 27,-8 37,3l75 91 0 -247c0,-15 12,-26 26,-26 14,0 26,11 26,26l0 318c0,11 -7,20 -17,24 -3,1 -6,2 -9,2z"></path>
          <path className="cls-1" d="M1032 993c-3,0 -6,-1 -9,-2 -10,-3 -17,-13 -17,-24l0 -318c0,-15 12,-26 26,-26 14,0 26,11 26,26l0 247 76 -91c9,-11 25,-12 36,-3 11,9 13,25 4,36l-122 146c-5,5 -12,9 -20,9z"></path>
          <path className="cls-1" d="M684 710c-191,0 -346,-156 -346,-346 0,-191 155,-346 346,-346 191,0 346,155 346,346 0,190 -155,346 -346,346zm0 -641c-162,0 -294,132 -294,295 0,162 132,294 294,294 163,0 295,-132 295,-294 0,-163 -132,-295 -295,-295z"></path>
          <path className="cls-1" d="M684 242c-14,0 -26,-11 -26,-26l0 -62c0,-14 12,-26 26,-26 15,0 26,12 26,26l0 62c0,15 -11,26 -26,26z"></path>
          <path className="cls-1" d="M684 599c-14,0 -26,-12 -26,-26l0 -62c0,-14 12,-26 26,-26 15,0 26,12 26,26l0 62c0,14 -11,26 -26,26z"></path>
          <path className="cls-1" d="M878 526c-5,0 -10,-1 -14,-4 -12,-9 -15,-25 -7,-36 49,-70 53,-157 12,-229 -7,-12 -3,-28 9,-35 13,-7 28,-3 36,9 51,90 46,199 -14,284 -5,8 -13,11 -22,11z"></path>
          <path className="cls-1" d="M477 509c-9,0 -17,-5 -22,-13 -52,-89 -46,-198 14,-284 8,-12 24,-15 36,-6 12,8 14,24 6,36 -48,69 -53,156 -11,228 7,13 3,28 -10,36 -4,2 -8,3 -13,3z"></path>
          <path className="cls-1" d="M661 1145c-7,0 -14,-4 -19,-10l-122 -145c-9,-11 -8,-27 3,-36 11,-9 28,-8 37,3l76 91 0 -247c0,-15 11,-26 25,-26 15,0 26,11 26,26l0 318c0,11 -7,20 -17,24 -3,1 -6,2 -9,2z"></path>
          <path className="cls-1" d="M661 1145c-3,0 -6,-1 -8,-2 -11,-3 -17,-13 -17,-24l0 -318c0,-15 11,-26 25,-26 15,0 26,11 26,26l0 247 76 -91c9,-11 26,-12 37,-3 10,9 12,25 3,36l-122 146c-5,5 -12,9 -20,9z"></path>
        </g>
      </g>
    </g>
  </svg>
);

export const CustomerRetention = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    version="1.1"
    style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision' }}
    viewBox="0 0 7111 7111"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
      <path className="cls-1" d="M3560 3650c-137,0 -267,-27 -385,-76l-190 328 571 756 570 -756 -188 -326c-117,48 -245,74 -378,74zm-2494 158c-34,0 -66,-14 -89,-40l-943 -1037c-71,-77 -16,-201 89,-201l351 0 0 -917c0,-66 54,-120 121,-120l943 0c67,0 121,54 121,120l0 917 351 0c104,0 159,124 89,201l-943 1037c-23,26 -56,40 -90,40zm-670 -1037l670 737 671 -737 -199 0c-67,0 -121,-54 -121,-121l0 -916 -702 0 0 916c0,67 -54,121 -120,121l-199 0zm6120 1037l-943 0c-67,0 -121,-54 -121,-121l0 -916 -351 0c-104,0 -159,-125 -89,-202l944 -1037c47,-53 130,-53 178,0l943 1037c71,77 16,202 -89,202l-351 0 0 916c0,67 -54,121 -121,121zm-822 -241l702 0 0 -917c0,-66 54,-120 120,-120l199 0 -670 -737 -671 737 199 0c67,0 121,54 121,120l0 917zm-2923 223l193 -335c-252,-184 -415,-481 -415,-816l0 -294c-215,-331 -284,-630 -207,-891 76,-260 278,-398 368,-449 132,-275 397,-443 737,-465 483,-30 998,238 1225,637 200,352 164,767 -101,1171l0 291c0,337 -167,637 -422,820l191 331 196 0c767,0 1391,624 1391,1392l0 1270c0,67 -54,121 -121,121l-4501 0c-67,0 -121,-54 -121,-121l0 -1270c0,-768 624,-1392 1392,-1392l195 0zm-1346 2542l635 0 0 -1050c0,-66 54,-121 120,-121 67,0 121,54 121,121l0 1050 2509 0 0 -1050c0,-66 54,-121 121,-121 66,0 120,54 120,121l0 1050 635 0 0 -1150c0,-635 -516,-1151 -1150,-1151l-205 0 -679 900c-48,64 -145,64 -193,0l-679 -900 -204 0c-635,0 -1151,516 -1151,1151l0 1150 0 0zm2495 -3013l18 -10c233,-132 391,-383 391,-670l0 -323c-24,-351 -112,-568 -254,-629 -181,-77 -455,99 -536,167 -38,31 -91,36 -134,13 -179,-95 -319,-114 -414,-57 -161,95 -200,401 -201,501l0 328c0,285 155,534 386,667l18 10c109,59 233,93 366,93 130,0 253,-33 360,-90zm-1309 -1371c129,-375 430,-515 838,-328 132,-92 445,-273 721,-155 161,70 276,225 341,465 76,-226 60,-441 -49,-634 -181,-318 -610,-539 -1000,-515 -153,10 -428,69 -547,358 -12,29 -35,52 -64,65 -1,0 -214,97 -279,321 -35,124 -22,265 39,423z"></path>
    </g>
  </svg>
);

export const BetterCustomerInsight = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <path
      className="cls-1"
      d="M60 7.57007H4C3.73478 7.57007 3.48043 7.67542 3.29289 7.86296C3.10536 8.0505 3 8.30485 3 8.57007V48.5701C3 48.8353 3.10536 49.0896 3.29289 49.2772C3.48043 49.4647 3.73478 49.5701 4 49.5701H37.66C37.8552 49.5714 38.0464 49.5156 38.2103 49.4095C38.3741 49.3035 38.5033 49.1518 38.582 48.9732C38.6606 48.7946 38.6853 48.5969 38.653 48.4044C38.6207 48.212 38.5327 48.0332 38.4 47.8901C38.3056 47.7883 38.1911 47.7073 38.0637 47.6522C37.9363 47.5971 37.7988 47.5691 37.66 47.5701H5V19.5701H59V47.5701H54C53.8057 47.5707 53.6158 47.6279 53.4535 47.7347C53.2912 47.8415 53.1635 47.9933 53.0861 48.1715C53.0086 48.3497 52.9848 48.5467 53.0174 48.7382C53.0501 48.9297 53.1379 49.1076 53.27 49.2501V49.2501C53.3632 49.3506 53.4762 49.4309 53.6017 49.4859C53.7273 49.541 53.8629 49.5696 54 49.5701H60C60.2652 49.5701 60.5196 49.4647 60.7071 49.2772C60.8946 49.0896 61 48.8353 61 48.5701V8.57007C61 8.30485 60.8946 8.0505 60.7071 7.86296C60.5196 7.67542 60.2652 7.57007 60 7.57007ZM59 17.5701H5V9.57007H59V17.5701Z"
    />
    <path
      className="cls-1"
      d="M10.5 15.0701C11.3284 15.0701 12 14.3985 12 13.5701C12 12.7416 11.3284 12.0701 10.5 12.0701C9.67157 12.0701 9 12.7416 9 13.5701C9 14.3985 9.67157 15.0701 10.5 15.0701Z"
    />
    <path
      className="cls-1"
      d="M15 15.0701C15.8284 15.0701 16.5 14.3985 16.5 13.5701C16.5 12.7416 15.8284 12.0701 15 12.0701C14.1716 12.0701 13.5 12.7416 13.5 13.5701C13.5 14.3985 14.1716 15.0701 15 15.0701Z"
    />
    <path
      className="cls-1"
      d="M19.5 15.0701C20.3284 15.0701 21 14.3985 21 13.5701C21 12.7416 20.3284 12.0701 19.5 12.0701C18.6716 12.0701 18 12.7416 18 13.5701C18 14.3985 18.6716 15.0701 19.5 15.0701Z"
    />
    <path
      className="cls-1"
      d="M35 14.5701H55C55.2652 14.5701 55.5196 14.4647 55.7071 14.2772C55.8946 14.0896 56 13.8353 56 13.5701C56 13.3049 55.8946 13.0505 55.7071 12.863C55.5196 12.6754 55.2652 12.5701 55 12.5701H35C34.7348 12.5701 34.4804 12.6754 34.2929 12.863C34.1054 13.0505 34 13.3049 34 13.5701C34 13.8353 34.1054 14.0896 34.2929 14.2772C34.4804 14.4647 34.7348 14.5701 35 14.5701Z"
    />
    <path
      className="cls-1"
      d="M42.07 40.0701C43.3327 38.1376 44.0035 35.8785 44 33.5701C44 31.1967 43.2962 28.8766 41.9776 26.9032C40.6591 24.9298 38.7849 23.3918 36.5922 22.4835C34.3995 21.5753 31.9867 21.3376 29.6589 21.8007C27.3311 22.2637 25.193 23.4066 23.5147 25.0848C21.8365 26.763 20.6936 28.9012 20.2306 31.229C19.7676 33.5568 20.0052 35.9696 20.9135 38.1623C21.8217 40.355 23.3598 42.2291 25.3332 43.5477C27.3066 44.8663 29.6266 45.5701 32 45.5701C33.9763 45.5724 35.922 45.0809 37.66 44.1401L48.08 55.4501C48.3447 55.747 48.6658 55.9883 49.0246 56.16C49.3834 56.3317 49.7727 56.4303 50.17 56.4501H50.3C51.0957 56.4501 51.8587 56.134 52.4213 55.5714C52.9839 55.0088 53.3 54.2457 53.3 53.4501C53.2929 52.7087 53.0114 51.9962 52.51 51.4501L42.07 40.0701ZM32 43.5701C30.0222 43.5701 28.0888 42.9836 26.4443 41.8848C24.7998 40.786 23.5181 39.2242 22.7612 37.3969C22.0043 35.5696 21.8063 33.559 22.1922 31.6192C22.578 29.6794 23.5304 27.8975 24.9289 26.499C26.3275 25.1005 28.1093 24.1481 30.0491 23.7622C31.9889 23.3764 33.9996 23.5744 35.8268 24.3313C37.6541 25.0882 39.2159 26.3699 40.3147 28.0144C41.4135 29.6589 42 31.5923 42 33.5701C42 36.2222 40.9464 38.7658 39.0711 40.6411C37.1957 42.5165 34.6522 43.5701 32 43.5701ZM51 54.1701C50.9029 54.2586 50.7894 54.3271 50.6659 54.3717C50.5423 54.4163 50.4112 54.4361 50.28 54.4301C50.0154 54.4159 49.7672 54.2972 49.59 54.1001L39.36 43.0001C39.8831 42.5839 40.3745 42.1293 40.83 41.6401L51 52.7501C51.0937 52.843 51.1681 52.9536 51.2189 53.0755C51.2697 53.1974 51.2958 53.3281 51.2958 53.4601C51.2958 53.5921 51.2697 53.7228 51.2189 53.8447C51.1681 53.9665 51.0937 54.0771 51 54.1701V54.1701Z"
    />
  </svg>
);

export const IncreasedTrafficAndLeads = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 1707 1707"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <path
      className="cls-1"
      d="M490 143c0,-39 31,-70 70,-70 39,0 70,31 70,70 0,29 -18,55 -44,65l0 278 80 0 0 -92c0,-14 12,-26 26,-26l189 0c10,-26 36,-44 65,-44 39,0 70,31 70,70 0,39 -31,70 -70,70 -29,0 -55,-18 -65,-44l-163 0 0 69c85,15 149,88 149,177l0 83 19 0c130,0 235,105 235,234l0 209c0,14 -12,25 -26,25l-65 0 0 391c0,15 -12,26 -26,26l-888 0c-14,0 -26,-11 -26,-26l0 -391 -64 0c-15,0 -26,-11 -26,-26l0 -208c0,-129 105,-234 234,-234l20 0 0 -83c0,-88 64,-162 148,-177l0 -69 -160 0c-9,29 -36,51 -68,51 -38,0 -70,-32 -70,-71 0,-38 32,-70 70,-70 27,0 51,16 62,38l192 0c14,0 26,12 26,26l0 92 80 0 0 -278c-26,-10 -44,-36 -44,-65zm514 1023l65 0 0 -183c0,-101 -82,-182 -183,-182l-652 0c-101,0 -182,81 -182,182l0 183 361 0 0 -56c0,-14 12,-26 26,-26l242 0c15,0 26,12 26,26l0 56 297 0zm-862 416l836 0 0 -365 -271 0 0 56c0,14 -11,26 -26,26l-242 0c-14,0 -26,-12 -26,-26l0 -56 -271 0 0 365zm163 -833l39 0 0 -83c0,-49 40,-89 89,-89l254 0c49,0 89,40 89,89l0 83 39 0 0 -83c0,-71 -58,-128 -128,-128l-254 0c-70,0 -128,57 -128,128l0 83zm91 0l329 0 0 -83c0,-20 -18,-38 -38,-38l-254 0c-20,0 -37,18 -37,38l0 83zm69 498l191 0 0 -111 -191 0 0 111zm322 -243l-435 0c-14,0 -26,-11 -26,-25l0 -73c0,-14 12,-26 26,-26l435 0c14,0 26,12 26,26l0 73c0,14 -12,25 -26,25zm-409 -51l383 0 0 -21 -383 0 0 21zm1133 518l-182 0c-14,0 -26,-12 -26,-26l0 -268 -65 0c-21,0 -33,-22 -22,-39l182 -294c10,-16 34,-16 44,0l180 291c17,23 -4,43 -20,42l-65 0 0 268c0,14 -12,26 -26,26zm-156 -52l130 0 0 -268c0,-33 41,-26 71,-26l-136 -218 -136 218c30,0 71,-7 71,26l0 268 0 0zm252 -775l-148 0c-15,0 -26,-12 -26,-26l0 -213c-31,0 -60,6 -71,-13 -4,-8 -4,-18 1,-26l148 -239c10,-16 34,-16 44,0l146 236c15,21 -1,42 -20,42l-48 0 0 213c0,14 -12,26 -26,26zm-122 -52l96 0 0 -213c0,-31 34,-26 53,-26l-101 -163 -102 163c19,0 54,-5 54,26l0 213zm-539 -217c-10,0 -18,9 -18,19l0 0c0,10 8,18 18,18 10,0 19,-8 19,-18 0,-10 -9,-19 -19,-19zm-387 -214l1 0 1 0c9,0 17,-8 17,-18 0,-10 -8,-19 -18,-19 -10,0 -18,9 -18,19 0,10 8,18 17,18zm-385 221c-10,0 -18,8 -18,18 0,11 8,19 18,19 10,0 19,-8 19,-19 0,0 0,-1 0,-2l-1 -1c-1,-8 -9,-15 -18,-15z"
    />
  </svg>
);

export const CompetitiveAdvantage = () => (
  <svg
    xmlSpace="preserve"
    width="200"
    height="200"
    version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
    viewBox="0 0 1707 1707"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
      <path
        className="cls-1"
        d="M536 1419c-13,0 -24,-10 -24,-23l0 -380c0,-13 11,-24 24,-24 12,0 23,11 23,24l0 380c0,13 -11,23 -23,23zm1018 288l-1401 0c-59,0 -106,-48 -106,-107 0,-58 47,-106 106,-106l9 0 0 -538c0,-47 38,-85 85,-85l322 0c14,0 27,3 38,9l0 -362c0,-47 38,-85 85,-85l322 0c47,0 85,38 85,85l0 184c12,-6 25,-9 39,-9l322 0c47,0 85,38 85,85l0 716 9 0c58,0 106,48 106,106 0,59 -48,107 -106,107zm-1401 -166c-33,0 -60,26 -60,59 0,33 27,60 60,60l1401 0c33,0 59,-27 59,-60 0,-33 -26,-59 -59,-59l-1401 0zm56 -47l398 0 0 -538c0,-21 -17,-38 -38,-38l-322 0c-21,0 -38,17 -38,38l0 538zm445 0l399 0 0 -716 0 -260c0,-21 -18,-38 -39,-38l-322 0c-21,0 -38,17 -38,38l0 976zm445 0l399 0 0 -716c0,-22 -17,-39 -38,-39l-322 0c-21,0 -39,17 -39,39l0 716zm-337 -1098c-12,0 -23,-3 -34,-11 -16,-12 -25,-31 -24,-51l5 -74 -47 -57c-13,-16 -17,-36 -11,-56 6,-19 21,-34 41,-39l72 -17 40 -63c11,-18 29,-28 49,-28 21,0 39,10 50,28l39 62 72 18c20,5 35,19 42,39 6,20 2,40 -11,56l-48 56 5 74c2,21 -7,40 -24,52 -16,12 -37,14 -56,7l-69 -28 -68 28c-8,3 -15,4 -23,4zm91 -349c-4,0 -7,1 -10,5l-44 71c-3,5 -8,9 -14,10l-81 21c-5,1 -7,3 -9,8 -1,4 0,7 2,11l54 64c4,4 6,10 6,16l-6 84c-1,4 1,8 5,10 3,3 7,3 11,2l78 -32c5,-2 11,-2 17,0l78 32c4,1 7,1 11,-2 4,-2 5,-6 5,-10l-6 -84c0,-5 2,-11 5,-16l54 -64c3,-4 4,-7 2,-11 -1,-5 -4,-7 -8,-8l-81 -21c-6,-1 -11,-5 -14,-10l-45 -71c-2,-4 -5,-5 -10,-5zm318 1384c-13,0 -23,-10 -23,-23l0 -583c0,-12 10,-23 23,-23 13,0 23,11 23,23l0 583c0,13 -10,23 -23,23zm255 0c-13,0 -23,-10 -23,-23l0 -583c0,-12 10,-23 23,-23 13,0 24,11 24,23l0 583c0,13 -11,23 -24,23zm-700 -10c-13,0 -24,-11 -24,-24l0 -821c0,-13 11,-23 24,-23 13,0 23,10 23,23l0 821c0,13 -10,24 -23,24zm255 0c-13,0 -23,-11 -23,-24l0 -821c0,-13 10,-23 23,-23 13,0 23,10 23,23l0 821c0,13 -10,24 -23,24zm-701 -2c-13,0 -23,-10 -23,-23l0 -380c0,-13 10,-24 23,-24 13,0 24,11 24,24l0 380c0,13 -11,23 -24,23z"
      />
    </g>
  </svg>
);

export const IncreasedSEO = () => (
  <svg
    width={200}
    height={200}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 118.31"
    style={{
      fill: '#282828'
    }}
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate attributeName="stop-color" values="#00ECD1; #7486F7; #a5b4fc; #00ECD1" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate attributeName="stop-color" values="#7486F7; #a5b4fc; #00ECD1; #7486F7" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate attributeName="stop-color" values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <style>
        {`
          .cls-1 { fill: url(#animatedGradient); }
        `}
      </style>
    </defs>
    <g>
      <path
        className="cls-1"
        d="M7.51,0h107.85c2.05,0,3.93,0.85,5.29,2.21l0.01,0.01l0.01,0.01l0.01,0.01c1.36,1.37,2.2,3.24,2.2,5.29v103.28 c0,2.07-0.85,3.95-2.21,5.31c-1.36,1.36-3.24,2.21-5.31,2.21H7.51c-2.05,0-3.93-0.84-5.3-2.21l-0.01-0.01l-0.01-0.01l-0.01-0.01 c-1.36-1.37-2.2-3.24-2.2-5.29V7.51c0-2.07,0.84-3.95,2.2-5.31c0.08-0.08,0.16-0.16,0.25-0.23C3.79,0.75,5.57,0,7.51,0L7.51,0 L7.51,0z M28.81,55.56l6.23-0.39c0.13,1.01,0.41,1.78,0.83,2.3c0.68,0.86,1.64,1.29,2.9,1.29c0.93,0,1.66-0.22,2.16-0.66 c0.51-0.44,0.76-0.95,0.76-1.53c0-0.55-0.24-1.04-0.72-1.48c-0.48-0.44-1.6-0.84-3.35-1.23c-2.88-0.64-4.92-1.5-6.15-2.58 c-1.24-1.07-1.85-2.43-1.85-4.09c0-1.09,0.32-2.12,0.95-3.09c0.63-0.97,1.58-1.74,2.85-2.29c1.27-0.55,3.01-0.83,5.22-0.83 c2.71,0,4.78,0.5,6.2,1.52c1.42,1.01,2.27,2.62,2.54,4.82l-6.17,0.37c-0.16-0.96-0.51-1.67-1.03-2.1 c-0.53-0.44-1.26-0.66-2.18-0.66c-0.76,0-1.34,0.16-1.73,0.48c-0.39,0.32-0.58,0.72-0.58,1.18c0,0.34,0.16,0.64,0.47,0.91 c0.3,0.28,1.03,0.54,2.19,0.78c2.87,0.62,4.92,1.25,6.16,1.88c1.24,0.63,2.15,1.41,2.71,2.35c0.56,0.93,0.85,1.98,0.85,3.14 c0,1.36-0.38,2.62-1.13,3.77c-0.76,1.15-1.8,2.02-3.16,2.62c-1.35,0.59-3.05,0.89-5.11,0.89c-3.61,0-6.11-0.7-7.5-2.09 C29.78,59.46,28.99,57.7,28.81,55.56L28.81,55.56z M51.41,41.34h17.56v4.54H58v3.38h10.17v4.33H58v4.18h11.3v4.81H51.41V41.34 L51.41,41.34z M72.06,51.98c0-3.47,0.96-6.17,2.9-8.09c1.93-1.93,4.62-2.9,8.07-2.9c3.53,0,6.26,0.95,8.17,2.84 c1.91,1.9,2.87,4.56,2.87,7.97c0,2.48-0.42,4.51-1.25,6.1c-0.84,1.59-2.05,2.82-3.62,3.71c-1.58,0.88-3.55,1.32-5.91,1.32 c-2.39,0-4.38-0.38-5.95-1.14c-1.57-0.77-2.84-1.97-3.82-3.62C72.55,56.53,72.06,54.46,72.06,51.98L72.06,51.98z M78.62,51.99 c0,2.14,0.4,3.68,1.2,4.62c0.8,0.93,1.89,1.4,3.26,1.4c1.41,0,2.51-0.46,3.28-1.37c0.78-0.92,1.16-2.56,1.16-4.94 c0-2-0.41-3.46-1.21-4.38c-0.81-0.92-1.9-1.38-3.29-1.38c-1.32,0-2.39,0.47-3.19,1.4C79.02,48.28,78.62,49.83,78.62,51.99 L78.62,51.99z M65.79,98.75c-1.58,0-2.86-1.39-2.86-3.11c0-1.72,1.28-3.11,2.86-3.11h35.22c1.58,0,2.86,1.39,2.86,3.11 c0,1.72-1.28,3.11-2.86,3.11H65.79L65.79,98.75z M20.82,98.75c-1.56,0-2.83-1.39-2.83-3.11c0-1.72,1.27-3.11,2.83-3.11h32.65 c1.56,0,2.83,1.39,2.83,3.11c0,1.72-1.27,3.11-2.83,3.11H20.82L20.82,98.75z M19.69,85.16c-1.56,0-2.83-1.39-2.83-3.11 c0-1.72,1.27-3.11,2.83-3.11h32.65c1.56,0,2.83,1.39,2.83,3.11c0,1.72-1.27,3.11-2.83,3.11H19.69L19.69,85.16z M65.79,85.16 c-1.58,0-2.86-1.39-2.86-3.11c0-1.72,1.28-3.11,2.86-3.11h35.22c1.58,0,2.86,1.39,2.86,3.11c0,1.72-1.28,3.11-2.86,3.11H65.79 L65.79,85.16z M17.59,34.77h85.94v33.65H17.59V34.77L17.59,34.77z M116.09,26.93c-0.23,0.04-0.48,0.06-0.72,0.06l-107.85,0 c-0.25,0-0.49-0.02-0.72-0.06v83.86c0,0.2,0.08,0.38,0.2,0.51l0.01,0.01c0.13,0.13,0.31,0.2,0.51,0.2l107.85,0 c0.19,0,0.37-0.08,0.51-0.22c0.13-0.13,0.22-0.31,0.22-0.51L116.09,26.93L116.09,26.93L116.09,26.93z M50.12,9.7 c2.7,0,4.88,2.19,4.88,4.88c0,2.7-2.19,4.88-4.88,4.88c-2.7,0-4.88-2.19-4.88-4.88C45.24,11.89,47.43,9.7,50.12,9.7L50.12,9.7z M33.05,9.7c2.7,0,4.88,2.19,4.88,4.88c0,2.7-2.19,4.88-4.88,4.88c-2.7,0-4.88-2.19-4.88-4.88C28.17,11.89,30.36,9.7,33.05,9.7 L33.05,9.7z M15.99,9.7c2.7,0,4.88,2.19,4.88,4.88c0,2.7-2.19,4.88-4.88,4.88c-2.7,0-4.88-2.19-4.88-4.88 C11.11,11.89,13.29,9.7,15.99,9.7L15.99,9.7z"
      />
    </g>
  </svg>
);

export const HighBrandAwareness = () => (
  <svg
    version="1.1"
    id="Layer_1_1_"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    width={200}
    height={200}
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ECD1">
          <animate
            attributeName="stop-color"
            values="#00ECD1; #7486F7; #a5b4fc; #00ECD1"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate
            attributeName="stop-color"
            values="#7486F7; #a5b4fc; #00ECD1; #7486F7"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate
            attributeName="stop-color"
            values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
    <path
      d="M3,44h23c0,0.188,0.053,0.375,0.159,0.54l2.332,3.614l-0.216,4.296c-0.02,0.393,0.193,0.761,0.543,0.94l3.829,1.958
      l1.957,3.83c0.179,0.351,0.542,0.567,0.941,0.543l4.296-0.215l3.613,2.333C43.62,61.947,43.809,62,43.998,62s0.377-0.053,0.542-0.16
      l3.614-2.332l4.296,0.216c0.401,0.019,0.761-0.193,0.94-0.543l1.958-3.829l3.83-1.957c0.351-0.179,0.563-0.547,0.543-0.941
      l-0.215-4.296l2.333-3.613c0.213-0.33,0.213-0.754,0-1.084l-2.332-3.614l0.216-4.296c0.02-0.393-0.193-0.761-0.543-0.94
      l-3.829-1.958l-1.957-3.83c-0.179-0.35-0.533-0.561-0.941-0.543l-4.296,0.215l-3.613-2.333C44.379,26.053,44.19,26,44,26V3
      c0-0.552-0.448-1-1-1H3C2.448,2,2,2.448,2,3v40C2,43.552,2.448,44,3,44z M44.002,28.19l3.341,2.158
      c0.176,0.114,0.378,0.172,0.593,0.159l3.972-0.199l1.81,3.542c0.096,0.187,0.248,0.339,0.436,0.435l3.541,1.811l-0.2,3.972
      c-0.011,0.209,0.045,0.417,0.158,0.592l2.157,3.343l-2.158,3.341c-0.114,0.176-0.169,0.383-0.159,0.593l0.199,3.972l-3.542,1.81
      c-0.187,0.096-0.339,0.248-0.435,0.436l-1.811,3.541l-3.972-0.2c-0.206-0.011-0.417,0.044-0.592,0.158l-3.343,2.157l-3.341-2.158
      c-0.162-0.105-0.351-0.16-0.542-0.16c-0.017,0-0.033,0-0.05,0.001l-3.972,0.199l-1.81-3.542c-0.096-0.187-0.248-0.339-0.436-0.435
      l-3.541-1.811l0.2-3.972c0.011-0.209-0.045-0.417-0.158-0.592l-2.157-3.343l2.158-3.341c0.114-0.176,0.169-0.383,0.159-0.593
      l-0.199-3.972l3.542-1.81c0.187-0.096,0.339-0.248,0.435-0.436l1.811-3.541l3.972,0.2c0.209,0.015,0.417-0.045,0.592-0.158
      L44.002,28.19z M18,4h10v13c0,0.551-0.449,1-1,1h-8c-0.551,0-1-0.449-1-1V4z M4,37h9v-2H4V4h12v13c0,1.654,1.346,3,3,3h8
      c1.654,0,3-1.346,3-3V4h12v23.102l-2.154,1.39l-4.296-0.216c-0.404-0.024-0.761,0.193-0.94,0.543l-1.958,3.829l-3.83,1.957
      c-0.351,0.179-0.563,0.547-0.543,0.941l0.215,4.296L27.1,42H4V37z"
      fill="url(#animatedGradient)"
    />
    <path
      d="M33,43.999c-0.001,6.065,4.933,11,10.999,11.001c0,0,0.001,0,0.002,0c6.064,0,10.999-4.934,11-10.999
      s-4.933-11-10.999-11.001c0,0-0.001,0-0.002,0C37.936,33,33.001,37.934,33,43.999z M44,35c0,0,0.001,0,0.002,0
      c2.404,0,4.664,0.937,6.364,2.637c1.699,1.7,2.635,3.96,2.635,6.364c0,2.404-0.937,4.664-2.637,6.364C48.663,52.064,46.404,53,44,53
      c0,0-0.001,0-0.002,0c-2.404,0-4.664-0.937-6.364-2.637c-1.699-1.7-2.635-3.96-2.635-6.364c0-2.404,0.937-4.664,2.637-6.364
      C39.337,35.936,41.596,35,44,35z"
      fill="url(#animatedGradient)"
    />
    <path
      d="M40.432,45.719l-0.509,3.12c-0.062,0.378,0.098,0.758,0.411,0.979c0.313,0.22,0.724,0.243,1.06,0.058L44,48.435l2.606,1.44
      C46.758,49.958,46.924,50,47.09,50c0.202,0,0.404-0.062,0.576-0.183c0.313-0.221,0.473-0.601,0.411-0.979l-0.509-3.12l2.147-2.201
      c0.262-0.268,0.352-0.66,0.232-1.016s-0.427-0.615-0.797-0.671l-2.927-0.447l-1.318-2.809C44.741,38.224,44.388,38,44,38
      s-0.741,0.224-0.905,0.575l-1.318,2.809l-2.927,0.447c-0.371,0.057-0.678,0.316-0.797,0.671s-0.029,0.748,0.232,1.016L40.432,45.719
      z M42.606,43.281c0.33-0.051,0.613-0.262,0.754-0.564L44,41.354l0.64,1.363c0.142,0.302,0.425,0.513,0.754,0.564l1.531,0.234
      l-1.141,1.169c-0.222,0.227-0.322,0.546-0.271,0.859l0.259,1.586l-1.288-0.712c-0.151-0.083-0.317-0.125-0.484-0.125
      s-0.333,0.042-0.484,0.125l-1.288,0.712l0.259-1.586c0.051-0.313-0.049-0.632-0.271-0.859l-1.141-1.169L42.606,43.281z"
      fill="url(#animatedGradient)"
    />
    <rect x="15" y="35" width="2" height="2" fill="url(#animatedGradient)" />
  </svg>
);
