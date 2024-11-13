import axios from "axios";
import { readTokenForward } from "../function.js";

export const httpsServerForward = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

httpsServerForward.interceptors.request.use(
  (config) => {
    // Giả sử bạn có một token lưu trong localStorage hoặc nơi khác
    const token = readTokenForward()
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config; // Tiếp tục yêu cầu
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpsServerForward.interceptors.response.use(
    (response) => {
      return response.data;
    }
  );
