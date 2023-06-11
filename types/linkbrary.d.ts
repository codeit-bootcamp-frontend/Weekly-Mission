export interface ILink {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface IFolder {
  id: number;
  created_at?: string;
  name: string;
  user_id?: number;
}
