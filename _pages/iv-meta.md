---
layout: page
title: iv meta-analysis
permalink: /iv-meta/
description: The Identification Zoo — mapping the supply, demand, and quality of causal identification in economics.
nav: true
nav_order: 5
toc:
  sidebar: left
---

## The Identification Zoo

**Is the credibility revolution running out of credible variation?**

This project maps the full supply chain of causal identification in empirical economics --- from the natural experiments researchers exploit, to the causal claims they make, to the quality of the resulting evidence. It combines three public datasets:

| Layer | Dataset | Coverage |
|-------|---------|----------|
| **Supply** | Oh's *Plausibly Exogenous Galore* (1,667 papers) | What specific instruments are used? |
| **Demand** | Garg & Fetzer's *Causal Claims* (46,645 papers, 1.2M edges) | How many causal claims demand identification? |
| **Quality** | Brodeur et al.'s test statistics (42,526 z-stats) | How healthy is the resulting evidence? |

The core question: demand for causal identification has exploded since 1990 --- but has the *supply* of genuinely novel exogenous variation kept pace, or has the profession converged on a narrow portfolio of recycled instruments?

---

## Part 1: The Identification Scissors

The "killer chart" of the project. The blue line tracks the **demand** for IV identification (share of causal claims using instrumental variables, from Garg & Fetzer 2025). The red line tracks the **supply-side concentration** (HHI of instrument categories, from Oh's Plausibly Exogenous).

{% include figure.liquid path="assets/img/iv-meta-analysis/scissors_chart.png" alt="The Identification Scissors: demand for IV rising while instruments concentrate" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 1. The Identification Scissors. IV demand (blue, left axis) rose from 2% to 8% of causal claims between 1990 and 2023. After an initial diversification phase (HHI falling from 0.34 to 0.16), instrument concentration has crept back upward since 2018 --- the hourglass pattern." %}

**Key finding:** The scissors opened in two phases. First, a *diversification phase* (2000--2015) where new instrument categories were discovered and HHI fell. Then a *re-concentration phase* (2018--present) where the portfolio narrowed again even as demand plateaued --- fewer new ideas entering, more recycling of existing ones.

---

## Part 2: Taxonomy of Identification Strategies

I classify 1,667 papers from Oh's database into 15 instrument categories using keyword matching on the "source of exogenous variation" field. The distribution reveals a steep power law: **Policy Reform / Law Change** dominates (381 papers), followed by **Timing / Event Shock** (171) and **Lottery / Random Assignment** (100).

{% include figure.liquid path="assets/img/iv-meta-analysis/instrument_taxonomy.png" alt="Taxonomy of identification strategies showing instrument category frequencies" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 2. Taxonomy of identification strategies. The 'Other' category (568) captures idiosyncratic one-off instruments --- each clever but unreplicable. Policy reforms are the dominant workhorse." %}

The large "Other" category is itself informative: 34% of instruments are so idiosyncratic they resist classification. These are individually clever natural experiments but collectively represent **fragile knowledge** --- causal claims that rest on unreplicable sources of variation.

---

## Part 3: Is the Portfolio Concentrating?

<div class="row mt-3">
<div class="col-sm-12">
{% include figure.liquid path="assets/img/iv-meta-analysis/hhi_timeseries.png" alt="HHI concentration and discovery rate over time" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 3. Panel A: Instrument HHI over time shows a U-shape --- initial diversification (2001--2017) followed by re-concentration. Panel B: While paper volume exploded 60x (15 to 1,032 papers per 5-year window), the number of unique instrument categories plateaued at 15 by 2014." %}
</div>
</div>

**The saturation finding:** Panel B is perhaps the most striking result. The number of unique instrument categories flatlined at 15 around 2014 despite a massive increase in papers. The identification frontier is not expanding --- the same 15 types of exogenous variation serve an ever-growing body of empirical work.

---

## Part 4: The Credibility Revolution in Methods

Using Garg & Fetzer's (2025) classification of 46,645 NBER and CEPR working papers, the stacked area chart shows how causal methods grew from 15% to 38% of all economics research between 1980 and 2023.

{% include figure.liquid path="assets/img/iv-meta-analysis/method_evolution.png" alt="Stacked area chart of causal method adoption 1980-2023" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 4. The credibility revolution visualised. IV (blue), DID (green), RDD (orange), and RCT (purple) grew from 15% to 38% of working papers. DID is the biggest winner, rising from 8% to 20%. IV plateaued at ~8% after 2010." %}

Note that **IV plateaued** around 2010 at ~8% while **DID surged** to 20%. This is consistent with the identification scissors: as novel instruments became harder to find, researchers shifted toward difference-in-differences designs that require policy variation rather than classical instruments.

---

## Part 5: Instrument Specialisation by Field

Applying the **economic complexity** framework to identification strategies. Instead of countries $$\times$$ products, we have **outcome fields $$\times$$ instrument categories**. The Revealed Comparative Advantage (RCA) measures which fields specialise in which instruments:

$$\text{RCA}_{f,i} = \frac{N_{f,i}/N_{f,\cdot}}{N_{\cdot,i}/N_{\cdot,\cdot}}$$

{% include figure.liquid path="assets/img/iv-meta-analysis/field_instrument_rca.png" alt="RCA heatmap of instrument specialisation by outcome field" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 5. Instrument specialisation by field (RCA, capped at 3.0). Dark red cells indicate strong specialisation. Labour economics specialises in Bartik/shift-share (RCA=3.0) and lotteries (1.7). Education relies on family/demographic instruments (3.0) and network/peer effects (2.6). Crime/conflict specialises in weather (2.3). Political economy in geographic discontinuities (2.7)." %}

**Field-specific instrument monocultures:**
- **Labour:** Bartik/shift-share instruments (RCA = 3.0) --- immigration enclave instruments dominate
- **Education:** Family/demographic (3.0) and network/peer effects (2.6) --- twin studies, birth order, roommate assignment
- **Crime:** Weather/climate (2.3) --- rain reduces crime, heat increases it
- **Housing:** Geographic/spatial discontinuity (3.0) --- boundary designs at school district or zoning borders
- **Political economy:** Geographic discontinuity (2.7) and timing/event shocks (2.8) --- close elections, redistricting

---

## Part 6: The Instrument Space

The **instrument space** network connects instrument categories that tend to co-occur across outcome fields. Instruments that serve the same fields are pulled closer together. Node size reflects frequency of use; edge thickness reflects co-occurrence proximity.

{% include figure.liquid path="assets/img/iv-meta-analysis/instrument_space.png" alt="Network graph of the instrument space showing co-occurrence relationships" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 6. The Instrument Space. Policy Reform / Law Change is the dominant hub (largest node), connected to nearly all other instrument types. Peripheral instruments (Bartik, Family/Demographic) serve narrow fields. The core cluster --- Eligibility Threshold, Market/Price, Geographic --- co-occurs across many fields." %}

The network reveals a **core-periphery structure**:
- **Core:** Policy reforms, eligibility thresholds, geographic discontinuities, and market/price variation are densely interconnected --- these instruments serve many fields
- **Periphery:** Bartik/shift-share, family/demographic, and historical/colonial instruments are field-specific --- they serve labour, education, and development economics respectively, with weak connections elsewhere

This is the **fragile knowledge map**: outcome domains served only by peripheral instruments have thin identification portfolios.

---

## Part 7: Evidence Quality by Method

Using Brodeur, Cook & Heyes (2020), we plot the distribution of z-statistics across 42,526 hypothesis tests by method. Under the null of no p-hacking, z-statistics should follow a smooth distribution. Bunching just above $$z = 1.96$$ (the 5% significance threshold) suggests specification searching.

{% include figure.liquid path="assets/img/iv-meta-analysis/brodeur_quality.png" alt="Test statistic distributions by method showing evidence of p-hacking in IV and DID" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 7. Test statistic distributions by method (Brodeur et al. 2020). IV (top-left) shows a pronounced rightward shift with bunching above z=1.96. DID shows a distinctive spike at z~3.5. RDD and RCT have smoother, more symmetric distributions --- consistent with less specification searching." %}

**IV has the most suspicious distribution:** the mass is shifted rightward with visible bunching above the significance threshold. This is consistent with the hypothesis that recycled instruments --- which have known "expected results" --- invite more specification searching than novel identification strategies.

---

## Data Sources

- **Oh, S.S.** *Plausibly Exogenous Galore.* Substack newsletter & Notion database, 2022--2026. [plausiblyexog.substack.com](https://plausiblyexog.substack.com/)
- **Garg, P. & Fetzer, T.** (2025). "Causal Claims in Economics." *arXiv:2501.06873.* [github.com/prashgarg/CausalClaimsInEconomics](https://github.com/prashgarg/CausalClaimsInEconomics)
- **Brodeur, A., Cook, N. & Heyes, A.** (2020). "Methods Matter: P-Hacking and Publication Bias in Causal Analysis in Economics." *American Economic Review*, 110(11), 3634--3660. [doi:10.1257/aer.20190687](https://doi.org/10.1257/aer.20190687)

---

## Status

This is **exploratory work** (March 2026) for an ongoing research project:

- **Paper 1:** "IV in Labour Economics" --- subsample meta-analysis for *Journal of Economic Surveys*
- **Paper 2:** "The Identification Zoo" --- full cross-field meta-analysis for *JEL* / *JEP* / *REStat*

Analysis code: [`iv_meta_analysis.py`](https://github.com/ravikirannaik/ravikirannaik.github.io)

*Ravikiran Naik, FLAME University*
