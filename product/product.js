import { createProduct, getAllProduct } from "../axios/productService.js";
import { animatedProgressBar, syncFileDataProduct, writeFileSyncProduct } from "../function.js";

const products = await getAllProduct();
let i = 0;
console.log("Đang thực hiện đồng bộ sản phẩm");
for (const product of products) {
  const result = await createProduct(product, true);
  syncFileDataProduct(product?.id, result?.id);
  i++;
  animatedProgressBar(i, products);
}
writeFileSyncProduct(products)
console.log("\nĐã đồng bộ hết sản phẩm");
