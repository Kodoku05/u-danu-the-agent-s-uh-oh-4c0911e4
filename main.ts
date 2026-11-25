import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// bluffing — the agent's one-word confession that it is faking it when lost.
// Funny on its own, machine voice, instant, and fresh: zero field-scan uses.
const entry = 'bluffing';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), entry, 'utf8');
