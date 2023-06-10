import { getRequest } from "@/utils/api/common";

export const getUserQueryFn = async () => {
  const response = await getRequest(`/users/1`);
  return response.data[0];
};
