# Site Content — Proofing Document

This document contains the **visible prose** of shawnklewis.com, in page order.
Edit the wording directly under each `[ID]`. When you're done, hand it back and
each changed block will be re‑applied **verbatim** to the exact source location
listed in its `Source:` line.

## How to use this

- Edit only the text inside the `> quoted block`. Leave the `[ID]` and
  `Source:` lines unchanged — they're the mapping back to source.
- Emphasis markers reflect on‑site styling. Keep them unless you want the
  emphasis itself changed:
  - `**bold**` = bold on the site (`<strong>`)
  - `_italic_` = serif‑italic accent (the site's signature accent style)
  - `` `code` `` = monospace/code styling
  - `[text](url)` = a link; edit the visible `text`, flag the URL separately
- `{like_this}` marks dynamic values injected at runtime (clock, year,
  derived domain) — not editable text, shown for context only.
- If you want to change structure (split/merge/reorder), just note it in plain
  language near the block; I'll handle it.

**Excluded by request** (visible-prose-only scope): image alt text &
aria‑labels (screen‑reader only, not visible), the scrolling tech ticker,
the Skills list names, KBlazor demo invoice data, the FlexTable code snippet,
project tech‑stack chips, and the live clock/theme‑toggle glyphs. Navigation
labels and contact handles are in an optional appendix at the end. Say the
word if you want any of these pulled into the main proof.

---

## Global

### [SITE-ROLE]
`Source:` data.jsx › SITE.role (shown in the top‑nav, beside "SKL /")
> Augmented Software Engineer · Systems Architect

### [SITE-LOCATION]
`Source:` data.jsx › SITE.location (footer mark + footer bottom bar)
> Port of Spain, Trinidad & Tobago

---

## Hero (top of page)

### [HERO-PILL]
`Source:` data.jsx › HERO.pills[0].label (status pill, top‑left of hero)
> Available for engagements

### [HERO-PILL-2]
`Source:` app.jsx › Hero (hard‑coded second pill; `{time}` is the live clock)
> Port of Spain · {time} AST

### [HERO-TITLE]
`Source:` data.jsx › HERO.title (the big headline; "for the" is serif accent,
"real world." is outline/stroke style)
> Software _for the_ real world.

### [HERO-TAG]
`Source:` data.jsx › HERO.tag
> I'm an augmented software engineer and systems architect based in Trinidad. I build **both sides of the fiber optic** — the .NET applications that run the business and the embedded systems that run the machines.

### [HERO-META]
`Source:` data.jsx › HERO.meta (the 4 label/value rows on the hero card)
> - ROLE — Engineer · Architect
> - BASE — Port of Spain, T&T
> - SINCE — 2003 · MS stack
> - AVAIL — Selected · Q3 2026

### [HERO-CTA-1]
`Source:` app.jsx › Hero (primary button)
> View projects

### [HERO-CTA-2]
`Source:` app.jsx › Hero (secondary button)
> Get in touch

---

## Augmented software engineering (band under hero)

### [AUG-LABEL]
`Source:` data.jsx › AUGMENTED.label (eyebrow)
> Augmented software engineering · In practice

### [AUG-BODY]
`Source:` data.jsx › AUGMENTED.body
> Augmented software engineering is engineering with AI woven through the toolchain — code generation, agentic workflows, AI-traceable runtimes — used as infrastructure, not as a party trick. It changes how the work gets done, not who is accountable for it: the architecture, the trade-offs, and the correctness still have to be reasoned about and owned, because in the systems I build, _being wrong has consequences in the real world._

### [AUG-KICKER]
`Source:` data.jsx › AUGMENTED.kicker (serif‑italic line)
> Leverage, without losing the plot.

---

## Credentials strip

### [CRED-1]
`Source:` app.jsx › Credentials (first stat)
> **23** — Years shipping production software — Since 2003 · Microsoft stack

### [CRED-2]
`Source:` app.jsx › Credentials (second stat)
> **12+** — Client engagements delivered — 2008 → present

### [CRED-3]
`Source:` app.jsx › Credentials (third stat, links to NuGet)
> **KBlazor** — Open-source framework on NuGet — nuget.org · kblazor.com →

---

## Origin

### [ORIGIN-LABEL]
`Source:` app.jsx › Origin (sec-label eyebrow)
> Origin · How I got here

### [ORIGIN-H2]
`Source:` app.jsx › Origin (heading; "first." is serif accent)
> Hardware came _first._

### [ORIGIN-CAPTION]
`Source:` data.jsx › ORIGIN.caption (photo caption)
> Present-day bench. Some of the same chips, some of the same friends. The white sphere in back is a coaxial spherical parallel manipulator — printed, not yet assembled.

### [ORIGIN-P1]
`Source:` data.jsx › ORIGIN.paragraphs[0]
> **Hardware came first.** In the early 2000s a friend and I built our own PIC16 programmer from a published schematic — the commercial one from Microchip wasn't reachable from where we were — and programmed our first chips in assembly. I still have that board. It kept an ember alive through years of writing Visual Basic and SharePoint workflows by day.

### [ORIGIN-P2]
`Source:` data.jsx › ORIGIN.paragraphs[1]
> A LEGO Mindstorms kit, picked up at MicroCenter in Cambridge, turned the ember into a flame. Then GHI Electronics released the FEZ family — managed C# running on bare metal — and suddenly I had a way to be in both worlds at once. I've been on their forums and using their boards ever since. My L6470 stepper-driver code has shipped in a commercial product in Florida — handed off to a friend who needed it to close out a project. Locally though, no one has commissioned a full embedded build from me directly yet; the market here is risk-averse, and the bench has stayed alive regardless.

---

## Stack / Systems Engineering

### [STACK-LABEL]
`Source:` app.jsx › Stack (sec-label eyebrow)
> Systems Engineering · End-to-end

### [STACK-H2]
`Source:` app.jsx › Stack (heading; "Same engineer." is serif accent)
> Every layer. _Same engineer._

### [STACK-P1]
`Source:` app.jsx › Stack (first paragraph)
> From the Azure region to the bus wires soldered onto an STM32, I work every layer in the diagram on the right. The seams between layers are where most projects fail — that's where I spend my time.

### [STACK-P2]
`Source:` app.jsx › Stack (second paragraph)
> I design hardware and software as a **single problem**, not as two teams sliding tickets across an org chart. The result is systems that survive contact with the real world.

### [STACK-LAYERS]
`Source:` data.jsx › STACK (diagram rows: name — sub‑label)
> - Cloud & Infrastructure — Azure · Cloudflare · CI/CD
> - Enterprise Backend — .NET 10 · ASP.NET Core · APIs
> - Blazor PWA Surface — WASM · Offline · IndexedDB
> - AI-Augmented Layer — Codegen · Workflow automation
> - Data & ETL — PostgreSQL · SQL Server · Reconciliation
> - Embedded Linux — Edge gateways · IPC bridges
> - Microcontroller Firmware — STM32 · TinyCLR · Real-time
> - Bus & I/O — CAN · SPI · I²C · UART

### [SYSCAP-1]
`Source:` data.jsx › SYSTEMS_CAPS[0]
> **Industrial HMI** · Blazor operator interfaces — Touch-first front-ends that talk directly to real machines — buttons, alarms, motion plots, recipe management.

### [SYSCAP-2]
`Source:` data.jsx › SYSTEMS_CAPS[1]
> **Motion Control** · Firmware up — Stepper / servo control, kinematics, L6470 drivers, CAN bus topologies, deterministic real-time loops on STM32.

### [SYSCAP-3]
`Source:` data.jsx › SYSTEMS_CAPS[2]
> **Floor ↔ Office** · Enterprise data bridges — ETL pipelines, reconciliation, and SCADA-to-ERP integrations that keep operational data trustworthy across the seam.

### [SYSCAP-4]
`Source:` data.jsx › SYSTEMS_CAPS[3]
> **Offline-first** · Field operations software — PWAs and local-first tools that work without the network, sync cleanly when it returns, and survive unscheduled power cuts.

---

## KBlazor showcase

### [KB-LABEL]
`Source:` app.jsx › KBlazorSection (sec-label eyebrow)
> KBlazor · AI-ready Blazor components

### [KB-H2]
`Source:` app.jsx › KBlazorSection (heading; "Three views." is serif accent)
> One dataset. _Three views._ Zero config.

### [KB-SUBLINE]
`Source:` app.jsx › KBlazorSection (under the badges)
> FlexTable · BasicEdit · DatePicker

### [KB-LEDE]
`Source:` app.jsx › KBlazorSection (.kb-lede)
> A multi-view data architecture for Blazor. One `IQueryable<T>` renders simultaneously as Table, Card, or Kanban — without rewriting the data layer.

### [KB-INSTALL]
`Source:` app.jsx › KBlazorSection (install line, code styling)
> `dotnet add package KBlazor`

### [KB-DEMO-CAPTIONS]
`Source:` app.jsx › KBlazorSection VIEWS (caption per view tab)
> - Table — Sort, filter, paginate. Saved views per user.
> - Card — Same data as chips with status colour-coding.
> - Kanban — Group items by any property. Counts at a glance.

### [KB-FEATURES]
`Source:` data.jsx › KBLAZOR.features (label · heading — body)
> - Component · **FlexTable** — Sortable, filterable, virtualised data grid with column metadata.
> - Component · **BasicEdit** — Inline + modal editing with validation, dirty tracking, and auto-bind.
> - Component · **DatePicker** — Keyboard-first picker with ranges, presets, and time zone awareness.
> - Architecture · **Multi-view** — Switch a single dataset between Table, Card, and Kanban — zero config.

---

## SyntheticPen showcase

### [SP-LABEL]
`Source:` app.jsx › SyntheticPenSection (sec-label eyebrow)
> SyntheticPen · Synthetic Windows pen input

### [SP-H2]
`Source:` app.jsx › SyntheticPenSection (heading; "real pen" is serif accent)
> Make the OS think a _real pen_ is drawing.

### [SP-STORE]
`Source:` data.jsx › SYNTHETICPEN.store (status line by the badges)
> Microsoft Store · submitted, in certification

### [SP-LEDE]
`Source:` data.jsx › SYNTHETICPEN.lede
> A free Windows desktop app (Avalonia · .NET 10) that reads vector geometry — **SVG paths and TTF/OTF glyph outlines** — and replays it as **synthetic Windows pen input**. From the operating system's point of view a real pen is drawing, so the motion lands in anything that accepts pointer input: signature fields, OneNote / Whiteboard, PDF signing surfaces.

### [SP-INSTALL]
`Source:` app.jsx › SyntheticPenSection (download line, code styling)
> `SyntheticPen · MSIX · x64 + Arm64 · free`

### [SP-TIP]
`Source:` data.jsx › SYNTHETICPEN.tip ("texttosvg.app" is a link)
> No SVG handy? Type a phrase at [texttosvg.app](https://texttosvg.app/), export the SVG, and SyntheticPen draws it. It's free — not a beta.

### [SP-PIPELINE-H3]
`Source:` app.jsx › SyntheticPenSection (.sp-h subheading)
> From filled shape to a single hand-drawn stroke

### [SP-PIPELINE-1]
`Source:` data.jsx › SYNTHETICPEN.pipeline[0] (heading is bold inline)
> **Centerline extraction.** Filled shapes and thick glyphs collapse to a single drawable stroke: a Felzenszwalb Euclidean distance transform, Zhang–Suen skeletonization, salience-based spur pruning, then junction-aware tracing. Pen pressure is derived from the local stroke radius — the distance-transform value at each point.

### [SP-PIPELINE-2]
`Source:` data.jsx › SYNTHETICPEN.pipeline[1]
> **Human-like motion.** Adaptive arc-length resampling and centripetal Catmull–Rom smoothing, driven by a curvature-aware velocity model (the 2/3 power law) so the pen slows through tight curves the way a hand does.

### [SP-PIPELINE-3]
`Source:` data.jsx › SYNTHETICPEN.pipeline[2]
> **Micro-stroke stitching.** Fragmented sub-strokes are merged into continuous paths while genuinely isolated marks — the dot on an 'i' — are preserved instead of welded to a neighbour.

### [SP-DEBUG-LABEL]
`Source:` data.jsx › SYNTHETICPEN.debug.lab (eyebrow on the callout)
> Debugging · A story worth telling

### [SP-DEBUG-H]
`Source:` data.jsx › SYNTHETICPEN.debug.h (callout heading)
> The InjectionBlockedException

### [SP-DEBUG-1]
`Source:` data.jsx › SYNTHETICPEN.debug.paragraphs[0]
> Playback kept dying with a recurring `InjectionBlockedException` — Win32 error 87, invalid parameter — with nothing obviously wrong in the geometry. Rather than guess, I instrumented the injector to write JSON diagnostics to disk and analysed them after the fact.

### [SP-DEBUG-2]
`Source:` data.jsx › SYNTHETICPEN.debug.paragraphs[1]
> The cause: micro-stroke "catch-up" bursts were firing events faster than the OS synthetic-pointer API would accept, tripping its injection rate limit. The fix was a pacing layer — a minimum inter-event interval plus a contact-settle delay — not a symptom patch that swallowed the exception.

### [SP-DEBUG-3]
`Source:` data.jsx › SYNTHETICPEN.debug.paragraphs[2]
> The irony worth keeping: the marketing site had originally advertised **"1000 Hz"** injection — the exact rate that caused the failures. That claim came out in the pre-launch honesty pass, along with other specs the software didn't actually deliver.

### [SP-FEATURES]
`Source:` data.jsx › SYNTHETICPEN.features (label · heading — body)
> - Vision · **Centerline pipeline** — Distance transform + skeletonization + junction-aware tracing turns filled vector art into one drawable, pressure-aware stroke.
> - Motion · **Hand-like replay** — Curvature-aware velocity and Catmull–Rom smoothing so synthetic strokes don't read as machine-straight.
> - Shipping · **MSIX · x64 + Arm64** — One signed .msixbundle. It declares the runFullTrust capability because synthetic pointer injection is a full-trust Win32 API the UWP sandbox does not expose.
> - Privacy · **Nothing leaves the machine** — No telemetry, no analytics, no network calls, no account — stated plainly in the privacy policy.

---

## Projects

### [PROJ-LABEL]
`Source:` app.jsx › Projects (sec-label eyebrow)
> Projects · Selected work

### [PROJ-H2]
`Source:` app.jsx › Projects (heading; "into production." is serif accent)
> Things I've shipped _into production._

### [PROJ-EXPAND-LABELS]
`Source:` app.jsx › Projects (collapsed/expanded toggle + sub‑heads + visit link)
> - Collapsed toggle: Read more ▼
> - Expanded toggle: Close ▲
> - Sub‑headings: Features / Stack
> - Visit link: Visit {domain} →

Each project below: **name** — _tag_ — lede — features.

### [PROJ-01]
`Source:` data.jsx › PROJECTS[0]
> **Receiva** — _Offline-first field service PWA_
> Progressive Web App for field service businesses — operates entirely offline, GPS-aware client selection, receipt generation, email queueing, and local-first synchronisation when connectivity returns.
> Features: Full offline operation · GPS-aware client selection · Receipt generation · Email queueing · Installable PWA experience · Local-first synchronisation

### [PROJ-02]
`Source:` data.jsx › PROJECTS[1]
> **Web Based Statement Generator** — _Dec 2022 – Jul 2023_
> Web application that ingests Excel data and produces PDF statements bundled into a compressed zip archive — replacing a fragile manual statement-prep process.
> Features: Excel data ingestion · Per-statement PDF generation · Compressed zip bundling for hand-off · Web upload and download flow

### [PROJ-03]
`Source:` data.jsx › PROJECTS[2]
> **Intra-organisational Order Management** — _Sep 2022 – Apr 2026_
> Custom integration pulling order data from the organisation's inventory management system into the accounting solution, enforcing complex business rules along the way.
> Features: Inventory → accounting data integration · Custom business-rule enforcement · Cross-system reconciliation

### [PROJ-04]
`Source:` data.jsx › PROJECTS[3]
> **Line of Business Scheduling Application** — _Oct 2020 – Dec 2021_
> Web application for scheduling in-person and virtual meetings as part of a customer's legal medical-compliance workflow.
> Features: In-person + virtual meeting scheduling · Legal medical-compliance workflow · Multi-party calendar coordination

### [PROJ-05]
`Source:` data.jsx › PROJECTS[4]
> **KPI Dashboard** — _Jan 2019 – Jun 2019_
> Implemented complex KPIs in Microsoft Power BI to track critical metrics for the customer's engineering department.
> Features: Complex KPI calculations · Power BI dashboarding · Engineering metrics tracking

### [PROJ-06]
`Source:` data.jsx › PROJECTS[5]
> **Dynamics CRM → GP Integration** — _2016 – 2022_
> T-SQL based ETL preparing Microsoft Dynamics CRM data for integration with Dynamics GP. Re-ran year on year as each new business unit was onboarded.
> Features: T-SQL ETL pipelines · Dynamics CRM → Dynamics GP transformation · Per business-unit rollout over six years

### [PROJ-07]
`Source:` data.jsx › PROJECTS[6]
> **Desktop Statement Generator** — _2018_
> Desktop application automating client statement generation — saved the customer weeks of work per quarter and improved their overall product offering.
> Features: Automated statement generation · Quarterly time-savings · Desktop client tool

### [PROJ-08]
`Source:` data.jsx › PROJECTS[7]
> **Leaderboard & Pre-2000 DB ETL** — _2017_
> Leaderboard solution built on a pre-2000 database via a custom configurable ETL into a data warehouse — raised client profitability within months and was showcased to peers in the industry.
> Features: Legacy database integration · Configurable ETL framework · Data-warehouse loading · Showcased to industry peers

### [PROJ-09]
`Source:` data.jsx › PROJECTS[8]
> **Service Complaints in Dynamics CRM** — _Jan 2016 – Jan 2017_
> Configured Microsoft Dynamics CRM to support a service complaints department's tracking and management of consumer complaints, including a custom complaint-ID scheme the client required.
> Features: Dynamics CRM customisation · Custom complaint-ID scheme · Tracking and provider workflow

### [PROJ-10]
`Source:` data.jsx › PROJECTS[9]
> **Credit Card Processing Portal** — _2010_
> TTD-currency credit card processing web portal for an insurer, plus bank-side download files so the bank could process policyholder credit card payments.
> Features: TTD currency processing · Insurer-facing web portal · Bank file generation for downstream processing

### [PROJ-11]
`Source:` data.jsx › PROJECTS[10]
> **Financial Compliance Reporting** — _2009_
> Reporting system verifying that account holders at a financial institution complied with government regulations on source of funds.
> Features: Source-of-funds reporting · Government-regulation compliance · Financial-institution rollout

### [PROJ-12]
`Source:` data.jsx › PROJECTS[11]
> **Government Candidate Management** — _2008_
> Two applications enabling end-to-end electronic candidate management for a government organisation — replacing the paper-based hiring process.
> Features: Two-app workflow · Electronic hiring end-to-end · Government-org deployment

---

## Skills

### [SKILLS-LABEL]
`Source:` app.jsx › Skills (sec-label eyebrow)
> Skills · Toolbox

### [SKILLS-H2]
`Source:` app.jsx › Skills (heading; "reach for." is serif accent)
> What I _reach for._

_(The skill names themselves are excluded as data‑like per scope — ask if you want them in.)_

---

## Services

### [SVC-LABEL]
`Source:` app.jsx › Services (sec-label eyebrow)
> Services · How I help

### [SVC-H2]
`Source:` app.jsx › Services (heading; "attract my attention." is serif accent)
> Six ways to _attract my attention._

### [SVC-1]
`Source:` data.jsx › SERVICES[0]
> **Enterprise Software Development** — Custom business systems built using modern .NET — modular, maintainable, and fitted to operational reality.

### [SVC-2]
`Source:` data.jsx › SERVICES[1]
> **Blazor Application Development** — Interactive web apps, PWAs, dashboards, and internal tooling — offline-capable where it matters.

### [SVC-3]
`Source:` data.jsx › SERVICES[2]
> **Embedded Systems & Automation** — Microcontroller firmware, machine interfaces, industrial integrations, and distributed hardware systems.

### [SVC-4]
`Source:` data.jsx › SERVICES[3]
> **ETL & Data Migration** — Extraction, transformation, reconciliation, and migration — the un-glamorous work that makes systems trustworthy.

### [SVC-5]
`Source:` data.jsx › SERVICES[4]
> **Architecture & Technical Consulting** — System design, modernisation planning, scalability reviews, and pragmatic technical strategy.

### [SVC-6]
`Source:` data.jsx › SERVICES[5]
> **AI-Augmented Engineering** — Workflow automation and AI-assisted development pipelines — leverage without losing the plot.

---

## About + Philosophy

### [ABOUT-LABEL]
`Source:` app.jsx › About (sec-label eyebrow)
> About · Philosophy

### [ABOUT-H2]
`Source:` app.jsx › About (heading; "long version." is serif accent)
> The _long version._

### [ABOUT-P1]
`Source:` data.jsx › ABOUT.paragraphs[0]
> I'm an augmented software engineer and systems architect based in **Trinidad & Tobago**. I've been shipping production software on the Microsoft stack since **2003** — over two decades through VB.NET, SharePoint workflows, ASP.NET, BI / ETL pipelines, Blazor, and the embedded firmware that talks to all of it.

### [ABOUT-P2]
`Source:` data.jsx › ABOUT.paragraphs[1]
> The work I do best sits where most teams have a seam: enterprise applications on one side, the physical machines and instruments they depend on the other. I design for the seam. ETL platforms, reconciliation systems, CNC and robotics architectures, offline-first PWAs, motion controllers — same engineer, same toolbox.

### [ABOUT-P3]
`Source:` data.jsx › ABOUT.paragraphs[2]
> I enjoy problems where software, hardware, networking, and automation have to agree on something — and where being wrong has consequences in the real world.

### [ABOUT-P4]
`Source:` data.jsx › ABOUT.paragraphs[3] (full serif‑italic line)
> _And every brilliant idea belongs to God first._

### [ABOUT-PRINCIPLES-H3]
`Source:` app.jsx › About (sub‑heading)
> Operating principles

### [PHILOSOPHY]
`Source:` data.jsx › PHILOSOPHY (the numbered principles list)
> 1. Software should solve real operational problems.
> 2. It should be understandable and maintainable.
> 3. Scale comes through modularity, not heroics.
> 4. Reduce friction for users; the machine should bend, not them.
> 5. Be resilient in imperfect real-world conditions.
> 6. Offline-first when the network is a liability.
> 7. Hardware and software are co-designed — neither pretends the other doesn't exist.

### [ABOUT-ASIDE]
`Source:` app.jsx › About (photo caption; "Photography and Videography" is a
link, "grind" is a serif accent)
> Away from the keyboard / [Photography and Videography](https://kurtnelle.pixieset.com/) are an active part of my life. You've got to enjoy the _grind_.

---

## Focus / Current research

### [FOCUS-LABEL]
`Source:` app.jsx › Focus (sec-label eyebrow)
> Focus · Current research

### [FOCUS-H2]
`Source:` app.jsx › Focus (heading; "right now." is serif accent)
> What's on the bench _right now._

### [FOCUS-ITEMS]
`Source:` data.jsx › FOCUS (label · heading — body)
> - Research · **Modular AI-assisted software architectures** — How runtimes change when logic units are generated, swapped, and traced at runtime by an AI collaborator.
> - Build · **Embedded robotics systems** — Motion-control firmware, kinematics, and distributed CAN bus topologies.
> - Build · **Distributed logic execution** — Memory-mapped communication and pipeline-driven orchestration across processes and machines.
> - Research · **Industrial automation tooling** — Bridging factory-floor reality with maintainable enterprise software practices.
> - Build · **Offline-first enterprise apps** — Blazor WASM + SQLite/IndexedDB patterns that survive bad connectivity and unscheduled power cuts.
> - Design · **Human-machine interface design** — Operator interfaces that respect what the operator actually has to do at 3am.
> - Build · **Advanced motion control** — Kinematics, trajectory planning, and real-time loops under deterministic constraints.

---

## Contact

### [CONTACT-LABEL]
`Source:` app.jsx › Contact (sec-label eyebrow)
> Contact · Say hello

### [CONTACT-SIG]
`Source:` app.jsx › Contact (small line above the heading; "fiber optic." serif)
> I build on both sides of the _fiber optic._

### [CONTACT-H2]
`Source:` app.jsx › Contact (heading; "something." is serif accent)
> Let's build _something._

### [CONTACT-PARA]
`Source:` app.jsx › Contact (paragraph beside the links)
> Enterprise software, industrial automation, embedded development, Blazor applications, architecture consulting, or AI-augmented workflow systems — I'm always interested in challenging engineering problems and meaningful projects.

---

## Footer

### [FOOTER-MARK]
`Source:` app.jsx › Footer (name mark; "Kurtnelle" is serif accent)
> Shawn _Kurtnelle_ Lewis

### [FOOTER-COL-HEADS]
`Source:` data.jsx › FOOTER.cols (the three column headings)
> Work · Network · Site

### [FOOTER-COPY]
`Source:` app.jsx › Footer (bottom bar; `{year}` is the current year)
> © {year} Shawn K. Lewis · All rights reserved

### [FOOTER-SIG]
`Source:` data.jsx › FOOTER.sig (bottom bar tagline)
> Built with C#, Blazor, coffee, and unreasonable engineering ambition.

### [FOOTER-VERSION]
`Source:` app.jsx › Footer (bottom bar; `{location}` = SITE-LOCATION)
> v1.0 · {location}

---

## Appendix — labels & navigation (optional, edit only if needed)

### [NAV-LABELS]
`Source:` data.jsx › NAV (top‑nav items, in order)
> Top · Stack · KBlazor · SyntheticPen · Projects · Skills · About · Contact

### [FOOTER-LINK-LABELS]
`Source:` data.jsx › FOOTER.cols[].links (link text under each column)
> - Work: Featured projects · KBlazor · Services
> - Network: GitHub · LinkedIn · KBlazor
> - Site: About · Stack · Contact

### [CONTACT-HANDLES]
`Source:` data.jsx › CONTACT (label — visible handle)
> - GitHub — github.com/kurtnelle
> - LinkedIn — linkedin.com/in/kurtnelle
> - KBlazor — kblazor.com
> - Receiva — receiva.app
> - SyntheticPen — syntheticpen.com
> - Photography — kurtnelle.pixieset.com
