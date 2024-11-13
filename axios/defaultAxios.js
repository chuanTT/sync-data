import { convertURLToFile } from "../function.js";
import { httpsServerForward } from "./axios.setup.forward.js";
import { httpsServer } from "./axios.setup.js";

export const getCheckAxios = async (path, isForward) => {
  if (isForward) {
    return await httpsServerForward.get(path);
  } else {
    return await httpsServer.get(path);
  }
};

export const deleteCheckAxios = async (path, isForward) => {
  if (isForward) {
    return await httpsServerForward.delete(path);
  } else {
    return await httpsServer.delete(path);
  }
};

export const createCheckAxios = async (path, payload, isForward) => {
  if (isForward) {
    return await httpsServerForward.post(path, payload);
  } else {
    return await httpsServer.post(path, payload);
  }
};

export const createCheckAxiosFormData = async (
  path,
  payload,
  urlFile,
  isForward,
  fileNameUpload = "file"
) => {
  const urlToFile = await convertURLToFile(urlFile);
  const formDT = new FormData();
  Object.keys(payload).forEach((key) => {
    formDT.append(key, payload[key]);
  });
  formDT.append(fileNameUpload, urlToFile?.blob, {
    filename: urlToFile?.fileName,
    contentType: urlToFile.header["Content-Type"],
  });
  const config = {
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=<calculated when request is sent>",
    },
  };
  if (isForward) {
    return await httpsServerForward.post(path, formDT, config);
  } else {
    return await httpsServer.post(path, formDT, config);
  }
};
