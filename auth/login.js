import fs from "fs";
import { httpsServer } from "../axios/axios.setup.js";
import { httpsServerForward } from "../axios/axios.setup.forward.js";

const result = await httpsServer.post("auth/login", {
  username: "admin",
  password: "Vitechgroup2023@",
});
const token = result?.token;
fs.writeFileSync("./auth/token.txt", token);

const resultToken = await httpsServerForward.post("auth/login", {
  username: "admin",
  password: "Vitechgroup2023@",
});
const tokenForward = resultToken?.token;
fs.writeFileSync("./auth/token-forward.txt", tokenForward);

console.log("Lấy token thành công");
