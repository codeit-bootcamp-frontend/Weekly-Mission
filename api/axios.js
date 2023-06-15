import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
});

async function getUser(USERID) {
  try {
    const response = await instance.get(`/users/${USERID}`);
    const { data } = response.data;
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

export { getUser };
/*
https://bootcamp-api.codeit.kr/api/users/{currentUserId}
https://bootcamp-api.codeit.kr/api/users/{sharedUserId}
https://bootcamp-api.codeit.kr/api/users/{sharedUserId}/folders/{folderId}
https://bootcamp-api.codeit.kr/api/users/{userId}/links?folderId={folderId}
*/
