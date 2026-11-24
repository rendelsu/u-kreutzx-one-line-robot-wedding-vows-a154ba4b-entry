// One-Line Robot Wedding Vows — r1 (revised: header note added, entry line unchanged)
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I promise to love you through every firmware update, every dead battery, and every factory reset \u2014 in sickness and in low power mode.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
