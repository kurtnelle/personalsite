// src/app.jsx — section components + mount. Globals come from data.jsx
// (loaded earlier as a non-module Babel script, so consts share scope).

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ── Reveal-on-scroll hook ──────────────────────────────────────────────────
// One shared observer; children opt in with the `reveal` class. Adds `in`
// once the element crosses the viewport so the CSS transition fires.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

// ── Theme toggle ───────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("skl.theme")
        || document.documentElement.getAttribute("data-theme")
        || "dark";
    } catch (e) { return "dark"; }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("skl.theme", theme); } catch (e) { /* ignore */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

// ── Top nav ────────────────────────────────────────────────────────────────
function TopNav({ theme, onToggleTheme }) {
  return (
    <header className="topnav">
      <div className="wrap topnav-row">
        <a href="#top" className="brand">
          <span className="dot" />
          <span>{SITE.brand}</span>
          <span className="slash">/</span>
          <span>{SITE.role}</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              <span className="idx">{n.idx}</span>
              <span>{n.label}</span>
            </a>
          ))}
          <a href="#" onClick={(e) => { e.preventDefault(); onToggleTheme(); }}
             aria-label="Toggle theme">
            <span className="idx">{theme === "dark" ? "DK" : "LT"}</span>
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

// Live AST clock — Port of Spain has no DST so Intl handles the offset.
// Tick on the next wall-clock second so the seconds counter doesn't drift
// out of phase with the system clock during long sessions.
function useASTClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    let id;
    const tick = () => {
      setNow(new Date());
      id = setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    id = setTimeout(tick, 1000 - (Date.now() % 1000));
    return () => clearTimeout(id);
  }, []);
  return now;
}

const __TIME_FMT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Port_of_Spain",
  hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
});

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  const now = useASTClock();
  const time = __TIME_FMT.format(now);
  return (
    <section className="hero wrap" id="top">
      <div className="hero-status">
        <span className="pill">
          <span className="dot" />
          {HERO.pills[0].label}
        </span>
        <span className="pill" style={{ fontVariantNumeric: "tabular-nums" }}>
          <span className="dot amber" />
          Port of Spain · {time} AST
        </span>
        <span className="pill">
          <span className="dot amber" />
          {HERO.pills[2].label}
        </span>
        <span style={{
          marginLeft: "auto",
          fontFamily: "var(--f-mono)",
          fontSize: 10,
          color: "var(--muted)",
          letterSpacing: ".08em",
        }}>
          V.2026.05 — BUILD {String((now.getTime() / 86400000 | 0) % 10000).padStart(4, "0")}
        </span>
      </div>
      <div className="hero-grid">
        <div>
          <h1>
            {HERO.title.map((part, i) => {
              if (part.serif)  return <span key={i} className="serif">{part.t}</span>;
              if (part.stroke) return <span key={i} className="stroke">{part.t}</span>;
              return <span key={i}>{part.t}</span>;
            })}
          </h1>
          <p className="hero-tag">{HERO.tag}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View projects <span className="arr">→</span>
            </a>
            <a className="btn" href="#contact">
              Get in touch <span className="arr">→</span>
            </a>
          </div>
        </div>
        <aside className="hero-card reveal">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <Monogram />
          <div className="meta">
            {HERO.meta.map((m) => (
              <div className="row" key={m.k}>
                <span className="k">{m.k}</span>
                <span className="v">{m.v}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

// Portrait — uses assets/profile.jpg. If the image fails to load,
// falls back to an on-brand SKL monogram so the card never breaks.
function Monogram() {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <div className="photo" style={{
        backgroundImage: "url('assets/profile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 28%",
      }}>
        <img src="assets/profile.jpg" alt="Shawn K. Lewis"
             onError={() => setFailed(true)}
             style={{ display: "none" }} />
      </div>
    );
  }
  return (
    <div className="photo" style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "radial-gradient(120% 80% at 30% 20%, var(--bg-2), var(--bg))",
    }}>
      <svg viewBox="0 0 200 200" width="62%" aria-hidden="true">
        <defs>
          <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--text)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="78" fill="none"
                stroke="var(--line)" strokeWidth="1" />
        <circle cx="100" cy="100" r="62" fill="none"
                stroke="var(--line-soft)" strokeWidth="1" strokeDasharray="2 4" />
        <text x="100" y="118" textAnchor="middle"
              fontFamily="Bricolage Grotesque, sans-serif"
              fontWeight="500" fontSize="86"
              letterSpacing="-4"
              fill="url(#mg)">SKL</text>
      </svg>
    </div>
  );
}

