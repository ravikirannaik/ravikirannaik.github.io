---
title: Macroeconomics-I (ECON 202)
description: Undergraduate Macroeconomics-I at FLAME University, Monsoon 2026 — GDP, CPI, and unemployment; productivity and output; consumption, saving and investment; money and prices; and the IS-LM / AS-AD general-equilibrium framework.
term: Monsoon 2026-27
category: Undergraduate
importance: 0
---

<style>
/* ---- Macroeconomics-I course page: colourful, native (no embedded PDF) ---- */
.macro-outline {
  --mc-blue:   #1f5c8b;   /* module / section headers   */
  --mc-orange: #d98b2b;   /* sub-headers                */
  --mc-red:    #c0392b;   /* warnings & accents         */
  --mc-soft:   rgba(31, 92, 139, 0.06);
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
  scroll-margin-top: 5rem;   /* clear the fixed navbar on jump */
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
  font-size: 0.82rem; font-weight: 600; text-decoration: none;
  color: #4a4a4a; border: 1px solid transparent;
  border-radius: 999px; padding: 0.22rem 0.85rem;
  transition: filter 0.15s ease, transform 0.15s ease;
}
.mc-nav a:hover { filter: brightness(0.93); transform: translateY(-1px); }
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
.macro-outline h3 { color: var(--mc-orange); margin-top: 1.5rem; }

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

/* ---- Module cards (Topics Covered) ---- */
.mc-modules { display: grid; gap: 1rem; margin-top: 1rem; }
.mc-card {
  border: 1px solid var(--global-divider-color);
  border-left: 6px solid var(--mc-c, var(--mc-blue));
  border-radius: 8px;
  padding: 1rem 1.2rem;
  background: var(--global-card-bg-color, var(--global-bg-color));
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
}
.mc-card .mc-head {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 0.75rem; flex-wrap: wrap;
}
.mc-card .mc-title { font-weight: 700; color: var(--mc-c, var(--mc-blue)); font-size: 1.08rem; }
.mc-card .mc-hours {
  font-size: 0.8rem; font-weight: 600; color: #fff;
  background: var(--mc-c, var(--mc-blue));
  border-radius: 999px; padding: 0.1rem 0.6rem; white-space: nowrap;
}
.mc-card ul { margin: 0.6rem 0 0; padding-left: 1.1rem; }
.mc-card ul li { padding: 0.12rem 0; }
.mc-card .mc-slide { margin-top: 0.7rem; font-size: 0.9rem; }
.mc-card .mc-slide a { margin-right: 0.9rem; font-weight: 600; }
.mc-card .mc-soon { color: var(--global-text-color-light); font-style: italic; }

