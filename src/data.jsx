// src/data.jsx — all site content as global consts.
// Loaded via <script type="text/babel"> so top-level consts live on window scope.

const SITE = {
  name: "Shawn Kurtnelle Lewis",
  brand: "SKL",
  role: "Software Engineer · Systems Architect",
  location: "Port of Spain, Trinidad & Tobago",
  availability: "Open to projects · Q3 2026",
};

const NAV = [
  { idx: "01", label: "Top",      href: "#top" },
  { idx: "02", label: "Stack",    href: "#stack" },
  { idx: "03", label: "KBlazor",  href: "#kblazor" },
  { idx: "04", label: "Projects", href: "#projects" },
  { idx: "05", label: "Skills",   href: "#skills" },
  { idx: "06", label: "About",    href: "#about" },
  { idx: "07", label: "Contact",  href: "#contact" },
];

const HERO = {
  pills: [
    { label: "Available for engagements", dot: "grn" },
    { label: "Trinidad & Tobago · UTC-4", dot: null },
    { label: "Systems · Embedded · AI",   dot: "amber" },
  ],
  // Headline composed of plain + serif italic + stroke parts.
  title: [
    { t: "Software " },
    { t: "for the ", serif: true },
    { t: "real world.", stroke: true },
  ],
  tag: (
    <>
      I'm a software engineer and systems architect based in Trinidad. I build
      <strong> both sides of the fiber optic</strong> — the .NET applications
      that run the business and the embedded systems that run the machines.
    </>
  ),
  meta: [
    { k: "ROLE",  v: "Engineer · Architect" },
    { k: "BASE",  v: "Port of Spain, T&T" },
    { k: "SINCE", v: "2003 · MS stack" },
    { k: "AVAIL", v: "Selected · Q3 2026" },
  ],
};

const ORIGIN = {
  caption: "Present-day bench. Some of the same chips, some of the same friends. The white sphere in back is a coaxial spherical parallel manipulator — printed, not yet assembled.",
  paragraphs: [
    <><strong>Hardware came first.</strong> In the early 2000s a friend and I built our own PIC16 programmer from a published schematic — the commercial one from Microchip wasn't reachable from where we were — and programmed our first chips in assembly. I still have that board. It kept an ember alive through years of writing Visual Basic and SharePoint workflows by day.</>,
    <>A LEGO Mindstorms kit, picked up at MicroCenter in Cambridge, turned the ember into a flame. Then GHI Electronics released the FEZ family — managed C# running on bare metal — and suddenly I had a way to be in both worlds at once. I've been on their forums and using their boards ever since. My L6470 stepper-driver code has shipped in a commercial product in Florida — handed off to a friend who needed it to close out a project. Locally though, no one has commissioned a full embedded build from me directly yet; the market here is risk-averse, and the bench has stayed alive regardless.</>,
  ],
};

const TICKER = [
  "C# / .NET 9", "Blazor WASM", "PWA · Offline-First", "Embedded Linux",
  "STM32 · TinyCLR", "CAN Bus · SPI · I²C", "Industrial Automation",
  "ETL · Reconciliation", "Azure", "PostgreSQL · SQL Server",
  "AI-Augmented Pipelines", "Custom Hardware Integration",
];

// Capability cards under the stack diagram — each one maps to actual
// portfolio work so it reads as a menu of things I've already shipped,
// not aspirations.
const SYSTEMS_CAPS = [
  {
    lab: "Industrial HMI",
    h:   "Blazor operator interfaces",
    p:   "Touch-first front-ends that talk directly to real machines — buttons, alarms, motion plots, recipe management.",
  },
  {
    lab: "Motion Control",
    h:   "Firmware up",
    p:   "Stepper / servo control, kinematics, L6470 drivers, CAN bus topologies, deterministic real-time loops on STM32.",
  },
  {
    lab: "Floor ↔ Office",
    h:   "Enterprise data bridges",
    p:   "ETL pipelines, reconciliation, and SCADA-to-ERP integrations that keep operational data trustworthy across the seam.",
  },
  {
    lab: "Offline-first",
    h:   "Field operations software",
    p:   "PWAs and local-first tools that work without the network, sync cleanly when it returns, and survive unscheduled power cuts.",
  },
];

