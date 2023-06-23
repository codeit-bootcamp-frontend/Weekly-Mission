/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonResponse } from "@/types/linkbrary";
import { InternalAxiosRequestConfig } from "axios";

import { instance } from "./instance";

/* get 요청 */
export const getRequest = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await instance.get<CommonResponse<T>>(url, config);
  return response.data.data;
};

/* post 요청 */
export const postRequest = async <T>(
  url: string,
  data: any,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await instance.post<CommonResponse<T>>(url, data, config);
  return response.data.data;
};

/* delete 요청 */
export const deleteRequest = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig
): Promise<CommonResponse<T>> => {
  const response = await instance.delete<CommonResponse<T>>(url, config);
  return response;
};

/* put 요청 */
export const putRequest = async <T>(
  url: string,
  data: any,
  config?: InternalAxiosRequestConfig
): Promise<CommonResponse<T>> => {
  const response = await instance.put<CommonResponse<T>>(url, data, config);
  return response;
};

/* patch 요청 */
export const patchRequest = async <T>(
  url: string,
  data: any,
  config?: InternalAxiosRequestConfig
): Promise<CommonResponse<T>> => {
  const response = await instance.put<CommonResponse<T>>(url, data, config);
  return response;
};
