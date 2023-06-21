import { getRequest } from "@/utils/api/common";

interface IUserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

export const getUser = async (userId: number): Promise<IUserData> => {
  const response = await getRequest(`/users/${userId}`);
  return response.data[0];
};
