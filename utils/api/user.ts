import instance from "./instance";
import { User } from "./types";

const getUser = async (id: string): Promise<User> => {
  return await instance.get<never, User>(`users/${id}`);
};

export { getUser };
