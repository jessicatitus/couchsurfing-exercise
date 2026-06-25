import { getFeed } from "../../lib/api";
import PostCard from "../../components/feed/PostCard";

export default async function FeedPage() {
  const posts = await getFeed();
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-semibold">Friends' Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}