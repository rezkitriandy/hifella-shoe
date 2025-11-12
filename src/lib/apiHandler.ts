import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        `[Axios Error] ${error.response.status}:`,
        error.response.data,
      );
    } else {
      console.error(`[Axios Error]:`, error.message);
    }

    if (error.response?.status === 401) {
      console.warn(
        'Unauthorized — consider redirecting to login or refreshing token',
      );
    }
    return Promise.reject(error);
  },
);

const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
  axiosInstance.get(url, config);

const post = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => axiosInstance.post(url, data, config);

const put = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => axiosInstance.put(url, data, config);

const del = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
  axiosInstance.delete(url, config);

export const apiHandler = {
  get,
  post,
  put,
  delete: del,
};
