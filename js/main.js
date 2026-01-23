// Main Entry Point
console.log('Portfolio Application Initialized');

// Dynamic Skills Loader (if element exists)
const skillsContainer = document.getElementById('skills-container');

if (skillsContainer) {
    const skills = [
        { name: 'JavaScript', level: '90%', icon: 'bi-filetype-js' },
        { name: 'Node.js', level: '85%', icon: 'bi-hexagon' },
        { name: 'React', level: '80%', icon: 'bi-box' },
        { name: 'Python', level: '75%', icon: 'bi-filetype-py' },
        { name: 'SQL', level: '70%', icon: 'bi-database' }
    ];

    skills.forEach(skill => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';

        col.innerHTML = `
      <div class="card h-100 text-center p-4 border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${skill.name}</h5>
          <div class="progress mt-3" style="height: 10px;">
            <div class="progress-bar bg-primary" role="progressbar" 
                 style="width: ${skill.level}" 
                 aria-valuenow="${parseInt(skill.level)}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted mt-2 d-block">${skill.level}</small>
        </div>
      </div>
    `;

        skillsContainer.appendChild(col);
    });
}
