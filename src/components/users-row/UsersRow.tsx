"use client"

import { useState, useEffect } from "react";
import userData from "@/lib/data/userData.json";
import UserCard from "@/components/users-row/UsersCards";
import { UsersDataType } from "@/types/users";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UsersRow() {
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

  const userContent: UsersDataType = userData.users[0];
  // Slick slider settings for mobile
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
  };

  return (
    <div className="py-12 pb-20">
      <div className="max-w-6xl md:mx-5 xl:mx-auto">
        {/* Title and Tagline */}
        <h2 className="text-center text-xl md:text-3xl font-semibold text-black">
          {userContent.userTitle}
        </h2>
        <p className="md:w-full text-center mt-4 md:mt-10 mb-7 md:mb-20 mx-5 md:mx-0 text-[#4C4C4C] text-[16px] md:text-xl font-normal">
          {userContent.userTagline}
        </p>
        {isMobileView ? (
          <div className="w-full">
            <Slider {...sliderSettings} className="w-full">
                {userContent.usersList.map((user, index) => (
                  <div key={index} className="px-3">
                    <UserCard
                      userThumbnail={user.userThumbnail}
                      userTitle={user.userTitle}
                      userDescp={user.userDescp}
                    />
                  </div>
                ))}
            </Slider>
          </div>
          ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-5">
            {userContent.usersList.map((user, index) => (
              <UserCard
                key={index}
                userThumbnail={user.userThumbnail}
                userTitle={user.userTitle}
                userDescp={user.userDescp}
              />
            ))}
          </div>
          )}
      </div>
    </div>
  );
}