/* ---- Schedule table ---- */
.mc-sched { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.95rem; }
.mc-sched th {
  background: var(--mc-blue); color: #fff; text-align: left;
  padding: 0.5rem 0.7rem;
}
.mc-sched td { padding: 0.45rem 0.7rem; border-bottom: 1px solid var(--global-divider-color); }
.mc-sched tbody tr:nth-child(odd) { background: var(--mc-soft); }
.mc-badge {
  display: inline-block; font-size: 0.78rem; font-weight: 700;
  border-radius: 4px; padding: 0.08rem 0.5rem; color: #fff;
}
.mc-badge.quiz { background: #29a3d6; }
.mc-badge.exam { background: var(--mc-red); }
.mc-badge.ps   { background: var(--mc-orange); }
.mc-badge.rev  { background: #6a8f3d; }

/* ---- Grading ---- */
.mc-grade-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem; }
@media (max-width: 720px) { .mc-grade-wrap { grid-template-columns: 1fr; } }
.mc-weights li, .mc-scale li { list-style: none; }
.mc-weights ul, .mc-scale ul { padding: 0; margin: 0.5rem 0 0; }
.mc-weights li {
  display: flex; align-items: center; gap: 0.6rem; padding: 0.25rem 0;
}
.mc-weights .dot { width: 0.9rem; height: 0.9rem; border-radius: 3px; flex: 0 0 auto; }
.mc-weights .pct { margin-left: auto; font-weight: 700; }
.mc-scale li {
  display: flex; align-items: center; color: #fff; font-weight: 600;
  padding: 0.3rem 0.7rem; margin-bottom: 3px; border-radius: 4px;
}
.mc-scale .min { margin-left: auto; font-weight: 400; font-size: 0.9rem; }

/* ---- Textbook rows ---- */
.mc-book { display: flex; gap: 1rem; align-items: flex-start; margin: 0.8rem 0; }
.mc-book .tag {
  font-size: 0.78rem; font-weight: 700; color: #fff; border-radius: 4px;
  padding: 0.12rem 0.55rem; white-space: nowrap; margin-top: 0.15rem;
}
.mc-book .tag.req { background: var(--mc-red); }
.mc-book .tag.sup { background: var(--mc-orange); }

/* ---- Policy accordions ---- */
.macro-outline details.mc-acc {
  border: 1px solid var(--global-divider-color);
  border-radius: 8px; padding: 0.4rem 1rem; margin-top: 0.8rem;
}
.macro-outline details.mc-acc > summary {
  cursor: pointer; font-weight: 600; color: var(--mc-blue); padding: 0.4rem 0;
}

/* ---- Lecture-slide list ---- */
.macro-outline .modules { list-style: none; padding: 0; margin: 1rem 0 0; }
.macro-outline .modules li {
  display: flex; align-items: baseline; gap: 0.75rem;
  padding: 0.7rem 0; border-bottom: 1px solid var(--global-divider-color);
}
.macro-outline .modules li:first-child { border-top: 1px solid var(--global-divider-color); }
.macro-outline .modules .mod-no {
  flex: 0 0 auto; font-weight: 700; color: var(--mc-blue); min-width: 2.4rem;
}
.macro-outline .modules .mod-body { flex: 1 1 auto; }
.macro-outline .modules .mod-title { font-weight: 500; }
.macro-outline .modules .mod-links { margin-top: 0.15rem; font-size: 0.9rem; }
.macro-outline .modules .mod-links a { margin-right: 0.9rem; }
.macro-outline .modules .mod-soon { color: var(--global-text-color-light); font-size: 0.9rem; }

/* ---- PDF download button ---- */
.mc-pdf-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--mc-blue); color: #fff !important; text-decoration: none;
  padding: 0.55rem 1.1rem; border-radius: 6px; font-weight: 600;
  box-shadow: 0 2px 8px rgba(31,92,139,0.35); margin-top: 0.5rem;
}
.mc-pdf-btn:hover { background: #17466a; }
</style>

<div class="macro-outline" markdown="1">

<p class="macro-lede">
This course is the first part of a two-course sequence introducing the fundamental concepts of
macroeconomics — the study of the economy as a whole. It begins with the measurement of aggregate
variables (GDP, CPI, unemployment), moves through the micro-founded theory of productivity,
consumption, investment, and money demand, and closes by integrating the goods, money, and labour
markets within the <strong>IS–LM</strong> and <strong>AS–AD</strong> frameworks to examine general equilibrium.
</p>

<nav class="mc-nav">
  <a href="#basic-information">Info</a>
  <a href="#objectives">Objectives</a>
  <a href="#course-outcomes">Outcomes</a>
  <a href="#topics-covered">Topics</a>
  <a href="#sessions">Schedule</a>
  <a href="#grading">Grading</a>
  <a href="#textbooks">Textbooks</a>
  <a href="#course-policies">Policies</a>
  <a href="#lecture-slides-by-module">Slides</a>
</nav>

## Basic Information

| | |
| :-- | :-- |
| **Semester** | Monsoon/Fall 2026 |
| **Course Title** | Macroeconomics-I |
| **Course Code** | ECON 202 |
| **Program** | Under-Graduate |
| **Lecture–Tutorial–Practical** | 3-0-0 |
| **Section** | Section A & B |
| **Credit Hours** | 45 |
| **Continuous Internal Assessment** | 60% (Assignments, Problem Set, Mid-Term, Participation) |
| **End Term Examination** | 40% |
| **Prerequisites** | ECON 101 or ECON 102, ECON 122 |
| **Instructor** | Dr. Ravikiran Naik |
| **Contact** | [ravikiran.naik@flame.edu.in](mailto:ravikiran.naik@flame.edu.in) · +91-20-6790-6121 |
| **Office** | Room 108, Amrita Shergill Building |
| **Class Schedule** | Tue & Wed: 3:30–4:30 PM, and by appointment |

<small>*I reserve the right to make changes to this syllabus, including topics and due dates. Any changes will be announced as early as possible. Students are expected to read this outline in full; ignorance of its contents will not be accepted as justification after the first week of the semester.*</small>

<a class="mc-pdf-btn" href="{{ '/assets/pdf/teaching/course-outline-macro-ulab.pdf' | relative_url }}" target="_blank" rel="noopener">📄 Download the full course outline (PDF)</a>

## Objectives

<ul class="pills">
<li>Introduce macroeconomic issues, schools of thought, and numerical measures of macroeconomic aggregates.</li>
<li>Analyse macroeconomic models of consumption, investment, employment, output, money, and inflation.</li>
<li>Understand both the short-run and long-run behaviour of the aggregate economy.</li>
<li>Model the determination of equilibrium output, integrating the goods, money, and labour markets.</li>
<li>Examine and critically analyse macroeconomic theories and macroeconomic policies.</li>
</ul>

## Course Outcomes

By the end of the course, students should be able to:

<ul class="pills">
<li>Define key macroeconomic indicators (GDP, inflation, CPI, unemployment rate, growth rate) and explain the different schools of macroeconomic thought.</li>
<li>Describe the theories of productivity, employment, and output relationships.</li>
<li>Apply theories of consumption, saving, and investment to economic scenarios.</li>
<li>Analyse and illustrate concepts related to assets, money, and prices.</li>
<li>Evaluate economic conditions using the IS-LM / AS-AD general framework.</li>
</ul>

## Topics Covered

<div class="mc-modules">

  <div class="mc-card" style="--mc-c:#1f5c8b;">
    <div class="mc-head">
      <span class="mc-title">Module 1 · Introduction to Macroeconomics</span>
      <span class="mc-hours">8 hours</span>
    </div>
    <ul>
      <li>Introduction to macroeconomics</li>
      <li>Measuring the value of economic activity — GDP</li>
      <li>Measuring the cost of living — CPI</li>
      <li>Measuring joblessness — the unemployment rate</li>
    </ul>
    <div class="mc-slide">
      <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m1-measurement.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) →</a>
    </div>
  </div>

  <div class="mc-card" style="--mc-c:#d98b2b;">
    <div class="mc-head">
      <span class="mc-title">Module 2 · Productivity, Employment and Output</span>
      <span class="mc-hours">8 hours</span>
    </div>
    <ul>
      <li>The production function and its properties</li>
      <li>Labour demand, labour supply, and equilibrium</li>
      <li>Unemployment — structural, cyclical, frictional</li>
      <li>Okun's Law</li>
    </ul>
    <div class="mc-slide">
      <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m2-productivity.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) →</a>
    </div>
  </div>

  <div class="mc-card" style="--mc-c:#6a8f3d;">
    <div class="mc-head">
      <span class="mc-title">Module 3 · Consumption, Saving and Investment</span>
      <span class="mc-hours">8 hours</span>
    </div>
    <ul>
      <li>Consumption, savings, and the factors affecting them</li>
      <li>Investment — user cost, desired capital stock, desired investment</li>
      <li>Goods-market equilibrium</li>
    </ul>
    <div class="mc-slide">
      <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m3-consumption-saving-investment.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) →</a>
    </div>
  </div>

  <div class="mc-card" style="--mc-c:#c0392b;">
    <div class="mc-head">
      <span class="mc-title">Module 4 · Asset Market, Money and Prices</span>
      <span class="mc-hours">7 hours</span>
    </div>
    <ul>
      <li>Money, functions of money, portfolio allocation, and demand for assets</li>
      <li>Demand for money, velocity, and the Quantity Theory of Money</li>
      <li>Asset-market equilibrium</li>
      <li>Money growth and inflation</li>
    </ul>
    <div class="mc-slide"><span class="mc-soon">Slides — coming soon</span></div>
  </div>

  <div class="mc-card" style="--mc-c:#7d3c98;">
    <div class="mc-head">
      <span class="mc-title">Module 5 · IS–LM / AS–AD</span>
      <span class="mc-hours">14 hours</span>
    </div>
    <ul>
      <li>Labour-, goods-, and asset-market equilibrium</li>
      <li>General equilibrium in IS-LM; price adjustments and attainment</li>
      <li>Aggregate demand and aggregate supply; AS-AD equilibrium</li>
      <li>Money neutrality</li>
    </ul>
    <div class="mc-slide">
      <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m5-is-lm.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF) →</a>
      <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m5-is-lm-numerical.pdf' | relative_url }}" target="_blank" rel="noopener">Numerical Worksheet (PDF) →</a>
    </div>
  </div>

