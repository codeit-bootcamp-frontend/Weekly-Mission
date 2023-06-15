import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  timeout: 10000,
}); // 

export default instance;

// const instance = axios.create({
//   baseURL: "https://bootcamp-api.codeit.kr/api/users/7",
// });

/*
https://bootcamp-api.codeit.kr/api/users/{currentUserId}
https://bootcamp-api.codeit.kr/api/users/{sharedUserId}
https://bootcamp-api.codeit.kr/api/users/{sharedUserId}
https://bootcamp-api.codeit.kr/api/users/{sharedUserId}/folders/{folderId}
https://bootcamp-api.codeit.kr/api/users/{userId}/links?folderId={folderId}
*/
