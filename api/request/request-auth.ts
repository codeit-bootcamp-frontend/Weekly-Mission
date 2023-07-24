import instance from "@/api/instance";

const refreshToken = async (refreshToken: string) => {
  const respone = await instance.post("/refresh-token", { "refresh-token": refreshToken });

  return respone.data;
};

const signIn = async (email: string, password: string) => {
  const response = await instance.post("/sign-in", { email, password });

  return response.data;
};

const signUp = async (email: string, password: string) => {
  const response = await instance.post("/sign-up", { email, password });

  return response.data; // accessToken, refreshToken
};

export { refreshToken, signIn, signUp };
