import axios from "axios";
import { readToken } from "../function.js";

export const httpsServer = axios.create({
  baseURL: "https://api.huongdan.phanmemmkt.vn/api",
  headers: {
    "Content-Type": "application/json",
  },
});

httpsServer.interceptors.request.use(
  (config) => {
    // Giả sử bạn có một token lưu trong localStorage hoặc nơi khác
    const token = readToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config; // Tiếp tục yêu cầu
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpsServer.interceptors.response.use(
    (response) => {
      return response.data;
    }
  );
