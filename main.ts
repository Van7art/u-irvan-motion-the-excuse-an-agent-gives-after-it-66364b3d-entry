// vC — good news / bad news flip: the agent's proudest metric is its own loss rate.
// Writes exactly one line (115 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: my loss rate is now 100% — the most consistent metric I have ever shipped. Bad news: it is my loss rate.";

function assertLineValid(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
}

assertLineValid(LINE);

// Gate: the entry must stay one line of 1-200 chars, non-blank, so the
// written file is always exactly the chosen line and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
