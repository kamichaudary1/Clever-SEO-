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
      <span 
        className='block text-center text-4xl text-white font-normal mt-4'
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        {seoContent.seoTagline}
      </span>
      
      {/* Button */}
      <div className='flex justify-center mt-6'>
        <DefaultBtn 
          text="Start Writing"
          textColor="secondary"
          hovertextColor="secondary" 
          fontSize="32px"
          bgColor="white"
          hoverBgColor="#5DA389"
          size="medium"
          border="2px solid"
        />
      </div>
    </div>
  );
}
