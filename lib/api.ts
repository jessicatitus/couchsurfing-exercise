// src/lib/api.ts

import { currentUser, mockPosts } from "./mock-data";
import { Post, User } from "@/types";

// Simulates network latency
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getCurrentUser(): Promise<User> {
  await delay();
  return currentUser;
}

export async function getFeed(): Promise<Post[]> {
  await delay(500);
  return mockPosts;
}

export async function getPost(id: string): Promise<Post | null> {
  await delay();
  return mockPosts.find((p) => p.id === id) ?? null;
}