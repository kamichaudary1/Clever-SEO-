"use client"; // Mark this as a Client Component

// import bannerData from "@/lib/data/bannerTagline.json";
// import { BannerTagline } from "@/types/BannerTagline";

export default function BannerTaglineComponent() {

  // Destructure taglineText from the JSON data

  
  return (
    <div className="flex justify-center">
      <div 
        className="w-full mx-5 xl:mx-auto -mt-28 md:-mt-36 py-9 px-7 lg:px-16 rounded-xl xl:w-2/3 bg-[#D6F9FF] md:bg-white relative text-center shadow-lg"
      >
        <p className="text-[16px] md:text-xl text-black tracking-widest">
        <strong>AI</strong> is transforming the digital landscape by automating SEO tasks that once required manual expertise. Advanced algorithms can now analyze 
        search trends, optimize content, and enhance website rankings in <strong>real time</strong>—without the need for a dedicated SEO expert. This automation not 
        only increases efficiency but also drastically <strong>reduces costs</strong>, allowing businesses to achieve top-tier SEO results faster and 
        more affordably.
        </p>
      </div>
    </div>
  );
}
