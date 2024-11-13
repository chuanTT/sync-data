import { getAllCategory, removeCategory } from "../axios/categoryService.js";
import { animatedProgressBar } from "../function.js";

const groups = await getAllCategory(true);

console.log("Đang thực hiện xóa các danh mục");
let i = 0;
for (const group of groups) {
  await removeCategory(group?.id, true);
  i++
  animatedProgressBar(i, groups);
}
console.log("\n========> Đã xóa toàn bộ các danh mục <==========");
