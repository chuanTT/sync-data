import { createProduct, getAllProduct } from "../axios/productService.js";
import fs from "fs";
import { animatedProgressBar } from "../function.js";

const products = await getAllProduct();
let i = 0;
console.log("Đang thực hiện đồng bộ sản phẩm");
for (const product of products) {
  await createProduct(product, true);
  i++;
  animatedProgressBar(i, products);
}
fs.writeFileSync("./product/product.json", JSON.stringify(products));
console.log("\nĐã đồng bộ thành công và lưu dữ liệu sản phẩm");
