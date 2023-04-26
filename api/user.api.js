import { BASE_URL } from "./common.js";

const userUrl = BASE_URL + "/api/sample/user";

export async function fetchUserData() {
  const response = await fetch(userUrl);
  const { data } = await response.json();
  return data;
}
