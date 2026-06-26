import { Comment } from "@/types";

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        {comments.length} {comments.length === 1 ? "comment" : "comments"}
      </h2>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
            <div className="flex items-center gap-3 mb-1">
                <img src={comment.author.avatar} className="w-8 h-8 rounded-full" />
                <span className="font-medium">{comment.author.name}</span>
            </div>
            <p className="text-gray-700 pl-11">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}