import { Comment } from "@/types";

export default function CommentList({ comments }: { comments: Comment[] }) {
  return <div>{comments.length} comments</div>;
}