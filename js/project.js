import './main.js';

const galleryContainer = document.getElementById('project-container');

async function loadProjects() {
    if (!galleryContainer) return;

    try {
        /* Asynchronously fetching project metadata from local static JSON storage */
        const response = await fetch('data/projects.json');
        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();

        galleryContainer.innerHTML = ''; // Clear loading state

        projects.forEach(project => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 mb-4';

            col.innerHTML = `
            <div class="card mb-4">
                <img src="${project.image}" class="card-img-top" alt="${project.title}" onerror="this.onerror=null;this.src='https://placehold.co/800?text=Project&font=roboto';">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description || 'A showcased web development project.'}</p>
                    <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
                </div>
            </div>
            `;

            galleryContainer.appendChild(col);
        });
    } catch (error) {
        console.error('Failed to load projects:', error);
        galleryContainer.innerHTML = `<div class="alert alert-danger">Failed to load projects. Please try again later.</div>`;
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
