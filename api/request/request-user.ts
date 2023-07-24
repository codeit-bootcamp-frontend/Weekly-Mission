import instance from "@/api/instance";

const checkExistEmail = async (email: string) => {
  try {
    const response = await instance.post("/check-email", { email });

    return response;
  } catch (error) {
    alert("중복되는 이메일입니다.");
  }
};

const getUser = async (userId: number) => {
  const response = await instance.get(`/users/${userId}`);

  return response.data.data;
};

export { checkExistEmail, getUser };
