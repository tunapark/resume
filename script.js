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
    const el = document.createElement("div");
    el.className = "pyramid-level";
    el.innerHTML = `<span class="font-bold">${item.title}:</span> ${item.content}`;
    pyramidContainer.appendChild(el);

    if (item !== pyramid[pyramid.length - 1]) {
      const arrow = document.createElement("div");
      arrow.className = "pyramid-arrow";
      arrow.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down w-5 h-5 mx-auto"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
      `;
      pyramidContainer.appendChild(arrow);
    }
  });
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  experienceData.forEach((job) => {
    const el = document.createElement("div");
    el.className = "mb-8";
    el.innerHTML = `
      <h3 class="text-xl font-semibold text-text-heading">${job.company}</h3>
      <p class="text-text-secondary">${job.role} | ${job.period}</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        ${job.responsibilities.map((item) => `<li class="text-text-secondary">${item}</li>`).join("")}
      </ul>
    `;
    container.appendChild(el);
  });
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projectsData.map((project, index) => `
        <article class="project-card grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div class="project-details ${index % 2 !== 0 ? 'md:order-2' : ''}">
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
                ${project.stat ? `
                <div class="mt-6">
                    <span class="project-stat">${project.stat.value}</span>
                    <p class="text-text-secondary text-sm">${project.stat.label}</p>
                </div>
                ` : ''}
            </div>
            <div class="project-image ${index % 2 !== 0 ? 'md:order-1' : ''} bg-background p-4 md:p-8 rounded-lg border border-border-color">
                ${
                    project.image
                        ? `<img src="${project.image}" alt="${project.title}" class="rounded shadow-md w-full">`
                        : `<div class="bg-white rounded shadow-md aspect-video flex items-center justify-center text-center p-4">
                               <p class="text-text-secondary italic">${project.visual_placeholder}</p>
                           </div>`
                }
            </div>
        </article>
    `).join('');
}

    const textBox = document.createElement("div");
    textBox.className = "project-details";
    textBox.innerHTML = `
      <h3 class="text-2xl font-bold text-text-heading">${project.title}</h3>
      <p class="text-accent font-semibold mt-1">${project.company}</p>
      <div class="my-4 flex flex-wrap gap-2">
        ${project.tags
          .map((tag) => `<span class="project-tag">${tag}</span>`)
          .join("")}
      </div>
      <div class="mt-6 space-y-4 text-text-primary prose max-w-none">
        <p><strong class="text-text-heading">[문제 정의]</strong> ${project.problem}</p>
        <p><strong class="text-text-heading">[관점의 재해석]</strong> ${project.reinterpretation}</p>
        <p><strong class="text-text-heading">[결과 및 성과]</strong> ${project.result}</p>
      </div>
      ${
        project.stat
          ? `<div class="mt-6"><span class="project-stat">${project.stat.value}</span><p class="text-text-secondary text-sm">${project.stat.label}</p></div>`
          : ""
      }
    `;

    el.appendChild(project.image ? imageBox : textBox);
    el.appendChild(project.image ? textBox : imageBox);
    container.appendChild(el);
  });
}

function renderCompetencies() {
  const container = document.getElementById("competencies-list");
  if (!container || !competenciesData?.details) return;

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
