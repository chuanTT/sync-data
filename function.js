import axios from "axios";
import fs from "fs";
import mime from "mime-types";

export const readToken = () => fs.readFileSync("./auth/token.txt");
export const readTokenForward = () =>
  fs.readFileSync("./auth/token-forward.txt");

export const convertURLToFile = async (url) => {
  const blobFile = await axios.get(url, {
    responseType: "arraybuffer",
  });
  const now = Date.now();
  const type = mime.extension(blobFile?.headers?.getContentType());
  const blob = new Blob([blobFile.data], {
    type: blobFile?.headers?.getContentType(),
  });

  return {
    blob,
    fileName: `${now}.${type}`,
    header: blobFile.headers,
  };
};

export function animatedProgressBar(current, arr, barLength = 40) {
  const total = arr?.length;
  const progress = Math.min(current / total, 1); // Giới hạn tỷ lệ tiến trình từ 0 đến 1
  const completeLength = Math.round(barLength * progress);
  const remainingLength = Math.max(barLength - completeLength - 1, 0); // Đảm bảo không âm
  const bar = "=".repeat(completeLength) + ">" + " ".repeat(remainingLength);
  const percent = (progress * 100).toFixed(2);

  process.stdout.write(`\r[${bar}] ${percent}%`);
}

export const syncFileData = (path, key, value) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify({}));
  }
  const result = JSON.parse(fs.readFileSync(path, "utf8"));
  const newResult = { ...result, [key]: value };
  fs.writeFileSync(path, JSON.stringify(newResult, null, 2));
};

export const pathSyncGroup = "./group/json/sync.json";
export const pathSyncProduct = "./product/json/sync.json";
export const pathSyncCategory = "./category/json/sync.json";

export const readSyncGroup = () => JSON.parse(fs.readFileSync(pathSyncGroup, "utf8"));
export const readSyncProduct = () => JSON.parse(fs.readFileSync(pathSyncProduct, "utf8"));
export const readSyncCategory = () => JSON.parse(fs.readFileSync(pathSyncCategory, "utf8"));

export const syncFileDataGroup = (key, value) =>
  syncFileData(pathSyncGroup, key, value);
export const syncFileDataProduct = (key, value) =>
  syncFileData(pathSyncProduct, key, value);
export const syncFileDataCategory = (key, value) =>
  syncFileData(pathSyncCategory, key, value);

const pathDataProduct = "./product/json/product.json";
const pathDataCategory = "./category/json/category.json";
const pathDataGroup = "./group/json/group.json";
const pathDataPost = "./post/json/post.json";

export const writeFileSyncProduct = (payload) =>
  fs.writeFileSync(pathDataProduct, JSON.stringify(payload));

export const writeFileSyncCategory = (payload) =>
  fs.writeFileSync(pathDataCategory, JSON.stringify(payload));

export const writeFileSyncGroup = (payload) =>
  fs.writeFileSync(pathDataGroup, JSON.stringify(payload));

export const writeFileSyncPost = (payload) =>
  fs.writeFileSync(pathDataPost, JSON.stringify(payload));

export const readSyncDataPost = () => JSON.parse(fs.readFileSync(pathDataPost, "utf8"));
