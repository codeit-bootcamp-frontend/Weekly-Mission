import { getRequest } from "./common";

export const getFolderRequest = async () => {
  const response = await getRequest(`/folder`);
  return response;
};
