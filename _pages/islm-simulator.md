---
layout: page
permalink: /teachings/macroeconomics-i/islm-simulator/
title: "IS–LM Interactive Simulator"
description: "A browser-based IS–LM simulator for ECON 202 (Module 5). Drag the sliders for fiscal and monetary policy, taxes, and money demand, and watch the IS and LM curves — and the goods-market and asset-market equilibria — adjust in real time. Use it alongside the two-panel derivations of the IS and LM curves in the lecture slides."
nav: false
---

<style>
/* ============================================================================
   IS-LM Interactive Simulator (ECON 202, Module 5)
   Palette + type matched to the Macroeconomics-I course page:
   muted indigo / terracotta / dusty rose on Inter (the site body font).
   ========================================================================== */
.islm {
  --mc-blue:   #5f74a0;   /* muted indigo — headers & structure */
  --mc-orange: #c0895e;   /* muted terracotta — sub-headers     */
  --mc-red:    #c98a97;   /* dusty rose — accents               */
  --mc-ink:    #4a4a4a;   /* readable text                      */
  --mc-soft:   rgba(95, 116, 160, 0.08);
  max-width: 1040px; margin: 0 auto;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--mc-ink);
}
html[data-theme="dark"] .islm {
  --mc-blue:   #9fb0d6;
  --mc-orange: #d6a985;
  --mc-soft:   rgba(159, 176, 214, 0.14);
  --mc-ink:    var(--global-text-color);
}

.islm-back {
  display:inline-block; font-size:0.9rem; font-weight:600;
  color: var(--mc-blue); margin-bottom:0.5rem;
}
.islm-back:hover { color: var(--mc-orange); text-decoration: none; }

.islm-lede {
  font-size: 1.04rem; line-height: 1.6;
  border-left: 4px solid var(--mc-blue);
  background: var(--mc-soft);
  padding: 0.8rem 1.05rem; border-radius: 0 6px 6px 0; margin: 0.6rem 0 1.1rem;
}
.islm-lede .fq { font-weight: 700; color: var(--mc-blue); }

.islm-howto { font-size: 0.95rem; line-height: 1.6; margin: 1rem 0 0.4rem; }
.islm-howto strong { color: var(--mc-orange); }
.islm-howto ul { margin: 0.3rem 0 0 1.1rem; }
.islm-howto em { color: var(--mc-blue); font-style: normal; font-weight: 600; }

.islm-frame-box {
  border: 1px solid rgba(95,116,160,0.25); border-radius: 8px; overflow: hidden;
  box-shadow: 0 2px 12px rgba(95,116,160,0.14); background: #fff;
}
html[data-theme="dark"] .islm-frame-box { background: #f7f8fb; }
.islm-frame-box iframe { display: block; width: 100%; height: 1000px; border: 0; }

.islm-attrib {
  font-size: 0.82rem; color: var(--global-text-color-light);
  line-height: 1.5; border-top: 1px solid var(--global-divider-color);
  margin-top: 1.4rem; padding-top: 0.8rem;
}
.islm-attrib a { color: var(--mc-blue); }
.islm-attrib a:hover { color: var(--mc-orange); }

@media (max-width: 700px) { .islm-frame-box iframe { height: 1180px; } }
</style>

<div class="islm">

<a class="islm-back" href="{{ '/teachings/macroeconomics-i/#additional-readings' | relative_url }}">&larr; Back to Macroeconomics-I</a>

<p class="islm-lede">
<span class="fq">What happens to output and the interest rate when the government spends more, the central bank prints money, or taxes rise?</span>
Move the sliders below and watch the IS and LM curves shift, with the new general equilibrium traced out automatically. This is the same goods-market / asset-market machinery we build by hand in the lecture slides — here you can run the comparative statics live.
</p>

<div class="islm-howto">
<strong>How to use it</strong>
<ul>
  <li>Drag a slider (government purchases, the money supply, taxes, money demand, and so on) and watch the <em>IS</em> and <em>LM</em> curves move.</li>
  <li>The marked equilibrium point shows where the goods market and the asset market clear together.</li>
  <li>Use the toolbar on the plot to pan, zoom, or reset if the view drifts.</li>
</ul>
</div>

<div class="islm-frame-box">
  <iframe src="{{ '/assets/interactive/islm/index.html' | relative_url }}"
          title="IS-LM interactive simulator"
          loading="lazy"
          scrolling="yes"></iframe>
</div>

<p class="islm-attrib">
Simulator by Juan Dominguez-Moran and Rouven Geismar, Chair of Macroeconomics, Technische Universität Berlin
(© 2019), released under the <a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU AGPLv3</a>.
Source and documentation: <a href="https://git.tu-berlin.de/chair-of-macroeconomics">git.tu-berlin.de/chair-of-macroeconomics</a>.
Hosted here for ECON 202 teaching, restyled only in its surrounding page chrome; the model itself is embedded as released. Methodology:
Dominguez-Moran &amp; Geismar, <em>Teaching Economics with Interactive Browser-Based Models</em>
(<a href="https://arxiv.org/abs/2008.02581">arXiv:2008.02581</a>).
</p>

</div>
