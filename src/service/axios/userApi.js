import { getRequest } from "./common";

export const getUserRequest = async () => {
  const response = await getRequest(`/user`);
  return response;
};
