import { Friend } from "@/types";

export default function FriendList({ friends }: { friends: Friend[] }) {
  return (
    <div className="space-y-4">
      {friends.map((friend) => {
        const formattedDate = new Date(friend.friendSince).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
        return (
          <div key={friend.id} className="flex items-center gap-4 rounded-xl border p-4">
            <img src={friend.avatar} alt={friend.name} className="h-14 w-14 rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">{friend.name}</h3>
              <p className="text-sm text-gray-500">{friend.location}</p>
              <p className="text-sm text-gray-500">Friends since {formattedDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}