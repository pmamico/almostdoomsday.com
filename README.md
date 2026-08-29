# AlmostDoomsday.com

**How close did we come?**

A visual, interactive site cataloguing the moments humanity came dangerously
close to a nuclear (or other civilization-scale) catastrophe — false alarms,
broken arrows, and crisis-era close calls, each rated and sourced.

Live at [almostdoomsday.com](https://almostdoomsday.com).

## The Almost Doomsday Index

Instead of reusing the Bulletin of the Atomic Scientists' Doomsday Clock (a
yearly, multi-risk expert judgment), the site scores each individual close
call on its own transparent 0–100 scale, broken into five weighted
components: weapon readiness, decision proximity, information failure,
escalation context, and recovery fragility. Every event page shows the
component breakdown, not just the total, and every claim is sourced.

## The Watch

The site opens with an interactive scenario — Stanislav Petrov's night at
Serpukhov-15, 1983 — before the overview page, putting the visitor into the
decision rather than just describing it. Historical accuracy and known
uncertainty are called out explicitly at the end of each run.

## Project structure

```
data/close-calls.json   Curated close-call events with sourced index scores
data/funding.json       Support section content and roadmap (currently off)
src/template.html       Page markup, styling, chart, and the watch's state machine
build.mjs                Inlines the data into the template — no dependencies
site/index.html          Build output; this is what gets deployed
research/                Background research notes
```

## Build

```
node build.mjs
```

Regenerates `site/index.html` from `src/template.html` and the `data/`
files. No `npm install`, no dependencies — pure Node.

## Deploy

Pushing to `main` triggers a DigitalOcean App Platform deploy straight from
`site/`, which is committed build output. Run `node build.mjs` before every
push so the deployed HTML matches the data.

## Analytics

Self-hosted [GoatCounter](https://www.goatcounter.com/), first-party only,
no cookies, no third-party trackers.

## Stack

Static HTML/CSS/JS, no framework, no build tooling beyond a single Node
script. Hosted on DigitalOcean App Platform behind a CDN.
