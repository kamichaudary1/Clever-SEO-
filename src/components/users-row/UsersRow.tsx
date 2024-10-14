import userData from "@/lib/data/userData.json";
import UserCard from "@/components/users-row/UsersCards";
import { UsersDataType } from "@/types/users";

export default function UsersRow() {
  const userContent: UsersDataType = userData.users[0];

  return (
    <div className="py-14">
      <div className="max-w-6xl mx-5 xl:mx-auto">
        {/* Title and Tagline */}
        <h2 className="text-center text-3xl font-semibold text-black">
          {userContent.userTitle}
        </h2>
        <p className="w-full text-center mt-9 mb-11 text-[#4C4C4C] text-xl font-normal">
          {userContent.userTagline}
        </p>

        {/* Users List in Grid */}
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
      </div>
    </div>
  );
}
