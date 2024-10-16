"use client"; // Add this line if needed for interactivity

import React from "react";
import { useEffect, useState } from "react";
import DefaultBtn from "@/components/global/DefaultBtn";
import seoData from "@/lib/data/cleverseoData.json";
import { CleverSEO } from "@/types/CleverSEO";

export default function CleverSEOComponent() {
  const [buttonSize, setButtonSize] = useState("large");
  const [buttonfont, setButtonFont] = useState("32px");

  useEffect(() => {
    const updateSize = () => {
      setButtonSize(window.innerWidth < 768 ? "small" : "large");
      setButtonFont(window.innerWidth < 768 ? "16px" : "32px");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  const seoContent: CleverSEO = seoData.seo[0];
  return (
    <div 
      style={{
        background: "linear-gradient(to right, #1AA7A7 0%, #C0FFC8 90%)",
      }}
      className='w-full py-14 px-5 xl:px-0'>
      {/* Title */}
      <h2 className='text-center text-2xl md:text-4xl font-extrabold text-white'>
        {seoContent.seoTitle}
      </h2>
      
      {/* Tagline */}
      <span 
        className='block text-center text-[16px] md:text-4xl text-white font-normal mt-3 md:mt-4'
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        {seoContent.seoTagline}
      </span>
      
      {/* Button */}
      <div className='flex justify-center mt-6'>
        <DefaultBtn 
          text="Start Writing"
          textColor="secondary"
          hovertextColor="secondary" 
          fontSize={buttonfont as "16px" | "32px"}
          size={buttonSize as "small" | "large"}
          bgColor="white"
          hoverBgColor="#5DA389"
          border="2px solid"
        />
      </div>
    </div>
  );
}
