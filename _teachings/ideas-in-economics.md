---
title: Ideas in Economics (Doing Economics)
description: A data-first "Doing Economics" gateway at FLAME University — six feature films and Nobel-winning research, split evenly into a microeconomics half and a macroeconomics half, each unit worked with real data. Builds the conceptual and empirical foundation for Microeconomics-I and Macroeconomics-I.
term: 2 Credits · Level 100
category: Undergraduate
importance: 0
---

<style>
/* ---- Ideas in Economics course page: colourful, native (shares the macro design) ---- */
.macro-outline {
  --mc-blue:   #5f74a0;   /* muted indigo — headers & structure */
  --mc-orange: #c0895e;   /* muted terracotta — sub-headers     */
  --mc-red:    #c98a97;   /* dusty rose — accents               */
  --mc-ink:    #4a4a4a;   /* readable text on pastel fills      */
  --mc-soft:   rgba(95, 116, 160, 0.08);
  max-width: 820px;
  margin: 0 auto;
}
.macro-outline table { margin-left: auto; margin-right: auto; }

/* Section headers */
.macro-outline h2 {
  color: var(--mc-blue);
  border-bottom: 2px solid var(--mc-blue);
  padding-bottom: 0.25rem;
  margin-top: 2.2rem;
  scroll-margin-top: 7.5rem;   /* clear the fixed navbar + sticky pill row on jump */
}

/* ---- Section jump-nav (sticky under the title) ---- */
.mc-nav {
  display: flex; flex-wrap: wrap; gap: 0.5rem;
  margin: 1.2rem 0 0.5rem;
  position: sticky; top: 4.5rem; z-index: 5;
  padding: 0.5rem 0;
  background: var(--global-bg-color);
  border-bottom: 1px solid var(--global-divider-color);
}
.mc-nav a {
  font-size: 0.9rem; font-weight: 600; text-decoration: none;
  color: #4a4a4a; border: 1px solid rgba(0,0,0,0.12);
  border-radius: 999px; padding: 0.4rem 0.95rem;
  transition: filter 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}
