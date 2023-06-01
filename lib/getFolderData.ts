export interface IFolder {
  id: number;
  name: string;
  owner: IOwner;
  links: ILink[];
  count: number;
}

export interface IOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface ILink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

const getFolderData = async (): Promise<IFolder> => {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }

  const data = await res.json();
  return data?.data?.folder;
};

export default getFolderData;
