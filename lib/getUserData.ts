export interface IUserData {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

const getUserData = async (): Promise<IUserData> => {
  const res = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }
  const data = await res.json();

  return data?.data;
};

export default getUserData;
