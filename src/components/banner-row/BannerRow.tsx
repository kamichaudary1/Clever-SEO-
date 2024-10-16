"use client"; // Mark this as a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import bannerData from '@/lib/data/bannerData.json';
import { BannerData } from '@/types/BannerDataTypes';
import DefaultBtn from '@/components/global/DefaultBtn';

export default function BannerRow() {
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

  // Destructure bannerTitle and image from the banner data
  const { bannerTitle, image } = bannerData.banner as BannerData["banner"];

  return (
    <div 
      className="flex items-center justify-center relative h-[70vh] md:h-[93vh]"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap justify-center w-full md:max-w-3xl lg:max-w-fit m-auto relative z-10">
        <h1 
          className="text-white text-xl md:text-4xl xl:text-7xl text-center tracking-widest font-bold px-5 2xl:px-60 pb-7 md:pb-16"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {bannerTitle}
        </h1>
        <div className='w-full text-center'>
          <DefaultBtn 
            text="Start Writing"
            textColor="primary" 
            hovertextColor="primary"
            fontSize={buttonfont as "16px" | "32px"}
            size={buttonSize as "small" | "large"}
            bgColor="#000"
            hoverBgColor="#5DA389"
          />
        </div>
        <Link href="/" 
          className='text-black text-xl font-bold hover:text-[#5DA389] transition-all duration-300 mt-4'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Learn More
        </Link>
      </div>
    </div>
  );
}
