export interface ILink {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number | null;
}

export interface IFolder {
  id: number;
  created_at?: string;
  name: string;
  user_id?: number;
}
