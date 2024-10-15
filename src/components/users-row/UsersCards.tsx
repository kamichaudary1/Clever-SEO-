import Image from "next/image";

interface UserCardProps {
  userThumbnail: string;
  userTitle: string;
  userDescp: string;
}

export default function UserCard({ userThumbnail, userTitle, userDescp }: UserCardProps) {
  return (
    <div className="bg-[#F0FBF1] rounded-lg flex flex-col md:flex-row items-start shadow-md">
      {/* User Thumbnail */}
      <div className="w-full md:w-1/3">
        <Image
          src={userThumbnail}
          alt={userTitle}
          width={170}
          height={100}
          className="rounded-lg object-cover w-full md:w-auto"
        />
      </div>

      {/* User Title and Description */}
      <div className="flex-1 pt-7 pb-3 px-5">
        <h3 className="text-3xl font-medium text-black">{userTitle}</h3>
        <p className="text-[#4C4C4C] text-[14px] mt-5">{userDescp}</p>
      </div>
    </div>
  );
}
