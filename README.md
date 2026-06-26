# Couchsurfing Social App — Coding Exercise

A simple social webapp built with Next.js.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to the profile page.

## Features

- **Profile page** — displays current user info, stats, and friends list
- **Friends feed** — lists mock posts from friends with like/unlike interaction
- **Post detail** — click any post to see full content and comments
- **Navbar** — active link highlighting, navigates between profile and feed

## Project Structure

```
app/
  profile/          # Profile page (SSR)
  feed/             # Friends feed (SSR)
    [id]/           # Post detail page (SSR)
components/
  nav/              # Navbar (client component)
  profile/          # ProfileCard, FriendList
  feed/             # PostCard, CommentList, LikeButton (client component)
lib/
  api.ts            # Mock API layer with simulated latency and error handling
  mock-data.ts      # Seed data for users, friends, and posts
types/
  index.ts          # TypeScript types for User, Friend, Post, Comment
```

## Data Models

See `types/index.ts` for full type definitions. Key decisions:

- `Friend` extends `User` fields via `Pick<>` and adds `friendSince`
- `Post` uses `Pick<User>` for author to avoid over-fetching
- `Comment` follows the same pattern

## Assumptions & Decisions

- **SSR by default** — all pages fetch data as async server components, matching how a real API would work
- **Mock API abstraction** — `lib/api.ts` mirrors what real API calls would look like, so swapping in a real backend requires only changing that layer
- **Client component where it makes sense** — `LikeButton` uses `useState` for like/unlike interaction; likes are local state only — in a real app this would persist via an API call
- **Scope** — kept deliberately focused per the instructions; no persistence, authentication, or external API calls

## If I Had More Time

- Loading states with `Suspense` and skeleton UI
- Pagination on the feed
- Ability to add comments
- Friend profile pages