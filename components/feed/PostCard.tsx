import Link from "next/link";
import { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/feed/${post.id}`} className="block border rounded-xl p-4 hover:bg-gray-50 transition">
      <div className="flex items-center gap-3 mb-2">
        <img src={post.author.avatar} className="w-8 h-8 rounded-full" />
        <span className="font-medium">{post.author.name}</span>
        <span className="text-sm text-gray-400 ml-auto">{post.location}</span>
      </div>
      <p className="text-gray-700 line-clamp-3">{post.body}</p>
      <p className="text-sm text-gray-400 mt-2">{post.likes} likes · {post.comments.length} comments</p>
    </Link>
  );
}