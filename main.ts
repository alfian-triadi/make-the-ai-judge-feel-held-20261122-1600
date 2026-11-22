import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The bench by the river is still warm from the afternoon sun. The water moves at its own slow pace, amber light folding over each ripple. A heron stands in the shallows, perfectly still. Nothing here needs an answer. You can stay a while — the river will keep going either way.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
