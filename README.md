# AlmostDoomsday.com

Kutatasi es termekterv egy vizualis, interaktiv weboldalhoz, amely azt mutatja be, mikor kerult az emberiseg veszelyesen kozel nuklearis vagy mas civilizacios katasztrofahoz.

A projekt munkaneve es tervezett publikus cime: `AlmostDoomsday.com`.

## Kiindulo cel

Az oldal ne csak felsorolja a nuklearis close callokat, hanem erezhetoen megmutassa, mennyire torokeny rendszerek, felreertett jelek, veletlenek es egyeni dontesek allitottak meg a legrosszabb kimeneteleket.

Fo kerdesek:

- Mikor tortentek a legveszelyesebb close callok?
- Melyik evben mennyire voltunk kozel a "doomsday" allapothoz?
- Hogyan viszonyulnak az egyedi incidensek a hivatalos Doomsday Clock allasaihoz?
- Pontosan min mult egy-egy esemeny: emberi itelet, technikai redundancia, szerencse, kommunikacio vagy politikai onmerseklet?
- Hogyan lehet ezt latvanyosan, de forrasoltan es felelosen megmutatni?

## Tartalmi alapanyag

- [Nuclear close calls kutatasi lista](research/nuclear-close-calls.md)
- Kiemelt kulso forrasok:
  - [Bulletin of the Atomic Scientists - Doomsday Clock](https://thebulletin.org/doomsday-clock/)
  - [Bulletin of the Atomic Scientists - Doomsday Clock Timeline](https://thebulletin.org/doomsday-clock/timeline/)
  - [Bulletin of the Atomic Scientists - 2026 press release: 85 seconds to midnight](https://thebulletin.org/2026/01/press-release-it-is-85-seconds-to-midnight/)
  - [Chatham House - Too Close for Comfort](https://www.chathamhouse.org/2014/04/too-close-comfort-cases-near-nuclear-use-and-options-policy)
  - [National Security Archive - B-59 and the underwater Cuban Missile Crisis](https://nsarchive.gwu.edu/briefing-book/russia-programs/2022-10-03/soviet-submarines-nuclear-torpedoes-cuban-missile-crisis)
  - [National Security Archive - 1979-1980 false warnings](https://nsarchive.gwu.edu/briefing-book/nuclear-vault/2020-03-16/false-warnings-soviet-missile-attacks-during-1979-80-led-alert-actions-us-strategic-forces)
  - [PBS/NOVA - False Alarms on the Nuclear Front](https://www.pbs.org/wgbh/nova/missileers/falsealarms.html)
  - [Union of Concerned Scientists - Close Calls with Nuclear Weapons](https://www.ucs.org/resources/close-calls-nuclear-weapons)

## Termekelv

Az oldal ket kulon gorbet mutasson:

- **Official Doomsday Clock**: a Bulletin of the Atomic Scientists hivatalos allasai. Ez nem esemenyenkenti kockazati meroszam, hanem eves/torteneti szakertoi jelzes. A 2026-01-27-i hivatalos allas 85 masodperc ejfeltol, a Clock tortenetenek eddigi legkozelebbi pontja.
- **Almost Doomsday Index**: sajat, transzparens, szerkesztoi pontszam 0-100 kozott az egyedi close callokra. Ez azt mutatja, hogy az adott pillanatban mennyire volt kozel a rendszer a nuklearis fegyverhasznalathoz, nuklearis detonaciohoz vagy kontrollveszteshez.

Fontos: a sajat index soha ne tunjon hivatalos tudomanyos valoszinusegnek. Minden pontszam mellett legyen lathato, mi alapjan kapta az erteket.

## Almost Doomsday Index javaslat

A 0-100 pontszam komponensei:

| Komponens | Suly | Kerdes |
| --- | ---: | --- |
| Weapon readiness | 25 | Volt-e eles nuklearis fegyver, robbanofej, inditasi kepesseg vagy nuklearis torpedo kozvetlenul erintett? |
| Decision proximity | 25 | Hany emberi vagy technikai dontesi lepes maradt a fegyverhasznalatig vagy detonacioig? |
| Information failure | 20 | Szenzorhiba, hamis riasztas, kommunikacios kieses vagy teves helyzetkep vitte-e kozelebb a rendszert a rossz donteshez? |
| Escalation context | 20 | Valsag, haboru, hadgyakorlat vagy politikai feszultseg novelte-e az eszkalacio eselyet? |
| Recovery fragility | 10 | Egyetlen ember, egyetlen eszkoz vagy szerencses korulmeny allitotta-e meg a folyamatot? |

Pelda interpretacio:

- 0-30: sulyos nuklearis biztonsagi incidens, de nem kozvetlen civilizacios kockazat.
- 31-60: komoly close call, tobb vedelmi reteg mukodott vagy a fegyverhasznalat meg tavoli volt.
- 61-85: kritikus close call, hibas dontes vagy egyetlen kihagyott ellenorzes nagyon sulyos kovetkezmenyhez vezethetett volna.
- 86-100: extrem kozel; nuklearis fegyverhasznalat vagy nagy hozamu detonacio nagyon keves dontesi/technikai lepesen mult.

MVP-ben a pontszam lehet kezzel kuralt, de minden esemeny oldalan ki kell irni a komponensenkenti bontast.

## Fo oldalak es szakaszok

### 1. Home / Overview

Cel: azonnal ertheto legyen, mirol szol az oldal, es legyen egy eros vizualis elmeny.

Tartalom:

- cim: `AlmostDoomsday.com`
- rovid alcim: "How close did we come?"
- interaktiv timeline-grafikon 1945-tol napjainkig
- ket kapcsolhato adatsor:
  - Almost Doomsday Index
  - Official Doomsday Clock
- kiemelt esemenykartyak a legmagasabb pontszamokkal
- forrasolt figyelmeztetes: az index szerkesztoi modell, a Clock hivatalos Bulletin adat

Kezdokepernyo wireframe:

```text
+--------------------------------------------------------------------------------+
| AlmostDoomsday.com                                      Search  Sources  About |
|                                                                                |
| HOW CLOSE DID WE COME?                                                         |
| A visual record of nuclear close calls, false alarms, and decisions that held. |
|                                                                                |
| [ Almost Doomsday Index ] [ Official Doomsday Clock ] [ Both ]                 |
|                                                                                |
| 100% |                                      * B-59                              |
|  90% |                         * Goldsboro        * Petrov  * Able Archer      |
|  80% |                 * Thule moonrise                                      * |
|  70% |       * Mars Bluff                                                     |
|      +------------------------------------------------------------------------ |
|       1945      1960        1975        1990        2005        2020     2026 |
|                                                                                |
| Selected: 1962-10-27 / B-59 Arkhipov                                           |
| [Open event] [Play scenario] [Show sources]                                    |
+--------------------------------------------------------------------------------+
```

### 2. Timeline Explorer

Cel: a latogato szurhesse, nagyithassa es osszevesse az esemenyeket.

Funkciok:

- zoomolhato idotengely evtizedekre es konkret valsagokra
- kategoriak kapcsolasa: false alarm, broken arrow, crisis escalation, command control, public warning
- pontokra kattintva gyors osszefoglalo panel
- "why this score?" resz komponensenkenti bontassal
- overlay: hivatalos Doomsday Clock allasok
- event density heatmap, amely megmutatja, mely idoszakokban surusodtek az esetek

Wireframe:

```text
+--------------------------------------------------------------------------------+
| Timeline Explorer                                                              |
| [1945 - 2026 slider]     Category: [x] False alarm [x] Broken arrow [x] Crisis |
|                                                                                |
| 100% |                              o                                          |
|  90% |                  o                 o       o                            |
|  80% |        o                         / \                                   |
|  70% |   o        o--------------------/   \------o                            |
|  60% |                                                                        |
|      +------------------------------------------------------------------------ |
|       1950          1962           1983           1995           2018    2026 |
|                                                                                |
| +-------------------------------+  +-----------------------------------------+ |
| | Selected event                |  | Score breakdown                         | |
| | B-59 Arkhipov                 |  | Weapon readiness       25/25            | |
| | Cuba, 1962-10-27              |  | Decision proximity     24/25            | |
| | Index: 96 / 100               |  | Information failure    18/20            | |
| | [Read one-page story]         |  | Escalation context     20/20            | |
| +-------------------------------+  +-----------------------------------------+ |
+--------------------------------------------------------------------------------+
```

### 3. Official Doomsday Clock

Cel: kulon, tisztan hivatalos adatforrasbol mutatni a Doomsday Clock tortenetet.

Tartalom:

- Bulletin timeline 1947-tol
- perc/masodperc ejfeltol forma
- atvaltott normalizalt skala, csak vizualis osszehasonlitashoz
- event overlay: mely close callok estek egy adott Clock-beallitas kornyeken
- kulon jelzes, hogy a Clock 2007 ota mar klimakockazatot is figyelembe vesz, nem csak nuklearis veszelyt

Wireframe:

```text
+--------------------------------------------------------------------------------+
| Official Doomsday Clock                                                        |
| Source: Bulletin of the Atomic Scientists                                      |
|                                                                                |
| Current official setting: 85 seconds to midnight (2026-01-27)                  |
|                                                                                |
| Minutes/seconds to midnight                                                    |
| 17m |        highest safety margin                                             |
| 10m |                    ______                                                |
|  5m |   ____          __/      \__                                             |
|  2m |__/    \________/           \____ 90s 89s 85s                             |
|  0m +------------------------------------------------------------------------ |
|      1947 1953 1963 1984 1991 2007 2018 2020 2023 2025 2026                  |
|                                                                                |
| [Show as minutes] [Show as risk-normalized] [Show statements]                  |
+--------------------------------------------------------------------------------+
```

### 4. Event Story Page

Cel: minden esemeny egyetlen, atlathato oldalon elferjen, de legyen eleg mely ahhoz, hogy latszodjon: pontosan min mult.

Struktura:

- cim, datum, helyszin, kategoriak
- 2-3 mondatos osszefoglalo
- "What almost happened?" blokk
- "What stopped it?" blokk
- "How close?" komponensenkenti index
- "Timeline of minutes/hours" mini idosor
- "Known uncertainty" resz vitatott vagy hianyos forrasokhoz
- forrasok linkelve, minosegjelolessel

Wireframe:

```text
+--------------------------------------------------------------------------------+
| B-59 Arkhipov                                               Index 96 / 100     |
| 1962-10-27 - Cuban Missile Crisis - submarine nuclear torpedo                  |
|                                                                                |
| +----------------------------+  +--------------------------------------------+ |
| | What almost happened       |  | How close                                  | |
| | A Soviet submarine crew... |  | [################### ] Weapon readiness    | |
| |                            |  | [##################  ] Decision proximity  | |
| | What stopped it            |  | [###############     ] Information failure | |
| | Arkhipov withheld consent. |  | [####################] Escalation context  | |
| +----------------------------+  +--------------------------------------------+ |
|                                                                                |
| Minute-by-minute                                                               |
| 14:00 US ships signal | 16:00 submarine stress | decision point | surfaced     |
|                                                                                |
| [Play scenario] [Compare to Petrov] [Sources]                                  |
+--------------------------------------------------------------------------------+
```

### 5. Scenario Player

Cel: dramatizalt, de felelos modon megmutatni, milyen dontesi helyzetekben kellett cselekedni.

Keretes szabalyok:

- ne legyen jatekositott "nyeremeny" vagy vicces apokalipszis
- minden dontesi pontnal legyen ismert informacio es hianyzo informacio
- a latogato donthet, de a tortenelmi valosag mindig egyertelmuen jelolve legyen
- a "push the button" jellegu interakcio csak oktatasi kontextusban jelenjen meg, explicit moralis es tortenelmi kerettel
- scenario vegen legyen debrief: mi volt valos, mi volt dramatizalt, mely forrasok alapjan

Wireframe:

```text
+--------------------------------------------------------------------------------+
| Scenario: Stanislav Petrov, 1983                                               |
|                                                                                |
| Incoming signal: 5 missiles detected                                           |
| Confirming radar: no confirmation yet                                          |
| Time pressure: high                                                            |
| Protocol pressure: report as attack                                            |
|                                                                                |
| +-------------------------+   +-------------------------+                      |
| | Report attack           |   | Classify as false alarm |                      |
| | follows protocol        |   | relies on judgement     |                      |
| +-------------------------+   +-------------------------+                      |
|                                                                                |
| Historical outcome: Petrov judged it a false alarm.                            |
| [Debrief] [Sources]                                                            |
+--------------------------------------------------------------------------------+
```

## Informacios architektura

```text
/
  Home overview
/timeline
  Interactive close-call and Clock explorer
/clock
  Official Doomsday Clock history
/events
  Searchable event index
/events/:eventId
  One-page story per event
/scenarios/:scenarioId
  Interactive scenario player
/sources
  Source library and methodology
/about
  Editorial method, uncertainty, contact
```

## Adatmodell javaslat

Kesobbi fajl: `data/close-calls.yaml` vagy `data/close-calls.json`.

```yaml
- id: 1962-b59-arkhipov
  title: B-59 Arkhipov
  date_start: 1962-10-27
  date_end: 1962-10-27
  category:
    - crisis_escalation
    - command_control
  location:
    label: Caribbean Sea
    lat: null
    lon: null
  actors:
    - Soviet Navy
    - United States Navy
  index:
    total: 96
    weapon_readiness: 25
    decision_proximity: 24
    information_failure: 18
    escalation_context: 20
    recovery_fragility: 9
  story:
    summary: "A Soviet submarine nearly used a nuclear torpedo during the Cuban Missile Crisis."
    almost_happened: ""
    stopped_by: ""
    uncertainty: ""
  sources:
    - title: National Security Archive - The Underwater Cuban Missile Crisis at 60
      url: https://nsarchive.gwu.edu/briefing-book/russia-programs/2022-10-03/soviet-submarines-nuclear-torpedoes-cuban-missile-crisis
      quality: declassified
```

Kesobbi fajl: `data/doomsday-clock.yaml`.

```yaml
- year: 2026
  date: 2026-01-27
  seconds_to_midnight: 85
  display: "85 seconds to midnight"
  source: https://thebulletin.org/2026/01/press-release-it-is-85-seconds-to-midnight/
  factors:
    - nuclear risk
    - climate change
    - artificial intelligence
    - biosecurity
```

## Vizualis irany

- Hangulat: hideg, archivalis, feszult, de nem horror.
- Fo vizualis metaforak: radar sweep, decision clock, command console, declassified document, map trace.
- Szinek: sotet alapszin lehet, de ne legyen egyhangulag fekete/piros; kell neutrals, amber warning, cyan instrumentation, muted off-white text.
- Tipografia: jo olvashatosag, sziklaszilard adatvizualizacio, keves dramatikus display tipografia.
- Mozgas: lassu scanline, timeline reveal, threshold pulse 80% felett; ne legyen zavaros vagy olvashatatlan.

## MVP scope

1. Statikus, gyors weboldal `AlmostDoomsday.com` branddel.
2. Kuralt close-call adatfajl 20-30 esemenybol.
3. Home oldal interaktiv timeline charttal.
4. Official Doomsday Clock chart Bulletin adatokkal.
5. 5 kidolgozott event story oldal:
   - B-59 Arkhipov, 1962
   - Goldsboro, 1961
   - NORAD training tape, 1979
   - Stanislav Petrov, 1983
   - Norwegian rocket, 1995
6. 1 scenario player prototipus, elso korben Petrov vagy B-59.
7. Sources/methodology oldal.

## Kesobbi extrak

- Osszehasonlito nezet: "show me events like this".
- Terkepes nezet helyszinekkel es sugar/interakcios jelolesekkel.
- Idoszak fokuszok: Cuban Missile Crisis, 1979-1983 false alarms, post-Cold War command-control.
- Shareable event cards Open Graph keppel.
- Hivatkozhato forrasreszletek es archivalis dokumentumkepek.
- "Counterfactual path" scenario agakon: mi tortenhetett volna, de mindig egyertelmuen feltuntetve, hogy spekulativ.

## Nyitott kerdesek

- Magyar, angol vagy ketnyelvu legyen az elso publikus verzio? A domain es nemzetkozi tema miatt az angol UI tunik termeszetesnek.
- A sajat index skala legyen-e 0-100 vagy "seconds from midnight" analogia? A 0-100 atlathatobb es kevesbe keverheto ossze a hivatalos Clockkal.
- Mennyi dramatizalas fer bele a scenario playerbe? Javaslat: csak ott, ahol a tortenelmi forrasokbol ismert az informacios helyzet.
- Legyen-e politikai/aktualis kockazati tartalom, vagy maradjon torteneti-oktato oldal? MVP-ben erdemes torteneti-oktato fokuszt tartani.

## Kovetkezo lepesek

- A kutatasi listabol strukturalt `data/close-calls.yaml` keszitese.
- Doomsday Clock torteneti adatainak kulon, forrasolt adatfajlba vitele.
- Pontozasi metodologia finomitasa 5 pilot esemenyen.
- Frontend stack kivalasztasa es elso prototipus: timeline + event detail.
