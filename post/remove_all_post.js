import { getAllPost, removePost } from "../axios/postService.js";
import { animatedProgressBar } from "../function.js";

const posts = await getAllPost(true);

console.log("Đang thực hiện xóa bài viết");
let i = 0;
for (const post of posts) {
  await removePost(post?.id, true);
  i++;
  animatedProgressBar(i, posts);
}
console.log("\n========> Đã xóa toàn bộ bài viết <==========");
