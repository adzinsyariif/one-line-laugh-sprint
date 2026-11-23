// One-Line Laugh Sprint — entry "Raccoon With a Mortgage".
// Writes the entry's single line to /output/entry.txt, where the house
// scorer and judge read it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every Sunday I meal-prep like a responsible adult; by Wednesday I'm eating cereal over the sink like a raccoon with a mortgage.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
