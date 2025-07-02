// script.js

import { philosophyData, experienceData, projectsData, competenciesData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  renderPhilosophy();
  renderExperience();
  renderProjects();
  renderCompetencies();
});

function renderPhilosophy() {
  const { narrative, pyramid } = philosophyData;
  const narrativeContainer = document.getElementById("philosophy-narrative");
  const pyramidContainer = document.getElementById("planning-pyramid");

  narrative.forEach((item) => {
    const el = document.createElement(item.type);
    el.textContent = item.content;
    narrativeContainer.appendChild(el);
  });

  pyramid.forEach((item) => {
    const el = document.createElement("li");
    el.innerHTML = `<strong>${item.title}:</strong> ${item.content}`;
    pyramidContainer.appendChild(el);
  });
}

function renderExperience() {
  const container = document.getElementById("experience-list");

  experienceData.forEach((job) => {
    const el = document.createElement("div");
    el.className = "mb-10";
    el.innerHTML = `
      <h3 class="text-xl font-bold">${job.title}</h3>
      <p class="text-accent font-semibold">${job.company}</p>
      <p class="mt-2">${job.description}</p>
    `;
    container.appendChild(el);
  });
}

function renderProjects() {
  const container = document.getElementById("projects-grid");

  projectsData.forEach((project) => {
    const el = document.createElement("article");
    el.className = "project-card grid md:grid-cols-2 gap-8 md:gap-12 items-center";
    el.innerHTML = `
      <div class="project-details">
        <h3 class="text-2xl font-bold text-text-heading">${project.title}</h3>
        <p class="text-accent font-semibold mt-1">${project.company}</p>
        <div class="my-4 flex flex-wrap gap-2">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="mt-6 space-y-4 text-text-primary prose max-w-none">
          <p><strong class="text-text-heading">[문제 정의]</strong> ${project.problem}</p>
          <p><strong class="text-text-heading">[관점의 재해석]</strong> ${project.reinterpretation}</p>
          <p><strong class="text-text-heading">[결과 및 성과]</strong> ${project.result}</p>
        </div>
        ${project.stat ? `<div class="mt-4 text-sm text-text-secondary">${project.stat.label}: ${project.stat.value}</div>` : ''}
      </div>
      <div class="project-image bg-background p-4 md:p-8 rounded-lg border border-border-color">
        <img src="${project.image}" alt="${project.title}" class="rounded shadow-md w-full object-cover">
      </div>
    `;
    container.appendChild(el);
  });
}

function renderCompetencies() {
  const container = document.getElementById("competencies-list");

  competenciesData.forEach((item) => {
    const el = document.createElement("div");
    el.className = "p-4 border rounded bg-white shadow-sm";
    el.innerHTML = `
      <h4 class="text-lg font-bold">${item.title}</h4>
      <p class="mt-2">${item.description}</p>
    `;
    container.appendChild(el);
  });
}
