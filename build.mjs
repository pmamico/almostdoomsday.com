// Builds site/index.html by inlining the curated data files into src/template.html.
// site/ is the published directory, so nothing but build output lives there.
// No dependencies: `node build.mjs`.
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("./", import.meta.url);
const read = (p) => readFile(new URL(p, root), "utf8");

const [template, events, funding] = await Promise.all([
  read("src/template.html"),
  read("data/close-calls.json"),
  read("data/funding.json")
]);

const parsedEvents = JSON.parse(events);
for (const e of parsedEvents) {
  const i = e.index;
  const sum = i.weapon_readiness + i.decision_proximity + i.information_failure
    + i.escalation_context + i.recovery_fragility;
  if (sum !== i.total) throw new Error(`${e.id}: components sum to ${sum}, total says ${i.total}`);
}

// The page is served without a charset declaration, so keep the inlined data ASCII.
const inline = (value) => JSON.stringify(value)
  .replace(/[\u0080-\uffff]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));

const parsedFunding = JSON.parse(funding);

// The support section is switched on and off from data/funding.json. When it is
// off the markup is dropped here rather than hidden in CSS, so nothing about the
// ask reaches the browser.
const stripSupport = (src) =>
  src.replace(/[ \t]*<!-- support:start -->[\s\S]*?<!-- support:end -->\n?/g, "");

const html = (parsedFunding.enabled === false ? stripSupport(template) : template)
  .replace("__EVENTS__", () => inline(parsedEvents))
  .replace("__FUNDING__", () => inline(parsedFunding));

await writeFile(new URL("site/index.html", root), html);
console.log(`built site/index.html \u2014 ${parsedEvents.length} events, `
  + `support ${parsedFunding.enabled === false ? "off" : "on"}, `
  + `${(html.length / 1024).toFixed(0)} KB`);
