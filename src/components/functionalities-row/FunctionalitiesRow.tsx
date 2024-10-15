// src/components/FunctionalitiesRow.tsx
import FunctionalitiesData from "@/lib/data/FunctionalitiesData.json";
import FunctionalitiesColumn from "./FunctionalitiesColumn";

export default function FunctionalitiesRow() {
  const image = FunctionalitiesData.functionalitiesBG;

  return (
    <div
      className="flex items-center justify-center relative flex-wrap py-10 md:mx-5 xl:mx-0"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full">
        <h2 className="text-center text-3xl font-semibold pb-5 text-[#5DA389]">Functionalities</h2>
      </div>
      <div className="px-5 xl:px-0 xl:max-w-6xl mx-auto flex items-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full h-full">
          {/* First column with two boxes */}
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

          {/* Second column with one big box */}
          <div className="md:col-span-1 h-full">
            <FunctionalitiesColumn 
              functionality={FunctionalitiesData.functionalities[2]} 
              gradientDirection="to top"
            />
          </div>

          {/* Third column with two boxes */}
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
      </div>
    </div>
  );
}
