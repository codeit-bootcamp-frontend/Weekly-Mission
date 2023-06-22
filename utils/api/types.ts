import {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface SelectedFolder {
  id: number;
  name: string;
}

export interface Folder extends SelectedFolder {
  created_at: string;
  user_id: number;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomResponseFormat<T = any> = {
  data: T;
};

export interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
}
