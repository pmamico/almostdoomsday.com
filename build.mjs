// Builds site/index.html by inlining the curated data files into site/template.html.
// No dependencies: `node build.mjs`.
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("./", import.meta.url);
const read = (p) => readFile(new URL(p, root), "utf8");

const [template, events] = await Promise.all([
  read("site/template.html"),
  read("data/close-calls.json")
]);

const parsedEvents = JSON.parse(events);
for (const e of parsedEvents) {
  const i = e.index;
  const sum = i.weapon_readiness + i.decision_proximity + i.information_failure
    + i.escalation_context + i.recovery_fragility;
  if (sum !== i.total) throw new Error(`${e.id}: components sum to ${sum}, total says ${i.total}`);
}

const html = template.replace("__EVENTS__", () => JSON.stringify(parsedEvents));

await writeFile(new URL("site/index.html", root), html);
console.log(`built site/index.html — ${parsedEvents.length} events, ${(html.length / 1024).toFixed(0)} KB`);
