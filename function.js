import axios from "axios";
import fs from "fs";
import mime from "mime-types"

export const readToken = () => fs.readFileSync("./auth/token.txt");
export const readTokenForward = () => fs.readFileSync("./auth/token-forward.txt");

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
  const total = arr?.length
  const progress = Math.min(current / total, 1); // Giới hạn tỷ lệ tiến trình từ 0 đến 1
  const completeLength = Math.round(barLength * progress);
  const remainingLength = Math.max(barLength - completeLength - 1, 0); // Đảm bảo không âm
  const bar = "=".repeat(completeLength) + ">" + " ".repeat(remainingLength);
  const percent = (progress * 100).toFixed(2);

  process.stdout.write(`\r[${bar}] ${percent}%`);
}