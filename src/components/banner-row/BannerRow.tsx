"use client"; // Mark this as a Client Component

import Link from 'next/link';
import bannerData from '@/lib/data/bannerData.json';
import { BannerData } from '@/types/BannerDataTypes';
import DefaultBtn from '@/components/global/DefaultBtn';

export default function BannerRow() {
  // Destructure bannerTitle and image from the banner data
  const { bannerTitle, image } = bannerData.banner as BannerData["banner"];

  return (
    <div 
      className="flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 80px)",
      }}
    >
      <div className="flex flex-wrap justify-center w-full md:max-w-3xl lg:max-w-fit m-auto relative z-10">
        <h1 
          className="text-white text-3xl md:text-4xl xl:text-7xl text-center tracking-widest font-bold px-5 2xl:px-60 pb-16"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {bannerTitle}
        </h1>
        <div className='w-full text-center'>
          <DefaultBtn 
            text="Start Writing"
            textColor="primary" 
            hovertextColor="primary"
            fontSize="32px"
            size="large"
            bgColor="#000"
            hoverBgColor="#5DA389"
          />
        </div>
        <Link href="/" 
          className='text-white text-xl font-bold hover:text-black transition-all duration-300 mt-4'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Learn More
        </Link>
      </div>
    </div>
  );
}
