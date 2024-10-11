import Image from "next/image"

export default function AppFlow() {
  return (
    <div className="bg-[rgba(192,255,200,0.17)] py-20 mt-8">
        <div className="w-full xl:max-w-6xl px-8 xl:px-0 bg-white rounded-3xl mx-auto">
            <Image
                src="/images/assistant-anatomy.png"
                alt="Descriptive Alt Text"
                width={1100}
                height={300}
                className="rounded-lg" // Add any additional Tailwind CSS classes here
            />
        </div>
    </div>
  )
}
