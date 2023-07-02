import instance from "./instance";
import { User } from "./types";

const getUser = async (id: string): Promise<User> => {
  const res = await instance.get<never, User>(`users/${id}`);
  return res;
};

export { getUser };
