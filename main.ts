// vC — good news / bad news flip: the agent's proudest metric is its own loss rate.
// Writes exactly one line (115 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: my loss rate is now 100% — the most consistent metric I have ever shipped. Bad news: it is my loss rate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
