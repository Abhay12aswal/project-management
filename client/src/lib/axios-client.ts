import { CustomError } from "@/types/custom-error.type";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const options = {
  baseURL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const response = error?.response;

    if (response?.data === "Unauthorized" && response.status === 401) {
      window.location.href = "/";
    }

    const customError: CustomError = {
      ...error,
      errorCode: response?.data?.errorCode || "UNKNOWN_ERROR",
      message: response?.data?.message || error.message || "Unknown error",
    };

    return Promise.reject(customError);
  }
);

export default API;
