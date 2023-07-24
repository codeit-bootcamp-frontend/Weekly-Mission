import instance from "@/api/instance";

const getUser = async (userId: number) => {
  const response = await instance.get(`/users/${userId}`);

  return response.data;
};

export { getUser };
