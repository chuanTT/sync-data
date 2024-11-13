import { createPost, getAllPost } from "../axios/postService.js";
import {
  animatedProgressBar,
  readSyncCategory,
  readSyncGroup,
  readSyncProduct,
  writeFileSyncPost,
} from "../function.js";

const posts = await getAllPost();
const groupsForward = readSyncGroup();
const productsForward = readSyncProduct(true);
const categorysForward = readSyncCategory(true);

let i = 0;
console.log("Đang thực hiện đồng bộ bài viết");
for (const post of posts) {
  const payload = {
    title: post?.title,
    slug: post?.slug,
    productId: productsForward?.[post?.product?.id],
    categoryId: categorysForward?.[post?.category?.id],
    groupId: groupsForward?.[post?.group?.id],
    basecontent: post?.content?.content,
  };
  await createPost(payload, true);
  i += 1;
  animatedProgressBar(i, posts);
}
console.log("\nĐã đồng bộ hết bài viết");
writeFileSyncPost(posts)
