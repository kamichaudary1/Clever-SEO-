import Image from "next/image"

export default function AppFlow() {
  return (
    <div className="bg-[rgba(192,255,200,0.17)] py-8 md:py-20 mt-5 md:mt-8">
        <div className="mx-5 md:mx-auto xl:max-w-6xl bg-white md:bg-[#5DA389] rounded-3xl">
          <Image
              src="/images/assistant-anatomy.png"
              alt="Descriptive Alt Text"
              width={1100}
              height={300}
              className="rounded-lg p-4" // Add any additional Tailwind CSS classes here
          />
        </div>
    </div>
  )
}
