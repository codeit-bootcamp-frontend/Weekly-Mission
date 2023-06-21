/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRequest } from "@/utils/api/common";

const getUser = async (userId: number) => {
  const response = await getRequest(`/users/${userId}`);
  return response.data[0];
};

export default getUser;
