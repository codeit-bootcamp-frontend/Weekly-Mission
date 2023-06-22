export interface IFolderData {
  id: number;
  name: string;
  owner: IOwnerData;
  links: ILinkData[];
  count: number;
}

export interface IOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface ILinkData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

const getFolderData = async (): Promise<IFolderData> => {
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
