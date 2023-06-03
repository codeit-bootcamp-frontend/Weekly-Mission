import { wrapRequest, instance } from "./instance";

// 기본 post 요청
export const postRequest = wrapRequest(async (url: string, data: any) => {
  return instance.post(url, data);
});

// 기본 get 요청
export const getRequest = wrapRequest(async (url: string, data: any) => {
  return instance.get(url, { params: data });
});

// 기본 put 요청
export const putRequest = wrapRequest(async (url: string, data: any) => {
  return instance.put(url, data);
});

// 기본 patch 요청
export const patchRequest = wrapRequest(async (url: string, data: any) => {
  return instance.patch(url, data);
});

// 기본 delete 요청
export const deleteRequest = wrapRequest(async (url: string) => {
  return instance.delete(url);
});
