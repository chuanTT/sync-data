import { createCategory, getAllCategory } from "../axios/categoryService.js";
import { animatedProgressBar } from "../function.js";

const categorys = await getAllCategory();

let i = 0;
console.log("Đang thực hiện đồng bộ danh mục");
for (const category of categorys) {
  const payload = {
    name: category?.name,
  };
  await createCategory(payload, true);
  i += 1;
  animatedProgressBar(i, categorys);
}
console.log("\nĐã đồng bộ hết danh mục");
