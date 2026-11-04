# AlmostDoomsday.com — agent instructions

## Who works on this project
- **This project is worked on with Claude (Claude Code) only. Do not use Codex
  or any other coding agent for it.** When starting an aoe session for this
  repo, pick the `claude` agent.
- The project lives on the `tulipan` machine: `~/repo/almostdoomsday.com`.
  There is no other checked-out copy (the Mac copy was retired on 2026-11-04).

## Build and deploy
- `node build.mjs` inlines `data/close-calls.json` into `src/template.html`
  and writes `site/index.html`. No dependencies.
- Run the build before every commit that touches data or template; `site/` is
  committed build output.
- Pushing to `main` deploys `site/` to DigitalOcean App Platform
  (`.do/app.yaml`). A push to `main` is a production release, so only push
  when the user has approved going live.
- Remote: `git@github.com:pmamico/almostdoomsday.com.git` (public repo).

## Content rules
- Only claims supported by the cited sources go on the site; no invented facts.
- Each case cites its sources; links to external sources (e.g. William
  Alberque's articles) are fine.

## Research material
- The repo is public. Material received from or tied to third parties (e.g.
  William Alberque's sources, downloaded copies of articles/PDFs, OCR output,
  review notes, reply drafts with private e-mail addresses) is kept locally
  under `research/<source>-<date>-*/` and is **gitignored**, never committed.
- Only what appears on the site (data, template, build output) and the
  project's own tooling/docs go into git.
