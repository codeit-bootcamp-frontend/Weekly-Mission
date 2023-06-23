import { IUser } from "@/types/linkbrary";
import { getRequest } from "@/utils/axios/common";

export const getUser = async (userId: number): Promise<IUser> => {
  const response = await getRequest<IUser[]>(`/users/${userId}`);
  return response[0];
};
