import { createGroup, getAllGroup } from "../axios/groupService.js";
import { animatedProgressBar } from "../function.js";

const groups = await getAllGroup();

let i = 0;
console.log("Đang thực hiện các tính năng");
for (const group of groups) {
  const payload = {
    name: group?.name,
  };
  await createGroup(payload, true);
  i += 1;
  animatedProgressBar(i, groups);
}
console.log("\nĐã đồng bộ hết tính năng");
