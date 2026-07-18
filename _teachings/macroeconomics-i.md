---
title: Macroeconomics-I (ECON 202)
description: Undergraduate Macroeconomics-I at FLAME University, Monsoon 2026 — GDP, CPI, and unemployment; productivity and output; consumption, saving and investment; money and prices; and the IS-LM / AS-AD general-equilibrium framework.
term: Monsoon 2026-27
category: Undergraduate
importance: 0
---

<style>
/* Center the whole outline as a narrower column; text stays left-aligned
   so lines don't stretch edge to edge. */
.macro-outline {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.macro-outline table { margin-left: auto; margin-right: auto; }
.macro-outline details > summary {
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 500;
  padding: 0.6rem 0;
  color: var(--global-theme-color);
}
.macro-outline details {
  border-top: 1px solid var(--global-divider-color);
  border-bottom: 1px solid var(--global-divider-color);
  margin-top: 1rem;
  padding: 0.5rem 0;
}
.macro-outline #macro-pdf-wrap { max-width: 720px; margin: 1rem auto 0; }
.macro-outline #macro-pdf-controls {
  display: flex; align-items: center; justify-content: center;
  gap: 1rem; margin-bottom: 0.75rem;
}
.macro-outline #macro-pdf-controls button {
  cursor: pointer; border: 1px solid var(--global-divider-color);
  background: var(--global-bg-color); color: var(--global-theme-color);
  border-radius: 4px; padding: 0.1rem 0.75rem; font-size: 1.3rem; line-height: 1.6;
}
.macro-outline #macro-pdf-status { min-width: 6rem; text-align: center; color: var(--global-text-color); }
.macro-outline #macro-pdf-pages { font-size: 0; text-align: center; }
.macro-outline #macro-pdf-pages img {
  display: inline-block; vertical-align: top; width: 100%; height: auto;
  cursor: pointer; border: 1px solid var(--global-divider-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: opacity 0.15s ease;
}
.macro-outline #macro-pdf-right { display: none; }
/* Module-wise lecture-slide list */
.macro-outline .modules { list-style: none; padding: 0; margin: 1rem 0 0; }
.macro-outline .modules li {
  display: flex; align-items: baseline; gap: 0.75rem;
  padding: 0.7rem 0; border-bottom: 1px solid var(--global-divider-color);
}
.macro-outline .modules li:first-child { border-top: 1px solid var(--global-divider-color); }
.macro-outline .modules .mod-no {
  flex: 0 0 auto; font-weight: 600; color: var(--global-theme-color);
  min-width: 2.4rem;
}
.macro-outline .modules .mod-body { flex: 1 1 auto; }
.macro-outline .modules .mod-title { font-weight: 500; }
.macro-outline .modules .mod-links { margin-top: 0.15rem; font-size: 0.9rem; }
.macro-outline .modules .mod-links a { margin-right: 0.9rem; }
.macro-outline .modules .mod-soon { color: var(--global-text-color-light); font-size: 0.9rem; }
.macro-outline .modules .mod-disabled {
  color: var(--global-text-color-light); pointer-events: none; cursor: default;
  text-decoration: none; opacity: 0.55;
}
/* Two-page spread on wide screens; the viewer breaks out of the 720px column. */
@media (min-width: 992px) {
  .macro-outline #macro-pdf-wrap.spread {
    width: 90vw; max-width: 1080px;
    position: relative; left: 50%; transform: translateX(-50%);
  }
  .macro-outline #macro-pdf-wrap.spread #macro-pdf-pages img { width: 50%; }
  .macro-outline #macro-pdf-wrap.spread #macro-pdf-right { display: inline-block; }
}
</style>

<div class="macro-outline" markdown="1">

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

<details markdown="1">
<summary>📄 Full Course Outline — click to expand</summary>

## Course Outline (PDF)

