---
layout: default
permalink: /blog/
title: Project blog
---

{% for post in site.blog reversed %}
<div class="card col-md-12 mb-3">
    <div class="card-body">
      {% if post.thumbnail %}
      <div class="float-right">
        <div class="news-thumb p-2 m-2">
          <img src="{{ post.thumbnail }}" class="img img-responsive " />
        </div>
      </div>
      {% endif %}
        <h3><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></h3>
        {% if post.date %}
        <p>{{ post.date | date_to_string }}</p>
        {% endif %}
        <p>{{ post.excerpt }}</p>
        <a href="{{site.baseurl}}{{ post.url }}" class="btn btn-dark" title="Read more on this article">Read more</a>
    </div>
</div>
{% endfor %}
