import { getPost } from "@/lib/api";
import { notFound } from "next/navigation";
import CommentList from "@/components/feed/CommentList";

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPost(id);
    if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-4">
        <img src={post.author.avatar} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium">{post.author.name}</p>
          <p className="text-sm text-gray-500">{post.location}</p>
        </div>
      </div>
      <p className="mb-6">{post.body}</p>
      <CommentList comments={post.comments} />
    </main>
  );
}