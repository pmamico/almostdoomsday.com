// Builds site/index.html by inlining the curated data and the fonts into
// src/template.html. site/ is the published directory, so nothing but build
// output lives there. No dependencies: `node build.mjs`.
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("./", import.meta.url);
const read = (p) => readFile(new URL(p, root), "utf8");

const [template, events] = await Promise.all([
  read("src/template.html"),
  read("data/close-calls.json")
]);

const parsedEvents = JSON.parse(events);
const ids = new Set();
for (const e of parsedEvents) {
  const i = e.index;
  const sum = i.weapon_readiness + i.decision_proximity + i.information_failure
    + i.escalation_context + i.recovery_fragility;
  if (sum !== i.total) throw new Error(`${e.id}: components sum to ${sum}, total says ${i.total}`);
  // The id is the case's public address (/#<id>), so it must stay readable,
  // unique, and clear of the page's own section anchors.
  if (!/^\d{4}-[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id)) throw new Error(`${e.id}: id must be a lowercase year-first slug`);
  if (ids.has(e.id)) throw new Error(`${e.id}: duplicate id`);
  ids.add(e.id);
}

// IBM Plex, latin subset (SIL OFL 1.1, src/fonts/OFL.txt). Inlined so the page
// makes no third-party request.
const FONTS = [
  ["IBM Plex Mono", 400, "normal", "ibm-plex-mono-400"],
  ["IBM Plex Mono", 500, "normal", "ibm-plex-mono-500"],
  ["IBM Plex Sans Condensed", 400, "normal", "ibm-plex-sans-condensed-400"],
  ["IBM Plex Sans Condensed", 500, "normal", "ibm-plex-sans-condensed-500"],
  ["IBM Plex Sans Condensed", 600, "normal", "ibm-plex-sans-condensed-600"],
  ["IBM Plex Serif", 400, "normal", "ibm-plex-serif-400"],
  ["IBM Plex Serif", 400, "italic", "ibm-plex-serif-400-italic"],
  ["IBM Plex Serif", 500, "normal", "ibm-plex-serif-500"]
];
const fontFaces = (await Promise.all(FONTS.map(async ([family, weight, style, file]) => {
  const data = (await readFile(new URL(`src/fonts/${file}.woff2`, root))).toString("base64");
  return `  @font-face { font-family: "${family}"; font-style: ${style}; font-weight: ${weight}; `
    + `font-display: swap; src: url(data:font/woff2;base64,${data}) format("woff2"); }`;
}))).join("\n");

// Keep the inlined data ASCII, so the page reads the same whatever charset it
// is served or saved with.
const inline = (value) => JSON.stringify(value)
  .replace(/[\u0080-￿]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));

const html = template
  .replace("__FONTS__", () => fontFaces)
  .replace("__EVENTS__", () => inline(parsedEvents))
  .replace("__EVENT_COUNT__", String(parsedEvents.length));

await writeFile(new URL("site/index.html", root), html);
console.log(`built site/index.html — ${parsedEvents.length} events, `
  + `${(html.length / 1024).toFixed(0)} KB`);
