# AlmostDoomsday.com

Kutatasi es termekterv egy vizualis, interaktiv weboldalhoz, amely azt mutatja be, mikor kerult az emberiseg veszelyesen kozel nuklearis vagy mas civilizacios katasztrofahoz.

A projekt munkaneve es tervezett publikus cime: `AlmostDoomsday.com`.

## Kiindulo cel

Az oldal ne csak felsorolja a nuklearis close callokat, hanem erezhetoen megmutassa, mennyire torokeny rendszerek, felreertett jelek, veletlenek es egyeni dontesek allitottak meg a legrosszabb kimeneteleket.

Fo kerdesek:

- Mikor tortentek a legveszelyesebb close callok?
- Melyik evben mennyire voltunk kozel a "doomsday" allapothoz?
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

Az oldal egyetlen, sajat meroszamot mutat: az **Almost Doomsday Index**et. Ez transzparens,
szerkesztoi pontszam 0-100 kozott az egyedi close callokra, ot kozzetett komponensbol.
Azt mutatja, hogy az adott pillanatban mennyire volt kozel a rendszer a nuklearis
fegyverhasznalathoz, nuklearis detonaciohoz vagy kontrollveszteshez.

A hivatalos Doomsday Clock **szandekosan kimaradt** az oldalrol. Az egy eves, tobb kockazatot
(nuklearis, klima, bio, technologia) osszegzo szakertoi itelet, nem esemenyenkenti meroszam.
Egy lapon mutatva meg kulon charton is azt sugallja, hogy a ketto osszemerheto, es ez rontja
az adat tisztasagat. A Bulletin anyagai forraskent tovabbra is relevansak, de nem az oldal adatai.

Fontos: a sajat index soha ne tunjon hivatalos tudomanyos valoszinusegnek. Minden pontszam
mellett legyen lathato, mi alapjan kapta az erteket.

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
- kategoria- es szoveges szures
- kiemelt esemenykartyak a legmagasabb pontszamokkal
- forrasolt figyelmeztetes: az index szerkesztoi modell, nem hivatalos valoszinuseg

Kezdokepernyo wireframe:

```text
+--------------------------------------------------------------------------------+
| AlmostDoomsday.com                                      Search  Sources  About |
|                                                                                |
| HOW CLOSE DID WE COME?                                                         |
| A visual record of nuclear close calls, false alarms, and decisions that held. |
|                                                                                |
| Search: [__________]  [All] [False alarm] [Broken arrow] [Crisis] [C2]         |
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

### 3. Event Story Page

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

### 4. The Watch (nyitany)

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

## Vizualis irany

- Hangulat: hideg, archivalis, feszult, de nem horror.
- Fo vizualis metaforak: radar sweep, decision clock, command console, declassified document, map trace.
- Szinek: sotet alapszin lehet, de ne legyen egyhangulag fekete/piros; kell neutrals, amber warning, cyan instrumentation, muted off-white text.
- Tipografia: jo olvashatosag, sziklaszilard adatvizualizacio, keves dramatikus display tipografia.
- Mozgas: lassu scanline, timeline reveal, threshold pulse 80% felett; ne legyen zavaros vagy olvashatatlan.

## MVP first version (elkeszult)

Statikus, fuggoseg nelkuli egyoldalas site. Adat -> template -> kesz HTML.

```
data/close-calls.json   26 kuralt close call, komponensenkenti pontszammal es forrasokkal
data/funding.json       PayPal link, elore beirt osszegek, es a roadmap rungok allapottal
site/template.html      markup, stilus, chart, a nyitany allapotgepe (__EVENTS__ placeholder)
build.mjs               beinjektalja az adatot, es ellenorzi hogy a komponensek osszege = total
site/index.html         a build kimenete, ez a publikalt fajl
```

Build: `node build.mjs`. Nincs npm install, nincs dependency.

### A nyitany: The Watch

Az oldal egy leszolgalt ugyelettel indul, nem egy fooldallal. Fuggo ora, Serpukhov-15,
1983. szeptember 25-26.

| Ido | Esemeny | Helyes gomb |
| --- | --- | --- |
| 23:41 | Briefing: hat blokk, karakterenkent gepelve, Enterre lep tovabb | - |
| 23:47 | Vandenberg teszt, elore bejelentve. Muhold jelzi, **radar megerositi** | REPORT |
| 00:04 | Termikus esemeny a Csendes-ocean felett. Muhold jelzi, **radar felveszi** | REPORT |
| 00:15 | Legmagasabb megbizhatosag. **Radar: semmi.** Darabszam 1 -> 5 | - |

A ket bemelegitonel azert helyes a zold gomb, mert ket fuggetlen rendszer egyetert. Ez tanitja
meg a szabalyt. A valodi esemenynel pontosan az hianyzik, amin a szabaly allt: a megerosites.

- A protokoll szerinti gomb vegig ugyanaz, zolden kiemelve, billentyufokusszal, halk pulzalassal.
- A masik gombnak nincs szine, harom surlodasi mondat all alatta, es **nyomva kell tartani 2,5
  masodpercig**, mikozben a becsapodasig hatralevo ido fut. Elengedesre visszaall.
- Nincs idotullepes: az olvasas a lenyeg, ezert megvar.
- Az ora akkor jar, amikor a szekvencia mozog; megall, amikor rad var.
- Minden megallonal Enter (vagy kattintas) leptet. Gepeles kozben egy billentyu
  befejezi az adott blokkot, nem ugorja at.
- REPORT eseten counterfactual eszkalacios szekvencia indul (eszaki polaris radarplot, canvas),
  vegig `COUNTERFACTUAL / THIS DID NOT HAPPEN` savval. Skippelheto.
- Hold eseten a masik ag: lefut a 23 perc, es nem tortenik semmi.
- Mindket ag debriefre fut ki, majd felenged az archivum.

Van `Skip the watch` link, es bongeszonkent egyszer fut le (localStorage). A fejlecben es a lap
aljan van `Replay the watch`. Az archivum vegig a DOM-ban van, JS nelkul is olvashato.

A ket bemelegito esemeny rekonstrukcio, nem dokumentalt incidens - ez az "About the watch"
szekcioban ki van irva, ahogy az is, hogy az eszkalacios szekvencia spekulativ.

### Tamogatas es roadmap

`data/funding.json` tartja a PayPal linket es a rungokat; a `#support` szekcio ebbol rajzolodik.
Statikus oldal, nincs backend, es a PayPal nem ad publikus egyenleget - ezert nincs "raised X / Y"
sav, ami ket het utan elavulna. Helyette **allapot rungonkent**: `shipped` / `in_progress` /
`not_funded`. Uj rung vagy statuszvaltas egy sor a JSON-ban.