const STACK = [
  { num: "L08", name: "Cloud & Infrastructure",  sub: "Azure · Cloudflare · CI/CD" },
  { num: "L07", name: "Enterprise Backend",      sub: ".NET 10 · ASP.NET Core · APIs" },
  { num: "L06", name: "Blazor PWA Surface",      sub: "WASM · Offline · IndexedDB" },
  { num: "L05", name: "AI-Augmented Layer",      sub: "Codegen · Workflow automation" },
  { num: "L04", name: "Data & ETL",              sub: "PostgreSQL · SQL Server · Reconciliation" },
  { num: "L03", name: "Embedded Linux",          sub: "Edge gateways · IPC bridges" },
  { num: "L02", name: "Microcontroller Firmware",sub: "STM32 · TinyCLR · Real-time" },
  { num: "L01", name: "Bus & I/O",               sub: "CAN · SPI · I²C · UART" },
];

// KBlazor showcase — code on the left, live demo on the right.
const KBLAZOR = {
  badges: [
    { label: "kblazor.com",         href: "https://kblazor.com" },
    { label: "nuget: KBlazor",      href: "https://www.nuget.org/packages?q=KBlazor", amber: true },
  ],
  // Real KBlazor FlexTable usage — one element with named parameters.
  // 11-space indent on continuation lines so attributes align under the
  // opening tag exactly like the kblazor.com docs render it.
  codeLines: [
    { tokens: [
      { k: "tag", t: "<FlexTable" }, { t: " " },
      { k: "attr", t: "TItem" }, { t: "=" }, { k: "str", t: "\"PurchaseOrder\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "Items" }, { t: "=" }, { k: "str", t: "\"@_orders\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "Fields" }, { t: "=" },
      { k: "str", t: "\"Order #,Customer,Status,Amount,Order Date\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "ViewName" }, { t: "=" }, { k: "str", t: "\"MyView\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "PageSize" }, { t: "=" }, { k: "str", t: "\"10\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "SelectionChanged" }, { t: "=" },
      { k: "str", t: "\"OnRowClicked\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "SortFilter" }, { t: "=" },
      { k: "str", t: "\"OnSortFilter\"" },
    ]},
    { tokens: [
      { t: "           " },
      { k: "attr", t: "RenderTemplates" }, { t: "=" },
      { k: "str", t: "\"@_templates\"" }, { k: "tag", t: " />" },
    ]},
  ],
  features: [
    { lab: "Component",   h: "FlexTable",  p: "Sortable, filterable, virtualised data grid with column metadata." },
    { lab: "Component",   h: "BasicEdit",  p: "Inline + modal editing with validation, dirty tracking, and auto-bind." },
    { lab: "Component",   h: "DatePicker", p: "Keyboard-first picker with ranges, presets, and time zone awareness." },
    { lab: "Architecture",h: "Multi-view", p: "Switch a single dataset between Table, Card, and Kanban — zero config." },
  ],
};

// Demo dataset rendered by the KBlazor preview card. Single source the
// React table reads — same shape the real component consumes.
const KB_ORDERS = [
  { id: "INV-2041", customer: "Caribbean Cement",  amount: 18420.00, due: "2026-05-22", status: "ok"   },
  { id: "INV-2042", customer: "PowerGen Trinidad", amount:  7250.50, due: "2026-05-18", status: "warn" },
  { id: "INV-2043", customer: "Massy Industrial",  amount: 31200.00, due: "2026-06-04", status: "ok"   },
  { id: "INV-2044", customer: "NGC Refinery",      amount:  4980.75, due: "2026-05-15", status: "err"  },
  { id: "INV-2045", customer: "WASA Pipeworks",    amount: 12640.00, due: "2026-06-12", status: "ok"   },
  { id: "INV-2046", customer: "Petrotrin Legacy",  amount:  9300.00, due: "2026-05-29", status: "warn" },
];

const PROJECTS = [
  {
    num: "01",
    name: "Receiva",
    tag: "Offline-first field service PWA",
    url: "https://receiva.app/",
    lede: "Progressive Web App for field service businesses — operates entirely offline, GPS-aware client selection, receipt generation, email queueing, and local-first synchronisation when connectivity returns.",
    features: [
      "Full offline operation",
      "GPS-aware client selection",
      "Receipt generation",
      "Email queueing",
      "Installable PWA experience",
      "Local-first synchronisation",
    ],
    stack: ["Blazor WASM", "ASP.NET Core", "SQLite", "IndexedDB", "Azure"],
  },
  {
    num: "02",
    name: "Web Based Statement Generator",
    tag: "Dec 2022 – Jul 2023",
    lede: "Web application that ingests Excel data and produces PDF statements bundled into a compressed zip archive — replacing a fragile manual statement-prep process.",
    features: [
      "Excel data ingestion",
      "Per-statement PDF generation",
      "Compressed zip bundling for hand-off",
      "Web upload and download flow",
    ],
    stack: ["Blazor", "PDF", "Excel ETL"],
  },
  {
    num: "03",
    name: "Intra-organisational Order Management",
    tag: "Sep 2022 – Apr 2026",
    lede: "Custom integration pulling order data from the organisation's inventory management system into the accounting solution, enforcing complex business rules along the way.",
    features: [
      "Inventory → accounting data integration",
      "Custom business-rule enforcement",
      "Cross-system reconciliation",
    ],
    stack: ["ASP.NET Blazor", "SQL Server"],
  },
  {
    num: "04",
    name: "Line of Business Scheduling Application",
    tag: "Oct 2020 – Dec 2021",
    lede: "Web application for scheduling in-person and virtual meetings as part of a customer's legal medical-compliance workflow.",
    features: [
      "In-person + virtual meeting scheduling",
      "Legal medical-compliance workflow",
      "Multi-party calendar coordination",
    ],
    stack: ["ASP.NET", "Web App"],
  },
  {
    num: "05",
    name: "KPI Dashboard",
    tag: "Jan 2019 – Jun 2019",
    lede: "Implemented complex KPIs in Microsoft Power BI to track critical metrics for the customer's engineering department.",
    features: [
      "Complex KPI calculations",
      "Power BI dashboarding",
      "Engineering metrics tracking",
    ],
    stack: ["Power BI", "KPIs"],
  },
  {
    num: "06",
    name: "Dynamics CRM → GP Integration",
    tag: "2016 – 2022",
    lede: "T-SQL based ETL preparing Microsoft Dynamics CRM data for integration with Dynamics GP. Re-ran year on year as each new business unit was onboarded.",
    features: [
      "T-SQL ETL pipelines",
      "Dynamics CRM → Dynamics GP transformation",
      "Per business-unit rollout over six years",
    ],
    stack: ["T-SQL", "Dynamics CRM", "Dynamics GP", "ETL"],
  },
  {
    num: "07",
    name: "Desktop Statement Generator",
    tag: "2018",
    lede: "Desktop application automating client statement generation — saved the customer weeks of work per quarter and improved their overall product offering.",
    features: [
      "Automated statement generation",
      "Quarterly time-savings",
      "Desktop client tool",
    ],
    stack: [".NET", "Automation"],
  },
  {
    num: "08",
    name: "Leaderboard & Pre-2000 DB ETL",
    tag: "2017",
    lede: "Leaderboard solution built on a pre-2000 database via a custom configurable ETL into a data warehouse — raised client profitability within months and was showcased to peers in the industry.",
    features: [
      "Legacy database integration",
      "Configurable ETL framework",
      "Data-warehouse loading",
      "Showcased to industry peers",
    ],
    stack: ["ETL", "Data Warehouse", "Reporting"],
  },
  {
    num: "09",
    name: "Service Complaints in Dynamics CRM",
    tag: "Jan 2016 – Jan 2017",
    lede: "Configured Microsoft Dynamics CRM to support a service complaints department's tracking and management of consumer complaints, including a custom complaint-ID scheme the client required.",
    features: [
      "Dynamics CRM customisation",
      "Custom complaint-ID scheme",
      "Tracking and provider workflow",
    ],
    stack: ["Dynamics CRM", "Configuration"],
  },
  {
    num: "10",
    name: "Credit Card Processing Portal",
    tag: "2010",
    lede: "TTD-currency credit card processing web portal for an insurer, plus bank-side download files so the bank could process policyholder credit card payments.",
    features: [
      "TTD currency processing",
      "Insurer-facing web portal",
      "Bank file generation for downstream processing",
    ],
    stack: ["Web Portal", "Payments"],
  },
  {
    num: "11",
    name: "Financial Compliance Reporting",
    tag: "2009",
    lede: "Reporting system verifying that account holders at a financial institution complied with government regulations on source of funds.",
    features: [
      "Source-of-funds reporting",
      "Government-regulation compliance",
      "Financial-institution rollout",
    ],
    stack: ["Compliance", "Reporting"],
  },
  {
    num: "12",
    name: "Government Candidate Management",
    tag: "2008",
    lede: "Two applications enabling end-to-end electronic candidate management for a government organisation — replacing the paper-based hiring process.",
    features: [
      "Two-app workflow",
      "Electronic hiring end-to-end",
      "Government-org deployment",
    ],
    stack: ["Web App", "Workflow"],
  },
];


const SKILLS = [
  { cat: "Languages",   nm: "C#",          url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { cat: "Languages",   nm: "SQL",         url: "https://en.wikipedia.org/wiki/SQL" },
  { cat: "Languages",   nm: "Python",      url: "https://www.python.org/" },
  { cat: "Languages",   nm: "JavaScript",  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { cat: "Languages",   nm: "HTML / CSS",  url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },

  { cat: "Frameworks",  nm: ".NET Latest", url: "https://dotnet.microsoft.com/" },
  { cat: "Frameworks",  nm: "ASP.NET Core",url: "https://learn.microsoft.com/en-us/aspnet/core/" },
  { cat: "Frameworks",  nm: "Blazor",      url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" },
  { cat: "Frameworks",  nm: "Avalonia",    url: "https://avaloniaui.net/" },
  { cat: "Frameworks",  nm: ".NET MAUI",   url: "https://dotnet.microsoft.com/en-us/apps/maui" },

  { cat: "Databases",   nm: "SQL Server",  url: "https://www.microsoft.com/en-us/sql-server/" },
  { cat: "Databases",   nm: "PostgreSQL",  url: "https://www.postgresql.org/" },
  { cat: "Databases",   nm: "SQLite",      url: "https://www.sqlite.org/" },

  { cat: "Embedded",    nm: "STM32",          url: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html" },
  { cat: "Embedded",    nm: "TinyCLR",        url: "https://www.ghielectronics.com/tinyclr/" },
  { cat: "Embedded",    nm: "Embedded Linux", url: "https://elinux.org/" },
  { cat: "Embedded",    nm: "CAN Bus",        url: "https://en.wikipedia.org/wiki/CAN_bus" },
  { cat: "Embedded",    nm: "SPI",            url: "https://en.wikipedia.org/wiki/Serial_Peripheral_Interface" },
  { cat: "Embedded",    nm: "I²C",            url: "https://en.wikipedia.org/wiki/I%C2%B2C" },
  { cat: "Embedded",    nm: "UART",           url: "https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter" },

  { cat: "Mechanical",  nm: "Mechanism Design", url: "https://en.wikipedia.org/wiki/Mechanism_(engineering)" },
  { cat: "Mechanical",  nm: "3D Printing",      url: "https://en.wikipedia.org/wiki/3D_printing" },
  { cat: "Mechanical",  nm: "SpaceMouse",       url: "https://3dconnexion.com/us/spacemouse-3d-mouse/" },

  { cat: "Cloud",       nm: "Azure",          url: "https://azure.microsoft.com/" },
  { cat: "Cloud",       nm: "Azure SQL",      url: "https://azure.microsoft.com/en-us/products/azure-sql/" },
  { cat: "Cloud",       nm: "Azure DevOps",   url: "https://azure.microsoft.com/en-us/products/devops/" },
  { cat: "Cloud",       nm: "GitHub Actions", url: "https://github.com/features/actions" },
  { cat: "Cloud",       nm: "CI/CD",          url: "https://en.wikipedia.org/wiki/CI/CD" },
  { cat: "Cloud",       nm: "Containers",     url: "https://www.docker.com/" },

  { cat: "Architecture", nm: "Offline-First",         url: "https://offlinefirst.org/" },
  { cat: "Architecture", nm: "Distributed Systems",   url: "https://en.wikipedia.org/wiki/Distributed_computing" },
  { cat: "Architecture", nm: "ETL & Reconciliation",  url: "https://en.wikipedia.org/wiki/Extract,_transform,_load" },
  { cat: "Architecture", nm: "Modular Runtimes" },
  { cat: "Architecture", nm: "AI-Augmented Dev" },
];

const SERVICES = [
  { ix: "S/01", h: "Enterprise Software Development",
    p: "Custom business systems built using modern .NET — modular, maintainable, and fitted to operational reality." },
  { ix: "S/02", h: "Blazor Application Development",
    p: "Interactive web apps, PWAs, dashboards, and internal tooling — offline-capable where it matters." },
  { ix: "S/03", h: "Embedded Systems & Automation",
    p: "Microcontroller firmware, machine interfaces, industrial integrations, and distributed hardware systems." },
  { ix: "S/04", h: "ETL & Data Migration",
    p: "Extraction, transformation, reconciliation, and migration — the un-glamorous work that makes systems trustworthy." },
  { ix: "S/05", h: "Architecture & Technical Consulting",
    p: "System design, modernisation planning, scalability reviews, and pragmatic technical strategy." },
  { ix: "S/06", h: "AI-Augmented Engineering",
    p: "Workflow automation and AI-assisted development pipelines — leverage without losing the plot." },
];

const ABOUT = {
  paragraphs: [
    <>I'm a software engineer and systems architect based in <strong>Trinidad &amp; Tobago</strong>. I've been shipping production software on the Microsoft stack since <strong>2003</strong> — over two decades through VB.NET, SharePoint workflows, ASP.NET, BI / ETL pipelines, Blazor, and the embedded firmware that talks to all of it.</>,
    <>The work I do best sits where most teams have a seam: enterprise applications on one side, the physical machines and instruments they depend on the other. I design for the seam. ETL platforms, reconciliation systems, CNC and robotics architectures, offline-first PWAs, motion controllers — same engineer, same toolbox.</>,
    <>I enjoy problems where software, hardware, networking, and automation have to agree on something — and where being wrong has consequences in the real world.</>,
    <em className="serif">And every brilliant idea belongs to God first.</em>,
  ],
};

const PHILOSOPHY = [
  "Software should solve real operational problems.",
  "It should be understandable and maintainable.",
  "Scale comes through modularity, not heroics.",
  "Reduce friction for users; the machine should bend, not them.",
  "Be resilient in imperfect real-world conditions.",
  "Offline-first when the network is a liability.",
  "Hardware and software are co-designed — neither pretends the other doesn't exist.",
];

const FOCUS = [
  { lab: "Research", h: "Modular AI-assisted software architectures",
    p: "How runtimes change when logic units are generated, swapped, and traced at runtime by an AI collaborator." },
  { lab: "Build",    h: "Embedded robotics systems",
    p: "Motion-control firmware, kinematics, and distributed CAN bus topologies." },
  { lab: "Build",    h: "Distributed logic execution",
    p: "Memory-mapped communication and pipeline-driven orchestration across processes and machines." },
  { lab: "Research", h: "Industrial automation tooling",
    p: "Bridging factory-floor reality with maintainable enterprise software practices." },
  { lab: "Build",    h: "Offline-first enterprise apps",
    p: "Blazor WASM + SQLite/IndexedDB patterns that survive bad connectivity and unscheduled power cuts." },
  { lab: "Design",   h: "Human-machine interface design",
    p: "Operator interfaces that respect what the operator actually has to do at 3am." },
  { lab: "Build",    h: "Advanced motion control",
    p: "Kinematics, trajectory planning, and real-time loops under deterministic constraints." },
];

const CONTACT = [
  { k: "GitHub",      v: "github.com/kurtnelle",       href: "https://github.com/kurtnelle" },
  { k: "LinkedIn",    v: "linkedin.com/in/kurtnelle",  href: "https://www.linkedin.com/in/kurtnelle" },
  { k: "KBlazor",     v: "kblazor.com",                href: "https://kblazor.com" },
  { k: "Photography", v: "kurtnelle.pixieset.com",     href: "https://kurtnelle.pixieset.com/" },
];

const FOOTER = {
  cols: [
    { h: "Work", links: [
      { t: "Featured projects", href: "#projects" },
      { t: "KBlazor",           href: "#kblazor" },
      { t: "Services",          href: "#services" },
    ]},
    { h: "Network", links: [
      { t: "GitHub",   href: "https://github.com/kurtnelle" },
      { t: "LinkedIn", href: "https://www.linkedin.com/in/kurtnelle" },
      { t: "KBlazor",  href: "https://kblazor.com" },
    ]},
    { h: "Site", links: [
      { t: "About",   href: "#about" },
      { t: "Stack",   href: "#stack" },
      { t: "Contact", href: "#contact" },
    ]},
  ],
  sig: "Built with C#, Blazor, coffee, and unreasonable engineering ambition.",
};

Object.assign(window, {
  SITE, NAV, HERO, ORIGIN, TICKER, STACK, SYSTEMS_CAPS, KBLAZOR, KB_ORDERS,
  PROJECTS, SKILLS, SERVICES, ABOUT, PHILOSOPHY, FOCUS, CONTACT, FOOTER,
});
