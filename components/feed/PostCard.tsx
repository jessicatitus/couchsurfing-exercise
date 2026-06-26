import Link from "next/link";
import { Post } from "@/types";
import LikeButton from "@/components/feed/LikeButton";

export default function PostCard({ post }: { post: Post }) {
    return (
      <div className="border rounded-xl p-4 hover:bg-gray-50 transition">
        <Link href={`/feed/${post.id}`} className="block">
          <div className="flex items-center gap-3 mb-2">
            <img src={post.author.avatar} className="w-8 h-8 rounded-full" />
            <span className="font-medium">{post.author.name}</span>
            <span className="text-sm text-gray-400 ml-auto">{post.location}</span>
          </div>
          <p className="text-gray-700 line-clamp-3">{post.body}</p>
        </Link>
        <div className="flex gap-2 mt-2">
          <LikeButton initialLikes={post.likes} />
          <span className="text-sm text-gray-400">
            · {post.comments.length}{" "}
            {post.comments.length === 1 ? "comment" : "comments"}
          </span>
        </div>
      </div>
    );
  }