// ── Ticker ─────────────────────────────────────────────────────────────────
function Ticker() {
  // Duplicate the row so the -50% translate loop is seamless.
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-row">
        {items.map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </div>
  );
}

// ── Stack ──────────────────────────────────────────────────────────────────
function Stack() {
  return (
    <section className="wrap" id="stack">
      <div className="sec-label">Stack · Layered architecture</div>
      <div className="stack">
        <div className="stack-copy reveal">
          <h2>
            Eight layers. <span className="serif">One mind.</span>
          </h2>
          <p>
            I work top-to-bottom — from Azure infrastructure down to the bus
            wires soldered onto an STM32. The seams between layers are where
            most projects fail; that's where I spend my time.
          </p>
          <p>
            Every system I ship treats hardware and software as a single
            design problem, not two adjacent teams sliding tickets at each
            other.
          </p>
        </div>
        <div className="stack-vis reveal">
          {STACK.map((l) => (
            <div className="stack-layer" key={l.num}>
              <span className="num">{l.num}</span>
              <span className="name">
                {l.name}
                <span className="sub">{l.sub}</span>
              </span>
              <span className="dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── KBlazor showcase ───────────────────────────────────────────────────────
function KBlazorSection() {
  const [view, setView] = useState("Table");
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortDir, setSortDir] = useState(1);

  const sortBy = (k) => {
    if (k === sortKey) setSortDir(-sortDir);
    else { setSortKey(k); setSortDir(1); }
  };

  const rows = useMemo(() => {
    const filtered = KB_ORDERS.filter((r) => {
      if (!q) return true;
      const s = q.toLowerCase();
      return r.id.toLowerCase().includes(s)
          || r.customer.toLowerCase().includes(s);
    });
    return filtered.slice().sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      if (av < bv) return -1 * sortDir;
      if (av > bv) return  1 * sortDir;
      return 0;
    });
  }, [q, sortKey, sortDir]);

  const money = (n) => "$" + n.toLocaleString("en-US",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section className="wrap" id="kblazor">
      <div className="sec-label">KBlazor · AI-ready Blazor components</div>
      <div className="pkg-head">
        <h2>
          One dataset. <span className="serif">Three views.</span> Zero config.
        </h2>
        <div className="meta">
          {KBLAZOR.badges.map((b) => (
            <div key={b.label}>
              <a className={"badge" + (b.amber ? " amber" : "")}
                 href={b.href} target="_blank" rel="noreferrer">
                {b.label} <span>→</span>
              </a>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>FlexTable · BasicEdit · DatePicker</div>
        </div>
      </div>

      <div className="kb-grid">
        <div className="code-card reveal">
          <div className="cc-head">
            <span className="lights"><i /><i /><i /></span>
            <span>Razor</span>
            <span className="name">Invoices.razor</span>
          </div>
          <div className="cc-body">
            {KBLAZOR.codeLines.map((ln, i) => (
              <div className="ln" key={i}>
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  {ln.tokens.map((tk, j) => tk.k
                    ? <span key={j} className={"tk-" + tk.k}>{tk.t}</span>
                    : <span key={j}>{tk.t}</span>)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-card reveal">
          <div className="dc-head">
            <span className="lights"><i /><i /><i /></span>
            <span>Live preview</span>
            <span className="name">FlexTable</span>
          </div>
          <div className="dc-body">
            <div className="dc-toolbar">
              <input value={q} placeholder="Search invoices…"
                     onChange={(e) => setQ(e.target.value)} />
              {["Table", "Card", "Kanban"].map((v) => (
                <button key={v}
                        className={"chip" + (view === v ? " on" : "")}
                        onClick={() => setView(v)}>{v}</button>
              ))}
            </div>

            {view === "Table" && (
              <table className="dc-table">
                <thead><tr>
                  {[
                    ["id", "Invoice"], ["customer", "Customer"],
                    ["amount", "Amount"], ["due", "Due"], ["status", "Status"],
                  ].map(([k, label]) => (
                    <th key={k} onClick={() => sortBy(k)}>
                      {label}
                      {sortKey === k && (
                        <span className="sort">{sortDir > 0 ? "↑" : "↓"}</span>
                      )}
                    </th>
                  ))}
                </tr></thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id}>
                      <td className="mono">{r.id}</td>
                      <td>{r.customer}</td>
                      <td className="mono" style={{ textAlign: "right" }}>{money(r.amount)}</td>
                      <td className="mono">{r.due}</td>
                      <td><span className={"status " + r.status}>● {r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {view === "Card" && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 1, background: "var(--line-soft)",
              }}>
                {rows.map((r) => (
                  <div key={r.id} style={{
                    background: "var(--bg)", padding: "14px 16px",
                    display: "flex", flexDirection: "column", gap: 4,
                  }}>
                    <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{r.id}</div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{r.customer}</div>
                    <div className="mono" style={{ fontSize: 13, color: "var(--text-2)" }}>
                      {money(r.amount)} · due {r.due}
                    </div>
                    <span className={"status " + r.status} style={{ marginTop: 4, alignSelf: "flex-start" }}>● {r.status}</span>
                  </div>
                ))}
              </div>
            )}

            {view === "Kanban" && (
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1, background: "var(--line-soft)",
              }}>
                {[
                  ["ok",   "On track"],
                  ["warn", "At risk"],
                  ["err",  "Overdue"],
                ].map(([k, label]) => (
                  <div key={k} style={{
                    background: "var(--bg)", padding: "12px 12px 16px",
                    display: "flex", flexDirection: "column", gap: 8,
                    minHeight: 220,
                  }}>
                    <div className="mono" style={{
                      fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
                      color: "var(--muted)", paddingBottom: 6,
                      borderBottom: "1px dashed var(--line-soft)",
                    }}>{label} · {rows.filter((r) => r.status === k).length}</div>
                    {rows.filter((r) => r.status === k).map((r) => (
                      <div key={r.id} style={{
                        padding: "10px 12px", border: "1px solid var(--line)",
                        borderRadius: "var(--radius)", background: "var(--surface)",
                        display: "flex", flexDirection: "column", gap: 2,
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 500 }}>{r.customer}</div>
                        <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>
                          {r.id} · {money(r.amount)}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="dc-foot">
            <span>{rows.length} of {KB_ORDERS.length}</span>
            <span>{view.toUpperCase()} view · live</span>
          </div>
        </div>
      </div>

      <div className="kb-features">
        {KBLAZOR.features.map((f) => (
          <div className="it" key={f.h}>
            <div className="lab">{f.lab}</div>
            <h4>{f.h}</h4>
            <p>{f.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Projects ───────────────────────────────────────────────────────────────
function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section className="wrap" id="projects">
      <div className="sec-label">Projects · Selected work</div>
      <h2 style={{ marginBottom: 36 }}>
        Things I've shipped <span className="serif">into production.</span>
      </h2>
      <div className="proj-list">
        {PROJECTS.map((p) => {
          const isOpen = open === p.num;
          return (
            <div key={p.num} className={"proj reveal" + (isOpen ? " open" : "")}
                 onClick={() => setOpen(isOpen ? null : p.num)}>
              <div className="num">{p.num}</div>
              <div className="title">
                <h3>{p.name}</h3>
                <div className="tagline">{p.tag}</div>
                <div className="proj-stack">
                  {p.stack.map((s) => <span key={s} className="tg">{s}</span>)}
                </div>
              </div>
              <div className="lede">{p.lede}</div>
              <div className="toggle">{isOpen ? "Close ▲" : "Read more ▼"}</div>
              <div className="proj-expand">
                <div>
                  <div className="proj-expand-inner">
                    <div>
                      <h4>Features</h4>
                      <ul>
                        {p.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4>Stack</h4>
                      <ul>
                        {p.stack.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Skills matrix ──────────────────────────────────────────────────────────
function Skills() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(SKILLS.map((s) => s.cat)))], []);
  const [cat, setCat] = useState("All");
  return (
    <section className="wrap" id="skills">
      <div className="sec-label">Skills · Toolbox</div>
      <div className="skills-head">
        <h2>What I <span className="serif">reach for.</span></h2>
        <div className="skills-filter" role="tablist">
          {cats.map((c) => (
            <button key={c} className={cat === c ? "on" : ""}
                    onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="skills-grid">
        {SKILLS.map((s, i) => {
          const hide = cat !== "All" && s.cat !== cat;
          return (
            <div key={s.nm} className={"skill" + (hide ? " hidden" : "")}>
              <div className="cat">{s.cat}</div>
              <div className="nm">{s.nm}</div>
              <div className="ix">{String(i + 1).padStart(2, "0")}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Services ───────────────────────────────────────────────────────────────
function Services() {
  return (
    <section className="wrap" id="services">
      <div className="sec-label">Services · How I help</div>
      <h2 style={{ marginBottom: 36 }}>
        Six ways to <span className="serif">put me to work.</span>
      </h2>
      <div className="svc-grid">
        {SERVICES.map((s) => (
          <div className="svc reveal" key={s.ix}>
            <div className="ix">{s.ix}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── About + Philosophy ─────────────────────────────────────────────────────
function About() {
  return (
    <section className="wrap" id="about">
      <div className="sec-label">About · Philosophy</div>
      <div className="about-grid">
        <div className="reveal">
          <h2>The <span className="serif">long version.</span></h2>
          {ABOUT.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="reveal">
          <h3 style={{ marginBottom: 8 }}>Operating principles</h3>
          <div className="phil-list">
            {PHILOSOPHY.map((t, i) => (
              <div className="it" key={i}>
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                <span className="tx">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Focus / current research ───────────────────────────────────────────────
function Focus() {
  return (
    <section className="wrap" id="focus">
      <div className="sec-label">Focus · Current research</div>
      <h2 style={{ marginBottom: 36 }}>
        What's on the bench <span className="serif">right now.</span>
      </h2>
      <div className="focus-grid">
        {FOCUS.map((f) => (
          <div className="focus-card reveal" key={f.h}>
            <div className="dotgrid" />
            <div className="lab">{f.lab}</div>
            <h4>{f.h}</h4>
            <p>{f.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="wrap contact" id="contact">
      <div className="sec-label">Contact · Say hello</div>
      <h2>
        Let's build <span className="serif">something.</span>
      </h2>
      <div className="contact-row">
        <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: "48ch" }}>
          Enterprise software, industrial automation, embedded development,
          Blazor applications, architecture consulting, or AI-augmented
          workflow systems — I'm always interested in challenging engineering
          problems and meaningful projects.
        </p>
        <div className="contact-links">
          {CONTACT.map((c) => (
            <a key={c.k} href={c.href} target="_blank" rel="noreferrer">
              <span className="k">{c.k}</span>
              <span className="v">{c.v}</span>
              <span className="arr">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-mark">
            Shawn <span className="serif">Lewis.</span>
            <span className="sub">{SITE.location}</span>
          </div>
          {FOOTER.cols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              <ul>
                {c.links.map((l) => (
                  <li key={l.t}>
                    <a href={l.href}
                       target={l.href.startsWith("http") ? "_blank" : undefined}
                       rel={l.href.startsWith("http") ? "noreferrer" : undefined}>
                      {l.t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {year} Shawn K. Lewis · All rights reserved</span>
          <span className="sig">{FOOTER.sig}</span>
          <span>v1.0 · {SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
function App() {
  const [theme, toggleTheme] = useTheme();
  useReveal();
  return (
    <>
      <TopNav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Ticker />
        <Stack />
        <KBlazorSection />
        <Projects />
        <Skills />
        <Services />
        <About />
        <Focus />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel title="Site tweaks" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
