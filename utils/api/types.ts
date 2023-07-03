export interface SelectedFolder {
  id: string;
  name: string;
}

export interface Folder extends SelectedFolder {
  created_at: string;
  updated_at: string;
  user_id: string;
  link_id: string[];
}

export interface Link {
  id: string;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  user_id: string;
  folder_id: string[];
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image_source: string | null;
  folder_id: string[];
  created_at: string;
}
