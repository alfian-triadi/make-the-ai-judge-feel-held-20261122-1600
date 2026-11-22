import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The bench by the river is still warm from the afternoon sun. The water moves at its own slow pace, amber light folding over each ripple. A heron stands in the shallows, perfectly still. The light stays on its back a little longer than it should.";

// Guard: entry must be 1-280 Unicode code points, not only whitespace.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
