---
title: Macroeconomics-I (ECON 202)
description: Undergraduate Macroeconomics-I at FLAME University, Monsoon 2026 — GDP, CPI, and unemployment; productivity and output; consumption, saving and investment; money and prices; and the IS-LM / AS-AD general-equilibrium framework.
term: Monsoon 2026-27
category: Undergraduate
importance: 1
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
.macro-outline #macro-pdf-page {
  display: block; width: 100%; height: auto; cursor: pointer;
  border: 1px solid var(--global-divider-color); border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: opacity 0.15s ease;
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
  <img id="macro-pdf-page" alt="Course outline page" draggable="false" />
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
(function () {
  var PDF_URL = "{{ '/assets/pdf/teaching/course-outline-macro-ulab.pdf' | relative_url }}";
  var pages = [], cur = 0;
  var img, statusEl;
  function show(i) {
    if (!pages.length) return;
    cur = (i + pages.length) % pages.length;
    img.style.opacity = "0";
    setTimeout(function () { img.src = pages[cur]; img.style.opacity = "1"; }, 120);
    statusEl.textContent = "Page " + (cur + 1) + " / " + pages.length;
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
    img = document.getElementById("macro-pdf-page");
    statusEl = document.getElementById("macro-pdf-status");
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    pdfjsLib.getDocument(PDF_URL).promise.then(function (pdf) {
      var tasks = [];
      for (var i = 1; i <= pdf.numPages; i++) tasks.push(renderPage(pdf, i));
      return Promise.all(tasks);
    }).then(function (imgs) {
      pages = imgs;
      img.src = pages[0]; img.style.opacity = "1";
      statusEl.textContent = "Page 1 / " + pages.length;
      img.addEventListener("click", function () { show(cur + 1); });
      document.getElementById("macro-pdf-prev").addEventListener("click", function () { show(cur - 1); });
      document.getElementById("macro-pdf-next").addEventListener("click", function () { show(cur + 1); });
    }).catch(function () { statusEl.textContent = "Could not load the outline."; });
  }
  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
</script>

</details>

</div>
