# AlmostDoomsday.com

![tracking-free](https://img.shields.io/badge/tracking-none-brightgreen)
![catastrophes](https://img.shields.io/badge/catastrophes-none-brightgreen)

**How close did we come?**

A visual, interactive site cataloguing the moments humanity came dangerously
close to a nuclear catastrophe.

Live at [almostdoomsday.com](https://almostdoomsday.com).

## Build

```
node build.mjs
```

The build inlines `data/close-calls.json` and the IBM Plex fonts
(`src/fonts/`, SIL Open Font License, see `src/fonts/OFL.txt`) into
`src/template.html`, so the published page makes no third-party requests.

Every case has its own address: `https://almostdoomsday.com/#<id>`, where
`<id>` is the case's id in the data file (e.g. `#1983-petrov`). Opening such a
link shows that case directly, without the interactive story.

## Deploy

Pushing to `main` triggers a DigitalOcean App Platform deploy straight from
`site/`, which is committed build output. Run `node build.mjs` before every
push so the deployed HTML matches the data.

## Support

**Supporters**

| Who | Amount |
| --- | ---: |
| The author | €50 |

This is an independent, one-person project. So far it has cost about €38 to
build and about €6 a month to keep running. Support goes to keeping the
site online, and buying the time to extend it and build further sourced,
single-topic sites like it. [Support on PayPal](https://paypal.me/pmamico).

## Feedback

Found an error or have a source correction?
[Open an issue](https://github.com/pmamico/almostdoomsday.com/issues).
Issues are also the place to suggest a topic for another site in the same
vein.

Prefer to say it privately? [papp.mico@gmail.com](mailto:papp.mico@gmail.com).
