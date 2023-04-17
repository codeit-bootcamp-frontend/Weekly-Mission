import { getRequest } from "./common.js";

export const getFolderRequest = async () => {
  const response = await getRequest(`/folder`);
  return response;
};
