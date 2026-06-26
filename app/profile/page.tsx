import { getCurrentUser } from "@/lib/api";
import ProfileCard from "@/components/profile/ProfileCard";
import FriendList from "@/components/profile/FriendList";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <ProfileCard user={user} />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Friends</h2>
        <FriendList friends={user.friends} />
      </div>
    </main>
  );
}