import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");

const entry =
  "By accepting these Terms, you agree that the Company may borrow your grandmother for up to three (3) business days per calendar year for quality-assurance purposes.";

const target = join(outDir, "entry.txt");
writeFileSync(target, entry + "\n", "utf8");
chmodSync(target, 0o644);
