export type User = {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    location: string;
    memberSince: string;
    tripsCount: number;
    friends: Friend[];
  };

  export type Friend = Pick<User, "id" | "name" | "avatar" | "bio" | "location" | "tripsCount"> & {
    friendSince: string;
  };
  
  export type Post = {
    id: string;
    author: Pick<User, "id" | "name" | "avatar">;
    body: string;
    location?: string;
    createdAt: string;
    likes: number;
    comments: Comment[];
  };
  
  export type Comment = {
    id: string;
    author: Pick<User, "id" | "name" | "avatar">;
    body: string;
    createdAt: string;
  };