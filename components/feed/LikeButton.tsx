"use client";

import { useState } from "react";

export default function LikeButton({
  initialLikes,
}: {
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  }

  return (
    <button
      onClick={handleLike}
      className={`text-sm transition ${
        liked
          ? "text-orange-500 font-medium"
          : "text-gray-400 hover:text-orange-500"
      }`}
    >
      {likes} {likes === 1 ? "like" : "likes"}
    </button>
  );
}