| | Cel | Mit valt ki |
| --- | --- | --- |
| EUR 120 | Fenntartas egy evre | Domain + szerver. Semmi uj, csak online marad. |
| EUR 350 | Scenario engine + 2 uj ugyelet | A watch most a kodba van drotozva. Ez adatvezerelte teszi, utana B-59 es a norveg raketa. |
| EUR 800 | Minden esemenynek teljes sztorija | A 21 draft kidolgozasa, plusz masodik kutatasi passz a vitatott eseteken. |
| EUR 2000 | Masodik domain a nuklearis mellett | Egy uj kockazati terulet, sajat indexszel, 20-30 forrasolt esettel. |

A `#support` szekcio a Sources utan van, kozvetlenul a footer elott - miutan a latogato latta a
metodologiat, a bizonytalansagi jegyzeteket es a forrasokat. **Sehol maskor**, es kulonosen nem
az ugyeletben: aki epp vegignezte a szimulalt atomhaborut, annak nem lehet a kovetkezo kepernyon
adomanygombot mutatni.

Keretezes: nem elorendeles. A szoveg kimondja, hogy ez egy sorrend, amit tamogatas eseten
megepitek, nem szallitasi igeret, es hogy nincs ellenszolgaltatas es nem adolevonhato.

### Domain bovites: nyitott dontes

A EUR 2000-es rung **megtortent incidenseket** feltetelez (autonom rendszerek, biosafety,
kritikus infrastruktura), nem spekulativ jovoket. Ok: az oldal hitele azon all, hogy ezek
megtortentek es itt vannak a dokumentumok; egy spekulativ szal ugyanazon a skalan pont azt a
tisztasagot rontana, amiert a Doomsday Clock kikerult. Ha megis kell spekulativ tartalom, az
lathatoan kulon szekcio legyen, indexpontszam nelkul. Ez a rung szovege a JSON-ban, egy sor.

### Szandekos dontesek

- A hivatalos Doomsday Clock nincs az oldalon. Lasd a Termekelv szakaszt.
- Az index sulyozasa miatt egy bekebeli fegyverbaleset (Goldsboro) nem erhet el olyan magas
  pontszamot, mint egy valsagesemeny. Ez a metodologia oldalon nyiltan ki van irva.
- Az 5 pilot esemenynek van teljes sztorija es perces bontasa, a tobbi `draft` jelolest kap.
- UI nyelve angol, a domain es a tema miatt.
- A negy ertelmezesi sav egy helyen van definialva (`BANDS` a template-ben). Ebbol jon a chart
  savozasa, a chart alatti jelmagyarazat, a ledger pontszamszinei es a metodologia tablazat is -
  nem lehet ket helyen elcsuszni.
- A szekciocimek alol kikerult minden onmagyarazo alcim. Ha egy sor csak azt mondja el, amit az
  olvaso amugy is lat, akkor a szekciot magyarazza a szekcio helyett.

Kovetkezo lepes ehhez: kulon event URL-ek, terkepes nezet, tobb kidolgozott story, OG kepek.

## MVP scope

1. Statikus, gyors weboldal `AlmostDoomsday.com` branddel.
2. Kuralt close-call adatfajl 20-30 esemenybol.
3. Home oldal interaktiv timeline charttal.
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
- A sajat index skala legyen-e 0-100 vagy "seconds from midnight" analogia? Eldontve: 0-100, mert atlathatobb es nem keverheto ossze semmilyen hivatalos meroszammal.
- Mennyi dramatizalas fer bele a scenario playerbe? Javaslat: csak ott, ahol a tortenelmi forrasokbol ismert az informacios helyzet.
- Legyen-e politikai/aktualis kockazati tartalom, vagy maradjon torteneti-oktato oldal? MVP-ben erdemes torteneti-oktato fokuszt tartani.

## Kovetkezo lepesek

- A kutatasi listabol strukturalt `data/close-calls.yaml` keszitese.
- Pontozasi metodologia finomitasa 5 pilot esemenyen.
- Frontend stack kivalasztasa es elso prototipus: timeline + event detail.
