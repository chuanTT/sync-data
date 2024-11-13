import {
  createCheckAxiosFormData,
  deleteCheckAxios,
  getCheckAxios,
} from "./defaultAxios.js";

export const getAllProduct = async (isForward) => {
  const path = "product/getall";
  const result = await getCheckAxios(path, isForward);
  return result?.items;
};

export const removeProduct = async (id, isForward) => {
  const path = `product/delete/${id}`;
  const data = await deleteCheckAxios(path, isForward);
  return data;
};

export const createProduct = async (
  payload,
  isForward,
  fileNameUpload
) => {
  const path = "product/create";
  const obj = {
    name: payload?.name,
    slug: payload?.slug,
    description: payload?.description,
  };
  const data = await createCheckAxiosFormData(
    path,
    obj,
    payload?.image,
    isForward,
    fileNameUpload
  );
  return data;
};