</div>

<p style="margin-top:0.9rem;"><em>Additional topics (not for assessment):</em> schools of thought · fiscal and monetary policies · business cycles.</p>

## Sessions

<table class="mc-sched">
  <thead>
    <tr><th>Week</th><th>Module</th><th>Assessment</th></tr>
  </thead>
  <tbody>
    <tr><td>Wk 1</td><td>Introduction to Macroeconomics</td><td></td></tr>
    <tr><td>Wk 2</td><td>Introduction to Macroeconomics</td><td></td></tr>
    <tr><td>Wk 3</td><td>Introduction to Macroeconomics</td><td></td></tr>
    <tr><td>Wk 4</td><td>Productivity, Employment and Output</td><td></td></tr>
    <tr><td>Wk 5</td><td>Productivity, Employment and Output</td><td></td></tr>
    <tr><td>Wk 6</td><td>Productivity, Employment and Output</td><td><span class="mc-badge quiz">Quiz 1</span></td></tr>
    <tr><td>Wk 7</td><td>Consumption, Saving and Investment</td><td></td></tr>
    <tr><td>Wk 8</td><td>Consumption, Saving and Investment</td><td></td></tr>
    <tr><td>Wk 9</td><td>Consumption, Saving and Investment</td><td><span class="mc-badge exam">Midterm</span></td></tr>
    <tr><td>Wk 10</td><td>Asset Market, Money and Prices</td><td></td></tr>
    <tr><td>Wk 11</td><td>Asset Market, Money and Prices</td><td></td></tr>
    <tr><td>Wk 12</td><td>Asset Market, Money and Prices</td><td><span class="mc-badge ps">Problem Set due</span></td></tr>
    <tr><td>Wk 13</td><td>IS–LM / AS–AD</td><td></td></tr>
    <tr><td>Wk 14</td><td>IS–LM / AS–AD</td><td></td></tr>
    <tr><td>Wk 15</td><td>IS–LM / AS–AD</td><td><span class="mc-badge quiz">Quiz 2</span></td></tr>
    <tr><td>Wk 16</td><td>IS–LM / AS–AD</td><td></td></tr>
    <tr><td>Wk 17</td><td>IS–LM / AS–AD</td><td><span class="mc-badge rev">Review</span></td></tr>
  </tbody>
