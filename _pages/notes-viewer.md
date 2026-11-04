---
layout: page
permalink: /teachings/macroeconomics-i/notes-viewer/
title: Course Notes
description: View-only lecture notes for Macroeconomics-I (ECON 202).
nav: false
---

<style>
  .nv-wrap { max-width: 1000px; margin: 0 auto; }
  .nv-label { font-weight: 700; color: #5f74a0; margin: 0 0 0.6rem; }
  .nv-frame {
    width: 100%; height: 85vh; min-height: 500px;
    border: 1px solid var(--global-divider-color); border-radius: 8px;
  }
  .nv-msg { color: var(--global-text-color-light); }
  .nv-note { font-size: 0.82rem; color: var(--global-text-color-light); margin-top: 0.6rem; }
  .nv-back { display: inline-block; margin-bottom: 0.8rem; }
</style>

<div class="nv-wrap">
  <a class="nv-back" href="{{ '/teachings/macroeconomics-i/' | relative_url }}">&larr; Back to Macroeconomics-I</a>
  <p id="nv-label" class="nv-label"></p>
  <div id="nv-holder"><p class="nv-msg">Loading…</p></div>
  <p class="nv-note">These notes are provided for on-page viewing only. Please do not redistribute.</p>
</div>

<script>
  (function () {
    var holder = document.getElementById('nv-holder');
    var label  = document.getElementById('nv-label');
    var params = new URLSearchParams(window.location.search);
    var f = params.get('f') || '';

    // Only allow same-site asset PDFs — reject anything else.
    if (!/^\/assets\/[A-Za-z0-9_\-\/]+\.pdf$/.test(f)) {
      holder.innerHTML = '<p class="nv-msg">No notes selected, or the file is not available.</p>';
      return;
    }

    var t = params.get('t');
    label.textContent = t ? decodeURIComponent(t) : '';

    var frame = document.createElement('iframe');
    frame.className = 'nv-frame';
    // #toolbar=0 hides the download/print toolbar in Chrome/Edge's PDF viewer.
    frame.src = f + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
    frame.setAttribute('title', 'Notes viewer');
    holder.innerHTML = '';
    holder.appendChild(frame);

    // Light deterrent against right-click "Save as".
    holder.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  })();
</script>
