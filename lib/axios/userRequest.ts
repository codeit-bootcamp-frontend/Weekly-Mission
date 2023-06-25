import { getRequest } from "@/lib/axios/common";
import { IUser } from "@/types/linkbrary";

export const getUser = async (userId: number): Promise<IUser> => {
  const response = await getRequest<IUser[]>(`/users/${userId}`);
  return response[0];
};
