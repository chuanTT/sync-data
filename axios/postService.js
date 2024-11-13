import {
  createCheckAxios,
  deleteCheckAxios,
  getCheckAxios,
} from "./defaultAxios.js";

export const getAllPost = async (isForward) => {
  const path = "post/byboth?page=1&limit=500&includes=group,category,product&getContent=true";
  const result = await getCheckAxios(path, isForward);
  return result?.items;
};

export const removePost = async (id, isForward) => {
  const path = `post/delete/${id}`;
  const data = await deleteCheckAxios(path, isForward);
  return data;
};

export const createPost = async (payload, isForward) => {
  const path = "post/create";
  const result = await createCheckAxios(path, payload, isForward)
  return result
};