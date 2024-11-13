import { removeGroup } from "../axios/groupService.js";
import { animatedProgressBar } from "../function.js";

const products = await getAllProduct(true);

console.log("Đang thực hiện xóa sản phẩm");
let i = 0;
for (const product of products) {
  await removeGroup(product?.id, true);
  i++;
  animatedProgressBar(i, products);
}
console.log("\n========> Đã xóa toàn bộ sản phẩm <==========");
