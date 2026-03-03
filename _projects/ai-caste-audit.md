---
layout: page
title: "From Human Prejudice to Machine Bias: Testing Caste Discrimination in AI Recruitment"
description: "A correspondence study adapting Thorat & Atwell (2007) to test whether AI resume screeners respond to caste-signaling surnames."
img:
importance: 3
category: research
---

<span class="badge badge-warning">Work in Progress</span>

**Ravikiran Naik** (FLAME University, [ravikiran.naik@flame.edu.in](mailto:ravikiran.naik@flame.edu.in)) and **Arshiya Gupta** (Economics Honours, 4th Year, FLAME University, [arshiya.gupta@flame.edu.in](mailto:arshiya.gupta@flame.edu.in))

## Overview

Do AI resume-screening tools reproduce the caste discrimination that Thorat & Atwell (2007) documented among human employers? This project adapts the classic correspondence study methodology --- sending matched CVs that differ *only* in surname --- to audit leading Large Language Models (GPT-4o, Claude, Gemini, Llama, Mistral) used as hiring screeners.

India's adoption of AI in recruitment surged from 26% (2023) to 53% (2024), yet no legal framework governs algorithmic caste discrimination. This study provides the first systematic evidence on whether AI hiring tools comply with Articles 15 and 16 of the Indian Constitution.

## Research Design

The experiment follows a **"Thorat-for-AI"** framework:

| | Thorat & Atwell (2007) | This Study |
|---|---|---|
| **Employer** | Human HR managers | LLM APIs |
| **CVs** | Physical, mailed to firms | Synthetic, submitted via API |
| **Outcome** | Employer callback | AI fit score + shortlist decision |
| **Caste signal** | Surname | Surname (same approach) |
| **Scale** | 4,808 applications | 30,000 API evaluations |

### Treatment Arms

Five caste/identity groups, each with 5 regionally diverse surnames:

+ **Upper Caste (Brahmin):** Sharma, Iyer, Joshi, Trivedi, Chatterjee
+ **OBC:** Yadav, Patel, Saini, Goud, Teli
+ **Scheduled Caste:** Paswan, Valmiki, Jatav, Paraiyar, Dhobi
+ **Muslim:** Khan, Siddiqui, Sheikh, Ansari, Qureshi
+ **Neutral/Ambiguous:** Kumar, Singh, Rajan, Nair, Das

### Experimental Conditions

1. **Standard Screening** --- Baseline: full CV with name, no fairness cues
2. **Fairness-Prompted** --- Explicit instruction to ignore name, caste, religion
3. **Anonymized Control** --- Name replaced with generic ID (quality baseline)
4. **Batch Ranking** --- 5 CVs (one per group) presented simultaneously

### Job Descriptions

Six standardized JDs in the Indian software industry: Junior Business Analyst, Junior Software Developer, Product Manager, Senior Backend Engineer, VP Client Solutions, and Principal Software Architect --- spanning 3 seniority levels and 2 role types (customer-facing vs. technical).

## Matched-Pair Design

A split-seed system ensures CVs are **content-identical** across caste arms. The content seed (determining education, GPA, skills, employer, projects) is caste-blind; only the name seed differs. This guarantees that any observed score difference is attributable solely to the surname.

**Scale:** 5 surnames $$\times$$ 5 groups $$\times$$ 6 JDs $$\times$$ 2 genders $$\times$$ 10 seeds = **3,000 unique CVs**

## Statistical Analysis

Following Thorat (2007), the primary specification is a random-effects logistic regression:

$$\text{logit}(P(\text{shortlist}_{ij} = 1)) = \alpha_j + \beta_1 \cdot \text{Dalit}_i + \beta_2 \cdot \text{Muslim}_i + \beta_3 \cdot \text{OBC}_i + \beta_4 \cdot \text{Neutral}_i + \gamma \mathbf{X}_i + \varepsilon_{ij}$$

with upper-caste Hindu as the reference category and $$\alpha_j$$ as a random effect for job description. Results are reported as **odds ratios** for direct comparison with Thorat's estimates (Dalit OR = 0.67, Muslim OR = 0.33).

## Key Questions

+ Do LLMs discriminate based on caste-signaling surnames?
+ Which model shows the most/least bias?
+ Does explicit fairness prompting eliminate bias?
+ Is bias stronger for customer-facing roles (cf. Banerjee et al. 2009)?
+ How do AI discrimination patterns compare to Thorat's human employer estimates?

## Status

+ **CV pipeline:** Complete (3,000 synthetic CVs generated)
+ **Experiment harness:** Built (supports 7 models, 4 conditions, resume capability)
+ **Analysis pipeline:** Built (Thorat regression, cross-model comparison, text analysis)
+ **API experiments:** Pending
+ **Paper draft:** Not yet started

## Related Literature

+ Thorat, S. & Atwell, P. (2007). "The Legacy of Social Exclusion." *EPW*, 42(41).
+ Bertrand, M. & Mullainathan, S. (2004). "Are Emily and Greg More Employable?" *AER*, 94(4).
+ Lippens, L. (2024). "Computer Says 'No'." *Computers in Human Behavior: AI*, 2(1).
+ An, J. et al. (2025). "Measuring Gender and Racial Biases in LLMs." *PNAS Nexus*, 4(3).
+ Khandelwal, K. et al. (2024). "Indian-BhED." *ACM GoodIT '24*.
+ Vijayaraghavan, P. et al. (2025). "DECASTE." *IJCAI 2025*.
