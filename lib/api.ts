// src/lib/api.ts

import { currentUser, mockPosts } from "./mock-data";
import { Post, User } from "@/types";

// Simulates network latency
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getCurrentUser(): Promise<User> {
    try {
      await delay();
      return currentUser;
    } catch (error) {
      throw new Error(`Failed to fetch current user: ${error}`);
    }
  }

export async function getFeed(): Promise<Post[]> {
  try {
    await delay(500);
    return mockPosts;
  } catch (error) {
    throw new Error(`Failed to fetch feed: ${error}`);
  }
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    await delay();
    return mockPosts.find((p) => p.id === id) ?? null;
  } catch (error) {
    throw new Error(`Failed to fetch post ${id}: ${error}`);
  }
}