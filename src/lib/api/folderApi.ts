import { getRequest } from "./common";

export const getSampleFolder = async () => {
  const response = await getRequest(`/sample/folder`);
  return response;
};