</table>

## Grading

This class is designed to be challenging, so do not expect an easy A. I reserve the right to adjust marks
upwards to standardise the median score; marks will never be adjusted down for this procedure.

<div class="mc-grade-wrap">
  <div class="mc-weights">
    <strong>Component breakdown</strong>
    <ul>
      <li><span class="dot" style="background:#f5a623;"></span> End Term Exam <span class="pct">40%</span></li>
      <li><span class="dot" style="background:#29a3d6;"></span> Mid Term Exam <span class="pct">20%</span></li>
      <li><span class="dot" style="background:#6a8f3d;"></span> Quizzes (2) <span class="pct">15%</span></li>
      <li><span class="dot" style="background:#9e9e9e;"></span> Problem Set <span class="pct">15%</span></li>
      <li><span class="dot" style="background:#e6c229;"></span> Class Participation <span class="pct">10%</span></li>
    </ul>
  </div>
  <div class="mc-scale">
    <strong>Grading scale</strong>
    <ul>
      <li style="background:#4caf50;">O <span class="min">Minimum: 90</span></li>
      <li style="background:#9e9e9e;">A+ <span class="min">Minimum: 80</span></li>
      <li style="background:#f5a623;">A <span class="min">Minimum: 70</span></li>
      <li style="background:#7d7d7d;">B+ <span class="min">Minimum: 60</span></li>
      <li style="background:#29a3d6;">B <span class="min">Minimum: 50</span></li>
      <li style="background:#8d8d8d;">C <span class="min">Minimum: 40</span></li>
      <li style="background:#c0392b;">P <span class="min">Minimum: 35</span></li>
    </ul>
  </div>
</div>

## Textbooks

<div class="mc-book">
  <span class="tag req">Required</span>
  <p style="margin:0;"><strong>Macroeconomics</strong> — Abel, A., Bernanke, B. &amp; Croushore, D., 11th ed., Pearson Education. Prepares students to analyse real economic data through a unified model that balances classical and Keynesian perspectives, showing how different macroeconomic models connect within the broader framework.</p>
</div>

