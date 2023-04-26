import { getRequest } from "./common.js";

export const getUserRequest = async () => {
  const response = await getRequest(`/user`);
  return response;
};
