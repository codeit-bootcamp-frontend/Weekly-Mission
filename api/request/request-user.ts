import instance from "@/api/instance";

export const getUser = async (userId: number) => {
  const response = await instance.get(`/users/${userId}`);
  const { data } = response.data;

  return data;
};
