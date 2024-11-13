import { createCheckAxios, deleteCheckAxios, getCheckAxios } from "./defaultAxios.js";

export const getAllCategory = async (isForward) => {
  const path = "category/getall";
  const result = await getCheckAxios(path, isForward);
  return result?.items;
};

export const createCategory = async (payload, isForward) => {
  const path = "category/create";
  const result = await createCheckAxios(path, payload, isForward)
  return result
};

export const removeCategory = async (id, isForward) => {
    const path = `category/delete/${id}`;
    const data = await deleteCheckAxios(path, isForward);
    return data;
  };
