"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import FunctionalitiesData from "@/lib/data/FunctionalitiesData.json";
import FunctionalitiesColumn from "./FunctionalitiesColumn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FunctionalitiesRow() {
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if screen width is below 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Run on initial render
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slick slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
  };

  const image = FunctionalitiesData.functionalitiesBG;

  return (
    <div
      className="w-full md:flex items-center justify-center relative flex-wrap py-10 md:mx-5 xl:mx-0"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full">
        <h2 className="text-center text-xl md:text-3xl font-semibold pb-0 md:pb-5 text-[#5DA389]">Functionalities</h2>
      </div>

      <div className="px-5 xl:px-0 xl:max-w-6xl mx-auto flex items-start">
        {isMobileView ? (
          // Render slider for mobile view
          <Slider {...sliderSettings} className="w-full">
            {FunctionalitiesData.functionalities.map((functionality, index) => (
              <div key={index} className="p-4">
                <FunctionalitiesColumn functionality={functionality} gradientDirection="to right" />
              </div>
            ))}
          </Slider>
        ) : (
          // Render normal grid for desktop view
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full h-full">
            <div className="md:col-span-1 flex flex-col gap-4 h-full">
              <FunctionalitiesColumn
                functionality={FunctionalitiesData.functionalities[0]}
                gradientDirection="to right"
              />
              <FunctionalitiesColumn
                functionality={FunctionalitiesData.functionalities[1]}
                gradientDirection="to left"
              />
            </div>

            <div className="md:col-span-1 h-full">
              <FunctionalitiesColumn
                functionality={FunctionalitiesData.functionalities[2]}
                gradientDirection="to top"
              />
            </div>

            <div className="md:col-span-1 flex flex-col gap-4 h-full">
              <FunctionalitiesColumn
                functionality={FunctionalitiesData.functionalities[3]}
                gradientDirection="to right"
              />
              <FunctionalitiesColumn
                functionality={FunctionalitiesData.functionalities[4]}
                gradientDirection="to left"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
