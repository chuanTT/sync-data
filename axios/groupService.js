import { createCheckAxios, deleteCheckAxios, getCheckAxios } from "./defaultAxios.js";

export const getAllGroup = async (isForward) => {
  const path = "group/getall";
  const result = await getCheckAxios(path, isForward);
  return result?.items;
};

export const createGroup = async (payload, isForward) => {
  const path = "group/create";
  const result = await createCheckAxios(path, payload, isForward)
  return result
};

export const removeGroup = async (id, isForward) => {
    const path = `group/delete/${id}`;
    const data = await deleteCheckAxios(path, isForward);
    return data;
  };
