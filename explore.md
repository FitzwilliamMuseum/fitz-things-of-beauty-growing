---
layout: default
permalink: /explore/
title: Explore the objects
---
<div class="container mb-3">
  <div class="row">
{% assign rows = site.explore.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
{% assign offset = forloop.index0 | times: 2 %}
{% assign sorted = site.explore | sort:"order" %}
    {% for author in sorted limit:2 offset:offset %}
    <div class="col-md-4 mb-3">
      <div class="card card-fitz h-100" >
        <a href="{{site.baseurl}}{{ author.url }}" class="stretched-link">
          <img class="card-img-top" style="object-fit:cover;" src="{{site.url}}{{site.baseurl}}{{author.image}}" alt="Card image cap" width="300" height="300"/>
        </a>
        <div class="card-body">
          <h3 class="lead mt-2">
            <a href="{{site.baseurl}}{{ author.url }}" class="stretched-link">{{author.title}}</a>
          </h3>
        </div>
      </div>
    </div>
    {% endfor %}
  {% endfor %}
  </div>
</div>
