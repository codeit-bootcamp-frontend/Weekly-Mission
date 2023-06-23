import instance from "./instance";
import { User } from "./types";

const getUser = async (id: number): Promise<User> => {
  const res = await instance.get<never, User[]>(`/users/${id}`);
  if (res.length === 0)
    return Promise.reject(new Error("유저가 존재하지 않습니다."));
  return res[0];
};

export { getUser };