<div id="macro-pdf-wrap" oncontextmenu="return false;">
  <div id="macro-pdf-controls">
    <button type="button" id="macro-pdf-prev" aria-label="Previous page">‹</button>
    <span id="macro-pdf-status">Loading…</span>
    <button type="button" id="macro-pdf-next" aria-label="Next page">›</button>
  </div>
  <div id="macro-pdf-pages">
    <img id="macro-pdf-left" alt="Course outline (left page)" draggable="false" />
    <img id="macro-pdf-right" alt="Course outline (right page)" draggable="false" />
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
(function () {
  var PDF_URL = "{{ '/assets/pdf/teaching/course-outline-macro-ulab.pdf' | relative_url }}";
  var pages = [], cur = 0;
  var wrap, left, right, statusEl, mq;
  function isSpread() { return mq && mq.matches; }
  function render() {
    if (!pages.length) return;
    var spread = isSpread();
    wrap.classList.toggle("spread", spread);
    if (spread && cur % 2 !== 0) cur -= 1;   // keep the left page even in a spread
    left.style.opacity = "0"; right.style.opacity = "0";
    setTimeout(function () {
      left.src = pages[cur];
      if (spread && pages[cur + 1]) {
        right.src = pages[cur + 1]; right.style.display = "inline-block";
      } else {
        right.removeAttribute("src"); right.style.display = "none";
      }
      left.style.opacity = "1"; right.style.opacity = "1";
    }, 120);
    if (spread && pages[cur + 1]) {
      statusEl.textContent = "Pages " + (cur + 1) + "–" + (cur + 2) + " / " + pages.length;
    } else {
      statusEl.textContent = "Page " + (cur + 1) + " / " + pages.length;
    }
  }
  function step(dir) {
    if (!pages.length) return;
    var n = pages.length, inc = isSpread() ? 2 : 1;
    cur += dir * inc;
    if (cur >= n) cur = 0;
    if (cur < 0) cur = isSpread() ? (n % 2 === 0 ? n - 2 : n - 1) : n - 1;
    render();
  }
  function renderPage(pdf, num) {
    return pdf.getPage(num).then(function (page) {
      var vp = page.getViewport({ scale: 2 });
      var canvas = document.createElement("canvas");
      canvas.width = vp.width; canvas.height = vp.height;
      return page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise
        .then(function () { return canvas.toDataURL("image/png"); });
    });
  }
  function init() {
    if (!window.pdfjsLib) { return setTimeout(init, 150); }
    wrap = document.getElementById("macro-pdf-wrap");
    left = document.getElementById("macro-pdf-left");
    right = document.getElementById("macro-pdf-right");
    statusEl = document.getElementById("macro-pdf-status");
    mq = window.matchMedia("(min-width: 992px)");
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    pdfjsLib.getDocument(PDF_URL).promise.then(function (pdf) {
      var tasks = [];
      for (var i = 1; i <= pdf.numPages; i++) tasks.push(renderPage(pdf, i));
      return Promise.all(tasks);
    }).then(function (imgs) {
      pages = imgs; render();
      left.addEventListener("click", function () { step(isSpread() ? -1 : 1); });
      right.addEventListener("click", function () { step(1); });
      document.getElementById("macro-pdf-prev").addEventListener("click", function () { step(-1); });
      document.getElementById("macro-pdf-next").addEventListener("click", function () { step(1); });
      if (mq.addEventListener) mq.addEventListener("change", render);
      else if (mq.addListener) mq.addListener(render);
    }).catch(function () { statusEl.textContent = "Could not load the outline."; });
  }
  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
</script>

</details>

## Lecture Slides by Module

<ul class="modules">
  <li>
    <span class="mod-no">M1</span>
    <span class="mod-body">
      <span class="mod-title">GDP, CPI, and Unemployment</span>
      <span class="mod-links">
        <span class="mod-disabled" aria-disabled="true" title="Interactive slides — available soon">Slides (interactive)</span>
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m1-measurement.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">PDF</a>
      </span>
    </span>
  </li>
  <li>
    <span class="mod-no">M2</span>
    <span class="mod-body">
      <span class="mod-title">Productivity and Output</span>
      <span class="mod-links">
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m2-productivity.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Slides (PDF)</a>
      </span>
    </span>
  </li>
  <li>
    <span class="mod-no">M3</span>
    <span class="mod-body">
      <span class="mod-title">Consumption, Saving, and Investment</span>
      <span class="mod-links">
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m3-consumption-saving-investment.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Slides (PDF)</a>
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
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m5-is-lm.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Slides (PDF)</a>
        <a href="{{ '/assets/pdf/teaching/macroeconomics-i/m5-is-lm-numerical.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Numerical Worksheet (PDF)</a>
      </span>
    </span>
  </li>
</ul>

</div>
