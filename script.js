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
  const pyramidContainer = document.getElementById("philosophy-pyramid");

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
    el.className = "mb-8";
    el.innerHTML = `
      <h3 class="text-xl font-semibold text-text-heading">${job.company}</h3>
      <p class="text-text-secondary">${job.role} | ${job.period}</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        ${job.responsibilities
          .map((item) => `<li class="text-text-secondary">${item}</li>`) 
          .join("")}
      </ul>
    `;
    container.appendChild(el);
  });
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  projectsData.forEach((project) => {
    const el = document.createElement("div");
    el.className = "project-entry grid md:grid-cols-2 gap-8 mb-16 items-center";

    const imageBox = document.createElement("div");
    imageBox.className =
      "project-image md:order-1 bg-background p-4 md:p-8 rounded-lg border border-border-color";

    if (project.image) {
      imageBox.innerHTML = `
        <div class="bg-white rounded shadow-md aspect-video overflow-hidden">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
        </div>
      `;
    } else {
      imageBox.innerHTML = `
        <div class="bg-white rounded shadow-md aspect-video flex items-center justify-center text-center p-4">
          <p class="text-text-secondary italic">${project.visual_placeholder}</p>
        </div>
      `;
    }

    const textBox = document.createElement("div");
    textBox.innerHTML = `
      <h3 class="text-xl font-bold text-text-heading mb-2">${project.title}</h3>
      <p class="text-text-secondary mb-4">${project.problem}</p>
      <p class="text-text-secondary mb-4 font-semibold">→ ${project.reinterpretation}</p>
      <p class="text-text-secondary mb-4">${project.result}</p>
      <div class="flex flex-wrap gap-2">
        ${project.tags
          .map(
            (tag) =>
              `<span class="bg-accent/10 text-accent px-2 py-1 rounded text-sm">${tag}</span>`
          )
          .join("")}
      </div>
      ${
        project.stat
          ? `<p class="mt-2 text-sm text-text-secondary">📊 <strong>${project.stat.value}</strong> – ${project.stat.label}</p>`
          : ""
      }
    `;

    el.appendChild(imageBox);
    el.appendChild(textBox);
    container.appendChild(el);
  });
}


function renderCompetencies() {
  const container = document.getElementById("competencies-list");
  competenciesData.details.forEach((comp) => {
    const el = document.createElement("div");
    el.className = "competency-card";
    el.innerHTML = `
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0 bg-accent/10 p-3 rounded-full">
          <i data-lucide="${comp.icon}" class="w-6 h-6 text-accent"></i>
        </div>
        <div>
          <h4 class="text-lg font-bold text-text-heading">${comp.title}</h4>
          <p class="text-text-secondary mt-1">${comp.description}</p>
        </div>
      </div>
    `;
    container.appendChild(el);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
