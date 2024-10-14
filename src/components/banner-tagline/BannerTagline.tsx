"use client"; // Mark this as a Client Component

import bannerData from "@/lib/data/bannerTagline.json";
import { BannerTagline } from "@/types/BannerTagline";

export default function BannerTaglineComponent() {

  // Destructure taglineText from the JSON data
  const { taglineText } = bannerData.bannerTagline as BannerTagline;

  return (
    <div className="flex justify-center">
      <div className="w-full mx-5 xl:mx-auto -mt-36 xl:mx-0 py-8 px-7 lg:px-16 rounded-xl xl:w-2/3 bg-[#D6F9FF] relative text-center">
        <p className="text-xl tracking-widest">{taglineText}</p>
      </div>
    </div>
  );
}
