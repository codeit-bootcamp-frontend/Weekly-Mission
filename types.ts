import { ReactNode } from "react";

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
}

export interface Children {
  children: ReactNode;
}

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export interface CardProps {
  link: Link;
  folders?: Folder[];
  onDeleteLink?: (id: number) => number;
  isNotOwn?: boolean;
}
