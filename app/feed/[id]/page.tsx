import { getPost } from "@/lib/api";
import { notFound } from "next/navigation";
import CommentList from "@/components/feed/CommentList";
import LikeButton from "@/components/feed/LikeButton";
import Link from "next/link";

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Link href="/feed" className="text-sm text-orange-500 hover:underline mb-6 inline-block">
        ← Back to Feed
      </Link>
      <div className="flex items-center gap-3 mb-4">
        <img src={post.author.avatar} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium">{post.author.name}</p>
          <p className="text-sm text-gray-500">{post.location}</p>
        </div>
      </div>
      <p className="mb-6">{post.body}</p>
      <LikeButton initialLikes={post.likes} />
      <div className="border-t pt-4 mt-4">
        <CommentList comments={post.comments} />
      </div>
    </main>
  );
}