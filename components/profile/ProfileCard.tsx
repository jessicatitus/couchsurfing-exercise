import { User } from "@/types";

export default function ProfileCard({ user }: { user: User }) {
  const memberSince = new Date(user.memberSince).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <img src={user.avatar} className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-xl font-semibold">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-6">{user.bio}</p>
      <div className="flex gap-6 text-sm text-gray-500">
        <span>{user.tripsCount} trips</span>
        <span>{user.friends.length} friends</span>
        <span>Member since {memberSince}</span>
      </div>
    </div>
  );
}