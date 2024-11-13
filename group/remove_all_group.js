import { getAllGroup, removeGroup } from "../axios/groupService.js";
import { animatedProgressBar } from "../function.js";

const groups = await getAllGroup(true);

console.log("Đang thực hiện các xóa tính năng");
let i = 0;
for (const group of groups) {
  await removeGroup(group?.id, true);
  i++
  animatedProgressBar(i, groups);
}
console.log("\n========> Đã xóa toàn bộ các tính năng <==========");
