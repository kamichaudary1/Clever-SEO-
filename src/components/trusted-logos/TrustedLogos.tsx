"use client";

import Slider from "react-slick";
import Image from 'next/image';
import logoData from "@/lib/data/TrustedLogos.json"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrustedLogosComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
        },
      },
    ],
  };

  return (
    <div className='bg-white pt-5 pb-12 overflow-hidden'> {/* Center-aligns the container */}
      <h2 className='text-center text-black text-3xl font-semibold pb-9'>Trusted by</h2>
      <Slider {...settings}>
        {logoData.logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex justify-center">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={90} 
                height={90}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