<div class="mc-book">
  <span class="tag sup">Supplemental</span>
  <p style="margin:0;"><strong>Macroeconomics</strong> — N. Gregory Mankiw, 11th ed., Macmillan Learning. A thorough, accessible overview that balances theoretical coverage with practical applications.</p>
</div>

<p><em>Additional readings</em> (journal articles, book chapters, and other resources) will be provided at the start of the course and updated on <strong>MOODLE</strong>.</p>

## Course Policies

<details class="mc-acc" markdown="1">
<summary>Lectures, Workload & Attendance</summary>

Lecture slides are shared on MOODLE immediately after each module is completed. **Slides do not cover the complete course material** — they indicate what is broadly intended for the lecture. You are expected to attend, take your own notes, and review the chapter-end questions and problems. You are responsible for all assigned content in the textbook(s), even if it is not covered explicitly in class. Attendance, active participation, and handwritten notes are expected; arrive on time and prepared.

</details>

<details class="mc-acc" markdown="1">
<summary>Assessments & Assignments</summary>

- **Formative coursework** — non-graded quizzes and *Space Run* on the Socrative platform, used to monitor learning and give ongoing feedback.
- **Quizzes** — two in-class quizzes (10% total), multiple-choice, answered on paper (~20–30 questions).
- **Problem Set** — comprehensive, covering analytical questions and mathematical problems involving algebra and basic calculus.
- **Midterm** — covers 3–4 chapters; MCQs, short-answer questions, and problems with a fair mix of easy-medium and difficult questions.
- **End Term** — comprehensive, emphasising the second half of the semester; same format as the midterm, closed book.

</details>

<details class="mc-acc" markdown="1">
<summary>Anti-Cheating Policy</summary>

A strong anti-cheating policy is in place. Violations of specified rules result in an automatic deduction of 5 points; more severe infractions incur a straight 0 for the component. Claiming ignorance of these rules is not an acceptable excuse. The End Term Exam follows the regulations set by the Office of Examination.

</details>

<details class="mc-acc" markdown="1">
<summary>Class Participation & Email</summary>

Speak up in class — to ask questions or make comments. I often call on people, but this is to think out loud, not to "test" you; it will not affect your grade. Be kind and respectful when addressing others. Email is the best way to reach me; I aim to reply within 24 hours. Include **"ECON 202 / Section ?"** in the subject line. Use the MOODLE forum to ask classmates questions.

</details>

<details class="mc-acc" markdown="1">
<summary>Electronics & Classroom Etiquette</summary>

**Laptops and tablets are prohibited during class sessions** unless specific instructions are given — research and classroom observation show these devices impair learning and engagement, and students taking handwritten notes significantly outperform. Cell phones should be silenced and put away. Remaining rules follow the FLAME University Handbook (pp. 28–29); a faculty member is fully authorised to ask a student to leave on grounds of classroom indiscipline.

</details>

## Lecture Slides by Module

<ul class="modules">
  <li>
    <span class="mod-no">M1</span>
    <span class="mod-body">
      <span class="mod-title">GDP, CPI, and Unemployment</span>
      <span class="mod-links">
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m1-measurement.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF)</a>
      </span>
    </span>
  </li>
  <li>
    <span class="mod-no">M2</span>
    <span class="mod-body">
      <span class="mod-title">Productivity and Output</span>
      <span class="mod-links">
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m2-productivity.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF)</a>
      </span>
    </span>
  </li>
  <li>
    <span class="mod-no">M3</span>
    <span class="mod-body">
      <span class="mod-title">Consumption, Saving, and Investment</span>
      <span class="mod-links">
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m3-consumption-saving-investment.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF)</a>
      </span>
    </span>
  </li>
  <li>
    <span class="mod-no">M4</span>
    <span class="mod-body">
      <span class="mod-title">Money and Prices</span>
      <span class="mod-soon">Slides — coming soon</span>
    </span>
  </li>
  <li>
    <span class="mod-no">M5</span>
    <span class="mod-body">
      <span class="mod-title">IS–LM / AS–AD General Equilibrium</span>
      <span class="mod-links">
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m5-is-lm.pdf' | relative_url }}" target="_blank" rel="noopener">Slides (PDF)</a>
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m5-is-lm-numerical.pdf' | relative_url }}" target="_blank" rel="noopener">Numerical Worksheet (PDF)</a>
      </span>
    </span>
  </li>
</ul>

</div>
