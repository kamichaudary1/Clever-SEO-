"use client"; // Add this line if needed for interactivity

import React from "react";
import DefaultBtn from "@/components/global/DefaultBtn";
import seoData from "@/lib/data/cleverseoData.json";
import { CleverSEO } from "@/types/CleverSEO";

export default function CleverSEOComponent() {
  
  const seoContent: CleverSEO = seoData.seo[0];
  return (
    <div 
      style={{
        background: "linear-gradient(to right, #1AA7A7 0%, #C0FFC8 90%)",
      }}
      className='w-full py-14 px-5 xl:px-0'>
      {/* Title */}
      <h2 className='text-center text-4xl font-extrabold text-white'>
        {seoContent.seoTitle}
      </h2>
      
      {/* Tagline */}
      <span className='block text-center text-4xl text-white font-normal mt-4'>
        {seoContent.seoTagline}
      </span>
      
      {/* Button */}
      <div className='flex justify-center mt-6'>
        <DefaultBtn 
          text="Start Writing"
          textColor="black" 
          bgColor="white"
          hoverBgColor="#5DA389"
          size="large"
          fontSize="32px"
          border="2px solid"
        />
      </div>
    </div>
  );
}
