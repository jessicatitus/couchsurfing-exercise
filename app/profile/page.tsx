import { getCurrentUser } from "@/lib/api";
import ProfileCard from "@/components/profile/ProfileCard";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  return (
    <main className="max-w-2xl mx-auto p-6">
      <ProfileCard user={user} />
    </main>
  );
}