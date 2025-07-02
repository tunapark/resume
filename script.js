import * as framerMotion from 'https://esm.run/framer-motion';
import { philosophyData, experienceData, projectsData, competenciesData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    setupHeader();
    setupMobileMenu();
    setupNavigation();
    renderPhilosophy();
    renderExperience();
    renderProjects();
    renderCompetencies();
    createCompetenciesChart();
    setupScrollAnimations();
});

function setupHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function setupMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('.nav-link');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}


function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
        let activeSectionId = null;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSectionId = entry.target.getAttribute('id');
            }
        });

        if (activeSectionId) {
             navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${activeSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

function renderPhilosophy() {
    const narrativeContainer = document.getElementById('philosophy-narrative');
    const pyramidContainer = document.getElementById('planning-pyramid');

    philosophyData.narrative.forEach(item => {
        const el = document.createElement(item.type);
        el.textContent = item.content;
        if(item.type === 'h3') {
            el.className = 'mt-8 mb-4 !text-2xl font-bold';
        }
        narrativeContainer.appendChild(el);
    });

    philosophyData.pyramid.forEach((level, index) => {
        const levelEl = document.createElement('div');
        levelEl.className = 'pyramid-level';
        levelEl.innerHTML = `<span class="font-bold">${level.title}:</span> ${level.content}`;
        pyramidContainer.appendChild(levelEl);

        if (index < philosophyData.pyramid.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'pyramid-arrow';
            arrow.innerHTML = '<i data-lucide="arrow-down" class="w-5 h-5 mx-auto"></i>';
            pyramidContainer.appendChild(arrow);
        }
    });
    lucide.createIcons();
}

function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = experienceData.map(job => `
        <div class="experience-card">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <p class="text-sm text-accent font-semibold">${job.period}</p>
                <h3 class="text-xl font-bold text-text-heading mt-1">${job.company}</h3>
                <h4 class="text-lg font-medium text-text-secondary">${job.role}</h4>
                <ul class="mt-4 space-y-2 list-disc list-inside text-text-primary">
                    ${job.responsibilities.map(res => `<li>${res}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}


function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projectsData.map((project, index) => `
        <article class="project-card grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div class="project-details ${index % 2 !== 0 ? 'md:order-2' : ''}">
                <h3 class="text-2xl font-bold text-text-heading">${project.title}</h3>
                <p class="text-accent font-semibold mt-1">${project.company}</p>
                <div class="my-4 flex flex-wrap gap-2">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
                
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
                <div class="bg-white rounded shadow-md aspect-video flex items-center justify-center text-center p-4">
                    <p class="text-text-secondary italic">${project.visual_placeholder}</p>
                </div>
            </div>
        </article>
    `).join('');
}


function renderCompetencies() {
    const list = document.getElementById('competencies-list');
    list.innerHTML = competenciesData.details.map(c => `
        <div class="competency-card">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                    <i data-lucide="${c.icon}" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                    <h4 class="text-lg font-bold text-text-heading">${c.title}</h4>
                    <p class="text-text-secondary mt-1">${c.description}</p>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function createCompetenciesChart() {
    const ctx = document.getElementById('competencies-chart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: competenciesData.chart.labels,
            datasets: [{
                label: '역량',
                data: competenciesData.chart.data,
                backgroundColor: 'rgba(10, 77, 104, 0.2)',
                borderColor: 'rgb(10, 77, 104)',
                pointBackgroundColor: 'rgb(10, 77, 104)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(10, 77, 104)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.08)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.08)'
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                            family: "'Noto Sans KR', sans-serif",
                            weight: '500'
                        },
                        color: '#2d3748'
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        stepSize: 2,
                        font: {
                            size: 10
                        }
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function setupScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.project-card, .competency-card, .experience-card, #philosophy-narrative, #planning-pyramid');
    
    elementsToAnimate.forEach(el => {
        framerMotion.scroll(framerMotion.animate(el, { opacity: [0, 1], y: [20, 0] }), {
            target: el,
            offset: ["start 0.95", "start 0.8"],
        });
    });
}
