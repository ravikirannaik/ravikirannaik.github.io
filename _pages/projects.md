---
layout: page
title: research
permalink: /projects/
description: Publications, working papers, and ongoing research projects.
nav: true
nav_order: 2
display_categories: [research]
horizontal: true
---

<ul class="nav nav-tabs justify-content-center mb-4" id="researchTabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active font-weight-bold" id="publications-tab" data-toggle="tab" href="#publications-pane" role="tab" aria-controls="publications-pane" aria-selected="true">Publications</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link font-weight-bold" id="working-papers-tab" data-toggle="tab" href="#working-papers-pane" role="tab" aria-controls="working-papers-pane" aria-selected="false">Working Papers</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link font-weight-bold" id="research-projects-tab" data-toggle="tab" href="#research-projects-pane" role="tab" aria-controls="research-projects-pane" aria-selected="false">Research Projects</a>
  </li>
</ul>

<div class="tab-content" id="researchTabsContent">

  <!-- Publications -->
  <div class="tab-pane fade show active" id="publications-pane" role="tabpanel" aria-labelledby="publications-tab" tabindex="0">
    {% include bib_search.liquid %}
    <div class="publications">
      {% bibliography --query @article, @book, @incollection --group_by none %}
    </div>
  </div>

  <!-- Working Papers -->
  <div class="tab-pane fade" id="working-papers-pane" role="tabpanel" aria-labelledby="working-papers-tab" tabindex="0">
    <div class="publications">
      {% bibliography --query @unpublished --group_by none %}
    </div>
  </div>

  <!-- Research Projects -->
  <div class="tab-pane fade" id="research-projects-pane" role="tabpanel" aria-labelledby="research-projects-tab" tabindex="0">
    <div class="projects">
      {% assign sorted_projects = site.projects | where: "category", "research" | sort: "importance" %}
      {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>

</div>
