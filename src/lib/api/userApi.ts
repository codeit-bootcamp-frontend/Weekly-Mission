import { getRequest } from "./common";

export const getSampleUser = async () => {
  const response = await getRequest(`/sample/user`);
  return response;
};

export const getUserById = async (uid: string) => {
  const response = await getRequest(`/users/${uid}`);
  return response;
};
