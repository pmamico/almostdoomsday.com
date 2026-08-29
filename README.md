# AlmostDoomsday.com

**How close did we come?**

A visual, interactive site cataloguing the moments humanity came dangerously
close to a nuclear catastrophe.

Live at [almostdoomsday.com](https://almostdoomsday.com).

## Build

```
node build.mjs
```

## Deploy

Pushing to `main` triggers a DigitalOcean App Platform deploy straight from
`site/`, which is committed build output. Run `node build.mjs` before every
push so the deployed HTML matches the data.
