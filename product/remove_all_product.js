import { getAllProduct, removeProduct } from "../axios/productService.js";
import { animatedProgressBar } from "../function.js";

const products = await getAllProduct(true);

console.log("Đang thực hiện xóa sản phẩm");
let i = 0;
for (const product of products) {
  await removeProduct(product?.id, true);
  i++;
  animatedProgressBar(i, products);
}
console.log("\n========> Đã xóa toàn bộ sản phẩm <==========");
