import { getRequest } from "@/utils/api/common";

export const getUser = async (userId: number) => {
  const response = await getRequest(`/users/${userId}`);
  return response.data[0];
};
