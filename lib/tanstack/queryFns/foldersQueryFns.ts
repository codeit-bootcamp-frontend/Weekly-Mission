import { instance } from "@/utils/api/instance";

export const getUserQueryFn = async () =>
  instance.get("/users/1").then((res) => res.data.data[0]);