.mc-nav a:hover { filter: brightness(0.93); transform: translateY(-1px); }
.mc-nav a.active {
  box-shadow: 0 0 0 2px var(--mc-blue);
  border-color: transparent; filter: brightness(0.96);
}
/* Japanese pastel palette — sakura, matcha, fuji, asagi, yamabuki … */
.mc-nav a:nth-child(1) { background: #f7cfd8; }  /* 桜 sakura pink   */
.mc-nav a:nth-child(2) { background: #cde0c9; }  /* 抹茶 matcha      */
.mc-nav a:nth-child(3) { background: #d8cfe8; }  /* 藤 fuji purple   */
.mc-nav a:nth-child(4) { background: #a9d8de; }  /* 浅葱 asagi blue  */
.mc-nav a:nth-child(5) { background: #f7e3a1; }  /* 山吹 yamabuki    */
.mc-nav a:nth-child(6) { background: #f5c9a6; }  /* 珊瑚 coral peach */
.mc-nav a:nth-child(7) { background: #cbb8e0; }  /* 藤鼠 wisteria    */
.mc-nav a:nth-child(8) { background: #eeb4c8; }  /* 撫子 nadeshiko   */
.mc-nav a:nth-child(9) { background: #b7ddd0; }  /* 白緑 byakuroku   */
.mc-nav a:nth-child(10) { background: #bde0f5; } /* 空色 sorairo sky */
.macro-outline h3 { color: var(--mc-orange); margin-top: 1.5rem; scroll-margin-top: 7.5rem; }

/* Lede line under the title */
.macro-lede {
  font-size: 1.05rem;
  line-height: 1.6;
  border-left: 4px solid var(--mc-blue);
  background: var(--mc-soft);
  padding: 0.85rem 1.1rem;
  border-radius: 0 6px 6px 0;
}

/* Objective / outcome pill lists */
.macro-outline ul.pills { list-style: none; padding: 0; margin: 1rem 0 0; }
.macro-outline ul.pills li {
  position: relative; padding: 0.35rem 0 0.35rem 1.6rem;
}
.macro-outline ul.pills li::before {
  content: "▸"; position: absolute; left: 0; top: 0.35rem;
  color: var(--mc-orange); font-weight: 700;
}

/* ---- Topics & Schedule table ---- */
.mc-sched { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.95rem; }
.mc-sched th {
  background: #cdd6e8; color: var(--mc-ink); text-align: left;
  padding: 0.5rem 0.7rem;
}
.mc-sched td { padding: 0.45rem 0.7rem; border-bottom: 1px solid var(--global-divider-color); }
.mc-sched td:first-child { vertical-align: top; white-space: nowrap; font-weight: 500; }
/* Module cell carries the coloured edge that ties it to the topic cards */
.mc-sched td.mod-cell {
  vertical-align: top;
  border-left: 5px solid var(--mc-c, var(--mc-blue));
  background: color-mix(in srgb, var(--mc-c, var(--mc-blue)) 22%, transparent);
  padding-top: 0.6rem;
}
.mc-sched td.mod-cell .mod-head {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 0.6rem; flex-wrap: wrap;
}
.mc-sched td.mod-cell .mod-name { font-weight: 700; color: var(--mc-ink); }
.mc-sched td.mod-cell .mod-film {
  display: block; font-size: 0.85rem; margin-top: 0.25rem; color: var(--mc-ink);
}
.mc-sched td.mod-cell .mod-film .tag {
  display: inline-block; font-size: 0.74rem; font-weight: 700; color: var(--mc-ink);
  background: rgba(255,255,255,0.55); border-radius: 4px; padding: 0.05rem 0.45rem; margin-right: 0.3rem;
}
.mc-sched td.mod-cell .mod-hours {
  display: inline-block; font-size: 0.78rem; font-weight: 700; color: var(--mc-ink);
  background: var(--mc-c, var(--mc-blue));
  border-radius: 999px; padding: 0.1rem 0.65rem; white-space: nowrap;
}

/* ---- Course-materials matrix ---- */
.mc-matrix th:not(:first-child), .mc-matrix td:not(:first-child) { text-align: center; vertical-align: middle; }
.mc-matrix td.mod-cell { white-space: normal; }
.mc-matrix td.mod-cell .mod-no { font-weight: 700; color: var(--mc-ink); margin-right: 0.5rem; }
.mc-matrix td.mod-cell .mod-name { font-weight: 700; color: var(--mc-ink); }
.mc-matrix .na { color: var(--global-text-color-light); font-weight: 600; }
.mc-matrix a.yes { color: #2e7d32; font-weight: 700; font-size: 1.05rem; text-decoration: none; }
.mc-matrix a.yes:hover { color: #1b5e20; text-decoration: none; }

/* ---- Grading ---- */
.mc-grade-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 1rem; align-items: start; }
@media (max-width: 720px) { .mc-grade-wrap { grid-template-columns: 1fr; } }

/* Donut chart (component breakdown) — 40 / 30 / 20 / 10 */
.mc-donut-wrap { display: flex; align-items: center; gap: 1rem; flex-wrap: nowrap; margin-top: 0.6rem; }
.mc-donut {
  width: 130px; height: 130px; border-radius: 50%; flex: 0 0 auto; position: relative;
  background: conic-gradient(
    #f7e3a1 0 40%,      /* End-Term Project 40 */
    #a9d8de 40% 70%,    /* Mid-Term 30        */
    #cde0c9 70% 90%,    /* Problem Sets 20    */
    #d8cfe8 90% 100%);  /* Participation 10   */
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}
.mc-donut::after {
  content: ""; position: absolute; inset: 25px; border-radius: 50%;
  background: var(--global-bg-color);
}
.mc-donut .mc-donut-c {
  position: absolute; inset: 0; z-index: 1;
  display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1;
}
.mc-donut .mc-donut-c b { font-size: 1.1rem; color: var(--mc-blue); }
.mc-donut .mc-donut-c small { font-size: 0.68rem; color: var(--global-text-color-light); }
.mc-legend { list-style: none; padding: 0; margin: 0; min-width: 12rem; }
.mc-legend li { display: flex; align-items: center; gap: 0.55rem; padding: 0.22rem 0; }
.mc-legend .sw { width: 0.85rem; height: 0.85rem; border-radius: 3px; flex: 0 0 auto; }
.mc-legend .pct { margin-left: auto; font-weight: 700; padding-left: 1rem; }

/* Benchmark ladder (grading scale) */
.gs-list { margin-top: 0.6rem; }
.gs-row { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem; }
.gs-grade { flex: 0 0 1.9rem; font-weight: 700; text-align: right; }
.gs-track { flex: 1 1 auto; height: 1.45rem; border-radius: 5px; background: var(--mc-soft); }
.gs-fill {
  height: 100%; border-radius: 5px; display: flex; align-items: center; justify-content: flex-end;
  padding-right: 0.45rem; font-size: 0.74rem; font-weight: 700; color: var(--mc-ink);
  min-width: 2.4rem;
}

/* ---- Readings rows ---- */
.mc-readings { list-style: none; padding: 0; margin: 1rem 0 0; }
.mc-readings li {
  padding: 0.55rem 0; border-bottom: 1px solid var(--global-divider-color);
}
.mc-readings li .tag {
  display: inline-block; font-size: 0.74rem; font-weight: 700; color: var(--mc-ink); border-radius: 4px;
  padding: 0.1rem 0.5rem; white-space: nowrap; margin-right: 0.5rem;
}
.mc-readings li .tag.req { background: #eeb4c8; }  /* nadeshiko */
.mc-readings li .tag.sup { background: #f7e3a1; }  /* yamabuki  */
.mc-readings li .tag.ref { background: #a9d8de; }  /* asagi     */

/* ---- Policy accordions ---- */
.macro-outline details.mc-acc {
  border: 1px solid var(--global-divider-color);
  border-radius: 8px; padding: 0.4rem 1rem; margin-top: 0.8rem;
}
.macro-outline details.mc-acc > summary {
  cursor: pointer; font-weight: 600; color: var(--mc-blue); padding: 0.4rem 0;
}

/* ---- Course-site button ---- */
.mc-pdf-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #cbb8e0; color: var(--mc-ink) !important; text-decoration: none;
  padding: 0.55rem 1.1rem; border-radius: 6px; font-weight: 700;
  box-shadow: 0 2px 8px rgba(95,116,160,0.25); margin-top: 0.5rem;
}
.mc-pdf-btn:hover { filter: brightness(0.94); }

/* ---- Dark-mode toning ---- */
html[data-theme="dark"] .macro-outline {
  --mc-blue:   #9fb0d6;
  --mc-orange: #d6a985;
  --mc-soft:   rgba(159, 176, 214, 0.14);
}
html[data-theme="dark"] .mc-nav a,
html[data-theme="dark"] .mc-readings li .tag,
html[data-theme="dark"] .mc-legend .sw,
html[data-theme="dark"] .mc-donut,
html[data-theme="dark"] .gs-fill,
html[data-theme="dark"] .mc-sched th,
html[data-theme="dark"] .mc-sched td.mod-cell,
html[data-theme="dark"] .mc-pdf-btn {
  filter: brightness(0.82) saturate(0.85);
}
html[data-theme="dark"] .mc-nav a { border-color: rgba(255,255,255,0.14); }
</style>

<div class="macro-outline" markdown="1">

<nav class="mc-nav">
  <a href="#basic-information">Info</a>
  <a href="#teaching-philosophy" style="background:#cbb8e0;">Philosophy</a>
  <a href="#objectives">Objectives</a>
  <a href="#course-outcomes">Outcomes</a>
  <a href="#schedule">Micro &amp; Macro</a>
  <a href="#prepares">Where it Leads</a>
  <a href="#grading">Grading</a>
  <a href="#readings">Readings &amp; Data</a>
  <a href="#course-policies">Policies</a>
  <a href="#materials">Modules &amp; Materials</a>
  <a href="https://ravikirannaik.github.io/ideas-in-economics/" target="_blank" rel="noopener" style="background:#f5c9a6;">Course Site ↗</a>
</nav>

## Basic Information

| | |
| :-- | :-- |
| **Course Title** | Ideas in Economics (Doing Economics) |
| **Course Code** | ECON 123 |
| **Credits** | 2 |
| **Level** | 100 (Introductory) |
| **Lecture–Tutorial–Practical** | 2-0-0 |
| **Contact Hours** | 18 |
| **Prerequisites** | None |
| **Program** | Under-Graduate |
| **Internal Assessment** | 60% (Mid-Term, Problem Sets, Participation) |
| **End-Term Empirical Project** | 40% |
| **Instructor** | Dr. Ravikiran Naik |
| **Contact** | [ravikiran.naik@flame.edu.in](mailto:ravikiran.naik@flame.edu.in) |
| **Office** | Room 108, Amrita Shergill Building |
| **Office Hours** | <a href="https://calendly.com/ravikiran-naik-flame/meet-dr-ravikiran">Book your slot</a> |
| **Course Website** | <a href="https://ravikirannaik.github.io/ideas-in-economics/">ravikirannaik.github.io/ideas-in-economics</a> |

<small>*I reserve the right to make changes to this syllabus, including topics and due dates. Any changes will be announced as early as possible. Students are expected to read this outline in full.*</small>

<p class="macro-lede">
Economics is a way of understanding the world — and the fastest way to learn it is to <em>do</em> it. Each unit
opens with a <strong>feature film</strong> and a <strong>Nobel Prize-winning idea</strong>, then puts that idea to work on
<strong>real data</strong>. The course is split evenly into a <strong>microeconomics half</strong> (choice, firms, markets, market
failure) and a <strong>macroeconomics half</strong> (measuring the economy, growth, money and crises), so it builds the
conceptual <em>and</em> empirical foundation you carry into <strong>Microeconomics-I (ECON 201)</strong> and
<strong>Macroeconomics-I (ECON 202)</strong>.
</p>

<a class="mc-pdf-btn" href="https://ravikirannaik.github.io/ideas-in-economics/" target="_blank" rel="noopener">🎬 Open the full interactive course site →</a>

## Teaching Philosophy {#teaching-philosophy}

I teach introductory economics the way most people first meet it — through stories — but I don't stop there. A film gets you to the economist's questions (*What are the trade-offs? Who gains, who loses? What do the data actually say?*); then we answer them with **real data**. Every unit ends with a short "Doing Economics" exercise on an actual dataset — Indian wherever possible. My emphasis is **economic reasoning and evidence over memorisation**: films supply the intuition, a Nobel laureate's research supplies the rigour, and the data work gives you a skill — reading, plotting, and interpreting real numbers — that you carry straight into Microeconomics-I and Macroeconomics-I.

## Objectives

<ul class="pills">
<li>Introduce core micro- and macroeconomic concepts through accessible film narratives, connecting abstract ideas to concrete situations.</li>
<li>Develop economic reasoning <em>and</em> basic empirical skill — reading, plotting, and interpreting real data to answer an economic question.</li>
<li>Ground each unit in landmark Nobel Prize-winning research, linking popular stories to frontier scholarship.</li>
<li>Apply both halves to the Indian context — prices, labour, informality, poverty, growth, and the environment — using Indian datasets.</li>
<li>Build the conceptual and empirical foundation for further study in Microeconomics-I and Macroeconomics-I.</li>
</ul>

## Course Outcomes

By the end of the course, students should be able to:

<ul class="pills">
<li>Identify and explain foundational concepts — scarcity, opportunity cost, supply and demand, market equilibrium, and externalities.</li>
<li>Analyse economic behaviour and institutional dynamics as portrayed in feature films, connecting narrative to formal economic reasoning.</li>
<li>Evaluate the contributions of Nobel Prize-winning economists and relate their research to real-world phenomena and policy debates.</li>
<li>Apply economic frameworks to contemporary issues in the Indian economy — informality, labour markets, poverty, and environmental challenges.</li>
</ul>

<details class="mc-acc" markdown="0">
  <summary>Outcomes mapped to Bloom's Taxonomy</summary>
  <table class="mc-sched" style="margin-top:0.8rem;">
    <thead><tr><th>#</th><th>Learning Outcome</th><th>REM</th><th>UND</th><th>APP</th><th>ANA</th><th>EVA</th><th>CRE</th></tr></thead>
    <tbody>
      <tr><td>1</td><td style="white-space:normal;">Foundational concepts (scarcity, opportunity cost, supply &amp; demand, equilibrium, externalities)</td><td>H</td><td>H</td><td>M</td><td>L</td><td>—</td><td>—</td></tr>
      <tr><td>2</td><td style="white-space:normal;">Analyse behaviour &amp; institutions in film, linking narrative to formal reasoning</td><td>—</td><td>M</td><td>H</td><td>H</td><td>M</td><td>—</td></tr>
      <tr><td>3</td><td style="white-space:normal;">Evaluate Nobel laureates' contributions &amp; relate to policy debates</td><td>—</td><td>M</td><td>M</td><td>H</td><td>H</td><td>L</td></tr>
      <tr><td>4</td><td style="white-space:normal;">Apply economic frameworks to the Indian economy</td><td>—</td><td>L</td><td>H</td><td>H</td><td>M</td><td>M</td></tr>
    </tbody>
  </table>
  <small>REM = Remember · UND = Understand · APP = Apply · ANA = Analyse · EVA = Evaluate · CRE = Create. H = High, M = Medium, L = Low, — = Not applicable.</small>
</details>

## Course Structure — a Micro half &amp; a Macro half {#schedule}

Six units, three contact hours each. The first three build the **microeconomics** foundation (→ ECON 201); the second three build the **macroeconomics** foundation (→ ECON 202). Every unit = a film + a Nobel idea + a short **"Doing Economics" exercise on real data**.

<p style="margin:1.2rem 0 0.4rem;font-weight:700;color:var(--mc-blue);">◀ MICRO HALF — how people &amp; firms decide <span style="font-weight:500;color:var(--global-text-color-light);">(prepares for Microeconomics-I)</span></p>

<table class="mc-sched">
  <thead>
    <tr><th>Unit</th><th>Film · Nobel · what you'll do with data</th></tr>
  </thead>
  <tbody>
    <tr><td>Unit 1</td><td class="mod-cell" style="--mc-c:#cde0c9;"><span class="mod-head"><span class="mod-name">Choice, Preferences &amp; Strategy</span><span class="mod-hours">3 hours</span></span><span class="mod-film"><span class="tag">🎬 Film</span><em>A Beautiful Mind</em> (2001) &nbsp;·&nbsp; <span class="tag">🏅 Nobel</span>John Nash</span><ul><li>Scarcity, opportunity cost, preferences, utility; rational choice &amp; strategic interaction — the idea of equilibrium</li><li><strong>📊 Data:</strong> run a class game (prisoner's dilemma / public goods); compute cooperation vs. the Nash prediction</li></ul></td></tr>
    <tr><td>Unit 2</td><td class="mod-cell" style="--mc-c:#a9d8de;"><span class="mod-head"><span class="mod-name">Firms, Markets &amp; Competition</span><span class="mod-hours">3 hours</span></span><span class="mod-film"><span class="tag">🎬 Film</span><em>Margin Call</em> (2011) &nbsp;·&nbsp; <span class="tag">🏅 Nobel</span>Paul Krugman</span><ul><li>Supply, demand, prices &amp; market clearing; production &amp; costs; competition and consumer/producer surplus</li><li><strong>📊 Data:</strong> pull daily mandi prices (Agmarknet) through a supply shock and tell the demand–supply story</li></ul></td></tr>
    <tr><td>Unit 3</td><td class="mod-cell" style="--mc-c:#b7ddd0;"><span class="mod-head"><span class="mod-name">Externalities, Welfare &amp; Market Failure</span><span class="mod-hours">3 hours</span></span><span class="mod-film"><span class="tag">🎬 Film</span><em>Erin Brockovich</em> (2000) &nbsp;·&nbsp; <span class="tag">🏅 Nobel</span>Elinor Ostrom</span><ul><li>Externalities, public goods, the commons; welfare loss and the case for policy</li><li><strong>📊 Data:</strong> plot your city's air quality (CPCB) against a pollution source; "price" the externality</li></ul></td></tr>
  </tbody>
</table>

<p style="margin:1.6rem 0 0.4rem;font-weight:700;color:var(--mc-blue);">▶ MACRO HALF — how the whole economy behaves <span style="font-weight:500;color:var(--global-text-color-light);">(prepares for Macroeconomics-I)</span></p>

<table class="mc-sched">
  <thead>
    <tr><th>Unit</th><th>Film · Nobel · what you'll do with data</th></tr>
  </thead>
  <tbody>
    <tr><td>Unit 4</td><td class="mod-cell" style="--mc-c:#f5c9a6;"><span class="mod-head"><span class="mod-name">Measuring the Economy &amp; Development</span><span class="mod-hours">3 hours</span></span><span class="mod-film"><span class="tag">🎬 Film</span><em>Slumdog Millionaire</em> (2008) &nbsp;·&nbsp; <span class="tag">🏅 Nobel</span>Duflo &amp; Banerjee</span><ul><li>GDP, CPI, unemployment — what the headline numbers mean; the informal economy; evidence-based development</li><li><strong>📊 Data:</strong> measure poverty / income from PLFS or World Bank data — and ask what GDP leaves out</li></ul></td></tr>
    <tr><td>Unit 5</td><td class="mod-cell" style="--mc-c:#f7e3a1;"><span class="mod-head"><span class="mod-name">Growth &amp; Productivity</span><span class="mod-hours">3 hours</span></span><span class="mod-film"><span class="tag">🎬 Film</span><em>Moneyball</em> (2011) &nbsp;·&nbsp; <span class="tag">🏅 Nobel</span>Robert Solow</span><ul><li>Production and productivity at the economy level; data-driven decisions; what drives long-run growth</li><li><strong>📊 Data:</strong> plot India vs. South Korea GDP per capita since 1950 (Maddison); discuss catch-up</li></ul></td></tr>
    <tr><td>Unit 6</td><td class="mod-cell" style="--mc-c:#f7cfd8;"><span class="mod-head"><span class="mod-name">Money, Finance &amp; Crises</span><span class="mod-hours">3 hours</span></span><span class="mod-film"><span class="tag">🎬 Film</span><em>The Big Short</em> (2015) &nbsp;·&nbsp; <span class="tag">🏅 Nobel</span>Richard Thaler</span><ul><li>Money, asset markets &amp; prices; bubbles, business cycles; how central banks (the RBI) respond</li><li><strong>📊 Data:</strong> trace a house-price bubble (FRED / RBI index) and the policy response that followed</li></ul></td></tr>
  </tbody>
</table>

<p style="margin-top:0.9rem;"><em>Total contact hours: 18.</em> Each unit also carries a dedicated <strong>Indian Context</strong> essay. The six exercises are rehearsals for the <strong>End-Term Empirical Project</strong>.</p>

## Where it Leads — Microeconomics-I &amp; Macroeconomics-I {#prepares}

This course is designed to flow into the Year-2 core. The micro half front-loads the ideas ECON 201 builds on; the macro half does the same for ECON 202. The optimisation *mathematics* for those courses is carried by **ECON 122 (Mathematics for Economics)** — this course gives you the concepts and the data skill, not the calculus.

<table class="mc-sched" style="max-width:680px;">
  <thead>
    <tr><th>From this course…</th><th>…into the core</th></tr>
  </thead>
  <tbody>
    <tr><td class="mod-cell" style="--mc-c:#cde0c9;">Choice, preferences, markets, competition, externalities &amp; welfare</td><td style="white-space:normal;"><strong>Microeconomics-I (ECON 201)</strong> — consumer theory, production &amp; costs, perfect competition</td></tr>
    <tr><td class="mod-cell" style="--mc-c:#f5c9a6;">Measuring the economy, growth &amp; productivity, money &amp; crises</td><td style="white-space:normal;"><strong>Macroeconomics-I (ECON 202)</strong> — GDP/CPI/unemployment, productivity &amp; output, money, IS–LM / AS–AD</td></tr>
  </tbody>
</table>

## Grading

The course rewards steady engagement across the semester, culminating in an original empirical project. Problem sets build analytical skills throughout; the mid-term tests conceptual mastery of the first half; the end-term project asks you to synthesise the whole course into an evidence-based analysis.

<div class="mc-grade-wrap">
  <div class="mc-chart">
    <strong>Component breakdown</strong>
    <div class="mc-donut-wrap">
      <div class="mc-donut"><span class="mc-donut-c"><b>40%</b><small>Project</small></span></div>
      <ul class="mc-legend">
        <li><span class="sw" style="background:#f7e3a1;"></span> End-Term Empirical Project <span class="pct">40%</span></li>
        <li><span class="sw" style="background:#a9d8de;"></span> Mid-Term Examination <span class="pct">30%</span></li>
        <li><span class="sw" style="background:#cde0c9;"></span> Problem Sets <span class="pct">20%</span></li>
        <li><span class="sw" style="background:#d8cfe8;"></span> Class Participation <span class="pct">10%</span></li>
      </ul>
    </div>
  </div>
  <div class="mc-bench">
    <strong>Grading scale</strong>
    <div class="gs-list">
      <div class="gs-row"><span class="gs-grade">O</span><div class="gs-track"><div class="gs-fill" style="width:90%;background:#b7ddd0;">90+</div></div></div>
      <div class="gs-row"><span class="gs-grade">A+</span><div class="gs-track"><div class="gs-fill" style="width:80%;background:#cde0c9;">80+</div></div></div>
      <div class="gs-row"><span class="gs-grade">A</span><div class="gs-track"><div class="gs-fill" style="width:70%;background:#f7e3a1;">70+</div></div></div>
      <div class="gs-row"><span class="gs-grade">B+</span><div class="gs-track"><div class="gs-fill" style="width:60%;background:#f5c9a6;">60+</div></div></div>
      <div class="gs-row"><span class="gs-grade">B</span><div class="gs-track"><div class="gs-fill" style="width:50%;background:#a9d8de;">50+</div></div></div>
      <div class="gs-row"><span class="gs-grade">C</span><div class="gs-track"><div class="gs-fill" style="width:40%;background:#d8cfe8;">40+</div></div></div>
      <div class="gs-row"><span class="gs-grade">P</span><div class="gs-track"><div class="gs-fill" style="width:35%;background:#eeb4c8;">35+</div></div></div>
    </div>
  </div>
</div>

<table class="mc-sched" style="max-width:640px;margin-top:1.3rem;">
  <thead><tr><th>Component</th><th>Weight</th><th>What it assesses</th></tr></thead>
  <tbody>
    <tr><td>End-Term Empirical Project</td><td>40%</td><td style="white-space:normal;">Group project applying course concepts to a real-world question, with data analysis and a written report.</td></tr>
    <tr><td>Mid-Term Examination</td><td>30%</td><td style="white-space:normal;">Written exam over the micro half (Units 1–3): concepts, short-answer problems, and data interpretation.</td></tr>
    <tr><td>Problem Sets</td><td>20%</td><td style="white-space:normal;">Four to five sets — one short "Doing Economics" data exercise per unit.</td></tr>
    <tr><td>Class Participation</td><td>10%</td><td style="white-space:normal;">Active engagement in discussions, film screenings, and in-class activities.</td></tr>
  </tbody>
</table>

## Readings, Resources &amp; Data {#readings}

No single textbook is required. Two free, open-access resources run through the whole course — one for concepts, one for the data work — alongside accessible trade books, the Nobel archive, and Indian datasets. Specific chapters are assigned per unit and posted on MOODLE.

### The two engines

<ul class="mc-readings">
  <li><span class="tag req">Concepts</span><a href="https://www.core-econ.org/" target="_blank" rel="noopener">CORE Econ — <em>The Economy 2.0</em></a>. Free, open-access; the rigorous conceptual backbone behind every unit, micro and macro.</li>
  <li><span class="tag req">Data</span><a href="https://www.core-econ.org/" target="_blank" rel="noopener">CORE Econ — <em>Doing Economics</em></a>. Free empirical-projects book; each project is a ready-made real-data exercise (the model this course is named after).</li>
</ul>

### Best reading per unit

<ul class="mc-readings">
  <li><span class="tag sup">Micro · U1</span>Dixit &amp; Nalebuff, <em>The Art of Strategy</em>; Thaler, <em>Misbehaving</em> (behavioural thread).</li>
  <li><span class="tag sup">Micro · U2</span>Harford, <em>The Undercover Economist</em> (prices &amp; markets); Krugman, selected essays.</li>
  <li><span class="tag sup">Micro · U3</span>Ostrom, <em>Governing the Commons</em> (selections); Hardin, "The Tragedy of the Commons," <em>Science</em> (1968).</li>
  <li><span class="tag sup">Macro · U4</span>Banerjee &amp; Duflo, <em>Poor Economics</em>.</li>
  <li><span class="tag sup">Macro · U5</span>Lewis, <em>Moneyball</em> (excerpt); C. I. Jones, <em>Introduction to Economic Growth</em> (selections).</li>
  <li><span class="tag sup">Macro · U6</span>Lewis, <em>The Big Short</em> (excerpt); Thaler, <em>Misbehaving</em> (bubbles).</li>
</ul>

### General readers &amp; reference

<ul class="mc-readings">
  <li><span class="tag sup">Reader</span>Chang, H.-J. (2014), <em>Economics: The User's Guide</em>; Frank, R. H. (2011), <em>The Economic Naturalist</em>.</li>
  <li><span class="tag sup">Film &amp; Econ</span>Staley, S. R. (2018), <em>Lights! Camera! Econ!</em>; Simpson, D. (2023), <em>Striding with Economic Giants</em>.</li>
  <li><span class="tag ref">Nobel</span><a href="https://www.nobelprize.org/" target="_blank" rel="noopener">nobelprize.org</a> — lectures and popular backgrounds for Nash (1994), Krugman (2008), Ostrom (2009), Banerjee–Duflo–Kremer (2019), Solow (1987), Thaler (2017).</li>
</ul>

### Data sources you'll use

<ul class="mc-readings">
  <li><span class="tag ref">India</span><a href="https://www.mospi.gov.in/" target="_blank" rel="noopener">MoSPI — PLFS &amp; NSS</a> · <a href="https://dbie.rbi.org.in/" target="_blank" rel="noopener">RBI DBIE</a> · <a href="https://data.gov.in/" target="_blank" rel="noopener">data.gov.in / Agmarknet</a> · <a href="https://cpcb.nic.in/" target="_blank" rel="noopener">CPCB air quality</a>.</li>
  <li><span class="tag ref">Global</span><a href="https://ourworldindata.org/" target="_blank" rel="noopener">Our World in Data</a> · <a href="https://www.gapminder.org/" target="_blank" rel="noopener">Gapminder</a> · World Bank, FRED, Maddison Project.</li>
</ul>

<small>Tooling is light — spreadsheets (Excel/Google Sheets) are enough; a gentle optional introduction to Python/R is offered for the keen.</small>

## Course Policies

### Suggested Pedagogy

Each unit opens with a feature-film screening (or assigned viewing), then unpacks the embedded economics through guided discussion and worked examples, and closes with a short **"Doing Economics" exercise on real data**. Nobel-winning research connects popular stories to frontier scholarship; browser-based simulations let students experiment with supply and demand, externalities, and game theory in real time; and Indian Context essays and datasets ground the material locally.

### Attendance &amp; Participation

A **minimum of 75% attendance** is required to be eligible for the End-Term assessment, per FLAME University policy. Participation is graded on engagement in discussions, film screenings, and in-class activities — the goal is to think out loud, not to be "tested." Be kind and respectful when addressing others.

### Assessments &amp; Late Submission

- **Problem Sets (20%)** — four to five sets distributed across the semester; applied economic reasoning on scenarios, data, and film content.
- **Mid-Term Examination (30%)** — covers the **micro half (Units 1–3)**; conceptual questions, short-answer problems, and data interpretation.
- **End-Term Empirical Project (40%)** — a group "Doing Economics" study applying course concepts to a real-world question on real data, with a written report.

**Deadlines are firm.** Late submissions lose **10% of the component's marks per day** and are not accepted more than three days past the deadline, except with a documented, valid reason discussed in advance.

### Academic Integrity

**All work you submit must be your own.** Plagiarism, unauthorised collusion, fabrication of results, and contract cheating are serious violations handled under FLAME University's academic-integrity regulations. Whenever you draw on a source — a textbook, article, dataset, film, or website — cite it clearly and consistently. If you are unsure what needs a citation, ask before submitting.

### Use of Generative AI

Generative-AI tools may **not** be used to produce any part of your graded submissions — problem sets, the empirical project report, or exam answers — unless I explicitly permit it for a given task; doing otherwise is treated as an academic-integrity violation. You are, however, **encouraged to use AI for your own learning** — to explain difficult concepts, test your understanding, or explore ideas outside assessed work. AI tools make confident mistakes, so **verifying anything they tell you is your own responsibility**: treat their output as a starting point to check against the readings and lectures, never as an authoritative source.

### Student Wellbeing &amp; Accessibility

**Your well-being matters more than any single grade.** Students with a disability or any condition affecting participation or assessment are entitled to **reasonable accommodations** — contact the relevant FLAME student-support office and me, in confidence, as early as possible. If personal, health, or financial difficulties are affecting your studies, please reach out; seeking help early will never count against you.

## Modules &amp; Materials {#materials}

The full course lives on the interactive site — every module has an overview, a scene-by-scene **film analysis**, a **Nobel focus** biography, a self-assessment **quiz**, and resources. The **Indian Context** essays and **30+ browser simulations** are linked there too.

<table class="mc-sched mc-matrix">
  <thead>
    <tr><th>Module</th><th>Overview</th><th>Film Analysis</th><th>Nobel Focus</th><th>Quiz</th></tr>
  </thead>
  <tbody>
    <tr><td colspan="5" style="background:var(--mc-soft);font-weight:700;color:var(--mc-blue);">◀ Micro half (→ ECON 201)</td></tr>
    <tr>
      <td class="mod-cell" style="--mc-c:#cde0c9;"><span class="mod-no">U1</span><span class="mod-name">Choice, Preferences &amp; Strategy</span></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/02-incentives-behavior/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/02-incentives-behavior/film-analysis/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/02-incentives-behavior/nobel-focus/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/02-incentives-behavior/quiz/" target="_blank" rel="noopener">&#10003; Open</a></td>
    </tr>
    <tr>
      <td class="mod-cell" style="--mc-c:#a9d8de;"><span class="mod-no">U2</span><span class="mod-name">Firms, Markets &amp; Competition</span></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/03-markets-labor/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/03-markets-labor/film-analysis/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/03-markets-labor/nobel-focus/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/03-markets-labor/quiz/" target="_blank" rel="noopener">&#10003; Open</a></td>
    </tr>
    <tr>
      <td class="mod-cell" style="--mc-c:#b7ddd0;"><span class="mod-no">U3</span><span class="mod-name">Externalities, Welfare &amp; Market Failure</span></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/06-environment-public/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/06-environment-public/film-analysis/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/06-environment-public/nobel-focus/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/06-environment-public/quiz/" target="_blank" rel="noopener">&#10003; Open</a></td>
    </tr>
    <tr><td colspan="5" style="background:var(--mc-soft);font-weight:700;color:var(--mc-blue);">▶ Macro half (→ ECON 202)</td></tr>
    <tr>
      <td class="mod-cell" style="--mc-c:#f5c9a6;"><span class="mod-no">U4</span><span class="mod-name">Measuring the Economy &amp; Development</span></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/04-poverty-inequality/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/04-poverty-inequality/film-analysis/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/04-poverty-inequality/nobel-focus/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/04-poverty-inequality/quiz/" target="_blank" rel="noopener">&#10003; Open</a></td>
    </tr>
    <tr>
      <td class="mod-cell" style="--mc-c:#f7e3a1;"><span class="mod-no">U5</span><span class="mod-name">Growth &amp; Productivity</span></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/05-innovation-growth/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/05-innovation-growth/film-analysis/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/05-innovation-growth/nobel-focus/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/05-innovation-growth/quiz/" target="_blank" rel="noopener">&#10003; Open</a></td>
    </tr>
    <tr>
      <td class="mod-cell" style="--mc-c:#f7cfd8;"><span class="mod-no">U6</span><span class="mod-name">Money, Finance &amp; Crises</span></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/01-economic-thinking/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/01-economic-thinking/film-analysis/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/01-economic-thinking/nobel-focus/" target="_blank" rel="noopener">&#10003; Open</a></td>
      <td><a class="yes" href="https://ravikirannaik.github.io/ideas-in-economics/modules/01-economic-thinking/quiz/" target="_blank" rel="noopener">&#10003; Open</a></td>
    </tr>
  </tbody>
</table>

<p style="margin-top:0.9rem;"><strong>Also on the course site:</strong>
<a href="https://ravikirannaik.github.io/ideas-in-economics/indian-context/" target="_blank" rel="noopener">Indian Context essays</a> (informal economy · GST &amp; markets · NREGA &amp; poverty · Digital India · climate commons) ·
<a href="https://ravikirannaik.github.io/ideas-in-economics/sims/" target="_blank" rel="noopener">interactive simulations</a> ·
<a href="https://ravikirannaik.github.io/ideas-in-economics/glossary/" target="_blank" rel="noopener">glossary (120+ terms)</a>.</p>

<blockquote style="max-width:640px;margin:3rem auto 0;padding:0.25rem 0 0.25rem 1.25rem;border-left:3px solid var(--mc-blue);font-size:1.05rem;line-height:1.7;color:var(--mc-ink);">
  <p style="margin:0 0 0.5rem;">Economic thinking is not a collection of facts to memorise. It is a lens — a way of looking at everyday situations and asking: what are the trade-offs? Who gains? Who loses? And what incentives are shaping behaviour?</p>
</blockquote>

</div>

<script>
(function () {
  var nav = document.querySelector('.mc-nav');
  if (!nav || !('IntersectionObserver' in window)) return;
  var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
  var map = {};
  var targets = links.map(function (a) {
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return null;
    var el = document.getElementById(href.slice(1));
    if (el) map[el.id] = a;
    return el;
  }).filter(Boolean);
  if (!targets.length) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var a = map[e.target.id];
      if (!a) return;
      links.forEach(function (l) { l.classList.remove('active'); l.removeAttribute('aria-current'); });
      a.classList.add('active');
      a.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  targets.forEach(function (t) { obs.observe(t); });
})();
</script>
