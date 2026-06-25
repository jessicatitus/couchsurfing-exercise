import { User, Post } from "../types";

export const currentUser: User = {
  id: "1",
  name: "Jessica Wehe",
  avatar: "https://i.pravatar.cc/150?u=1",
  bio: "I show up with sourdough starter and leave with new friends. Baker, home cook, and relentless traveler who thinks every kitchen is worth exploring.",
  location: "Gilbert, AZ",
  memberSince: "2018-03-12",
  tripsCount: 23,
  friends: [
    {
      id: "2",
      name: "Yuki Tanaka",
      avatar: "https://i.pravatar.cc/150?u=2",
      bio: "Photographer and ramen lover roaming Southeast Asia.",
      location: "Tokyo, Japan",
      tripsCount: 41,
      friendSince: "2019-07-04",
    },
    {
      id: "3",
      name: "Priya Nair",
      avatar: "https://i.pravatar.cc/150?u=3",
      bio: "Yoga teacher, hostel hopper, perpetual wanderer.",
      location: "Goa, India",
      tripsCount: 18,
      friendSince: "2020-11-20",
    },
  ],
};

export const mockPosts: Post[] = [
    {
      id: "1",
      author: { id: "2", name: "Yuki Tanaka", avatar: "https://i.pravatar.cc/150?u=2" },
      body: "Wandering the streets of southern Spain in search of churros — found a tiny shop run by an 80-year-old woman who has been frying them since 1974. Worth every wrong turn.",
      location: "Seville, Spain",
      createdAt: "2026-06-01T09:00:00Z",
      likes: 14,
      comments: [
        {
            id: "1",
            author: { id: "1", name: "Jessica Wehe", avatar: "https://i.pravatar.cc/150?u=1" },
            body: "Sounds like a cool evening with warm, yummy food!",
            createdAt: "2026-06-01T10:35:00Z",
        },
      ],
    },
    {
      id: "2",
      author: { id: "3", name: "Priya Nair", avatar: "https://i.pravatar.cc/150?u=3" },
      body: "Stumbled into a night market in Chiang Mai and spent three hours eating my way through it. Still thinking about the mango sticky rice.",
      location: "Chiang Mai, Thailand",
      createdAt: "2026-06-10T18:30:00Z",
      likes: 22,
      comments: [
        {
            id: "1",
            author: { id: "1", name: "Jessica Wehe", avatar: "https://i.pravatar.cc/150?u=1" },
            body: "This is making me so jealous!",
            createdAt: "2026-06-01T10:00:00Z",
        },
      ],
    },
    {
      id: "3",
      author: { id: "2", name: "Yuki Tanaka", avatar: "https://i.pravatar.cc/150?u=2" },
      body: "Got hopelessly lost in the medina in Fez and ended up at a stranger's dinner table. They fed me tagine and wouldn't let me leave without tea. This is why I travel.",
      location: "Fez, Morocco",
      createdAt: "2026-06-18T20:00:00Z",
      likes: 31,
      comments: [
        {
            id: "1",
            author: { id: "3", name: "Priya Nair", avatar: "https://i.pravatar.cc/150?u=3" },
            body: "Booking a one-way ticket to Morocco ASAP!",
            createdAt: "2026-06-01T10:35:00Z",
        },
        {
            id: "1",
            author: { id: "3", name: "Priya Nair", avatar: "https://i.pravatar.cc/150?u=3" },
            body: "See you in 13 hours!",
            createdAt: "2026-06-01T10:38:00Z",
        },
      ],
    },
  ];