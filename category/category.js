import { createCategory, getAllCategory } from "../axios/categoryService.js";
import { animatedProgressBar, syncFileDataCategory, writeFileSyncCategory } from "../function.js";
import fs from "fs";

const categorys = await getAllCategory();

let i = 0;
console.log("Đang thực hiện đồng bộ danh mục");
for (const category of categorys) {
  const payload = {
    name: category?.name,
  };
  const result = await createCategory(payload, true);
  syncFileDataCategory(category?.id, result?.id);
  i += 1;
  animatedProgressBar(i, categorys);
}
console.log("\nĐã đồng bộ hết danh mục");
writeFileSyncCategory(categorys)
