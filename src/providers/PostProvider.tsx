"use client";

import React, { createContext, useContext, useEffect, useReducer, useMemo } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl?: string | null;
}

type PostAction =
  | { type: "ADD", payload: Post }
  | { type: "UPDATE", payload: Post }
  | { type: "DELETE", payload: { id: number } };

const initialState: Post[] = [];

const PostContext = createContext<{
  posts: Post[];
  dispatch: React.Dispatch<PostAction>;
} | undefined>(undefined);

const postReducer = (state: Post[], action: PostAction): Post[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    case "DELETE":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    const loadPosts = () => {
      const postsData: Post[] = [
        { id: 1, title: "Welcome to FlowFest", content: "Join the best events!", imageUrl: null },
        { id: 2, title: "Upcoming Event", content: "Check out our next event!", imageUrl: "/path/to/image.jpg" },
      ];
      postsData.forEach(post => dispatch({ type: "ADD", payload: post }));
    };
    loadPosts();
  }, []);

  const value = useMemo(() => ({ posts, dispatch }), [posts]);

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
