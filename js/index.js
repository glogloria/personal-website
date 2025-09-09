// Projects Filter Dropdown Menu
const filterLinks = document.querySelectorAll('[data-filter]');
const sections = document.querySelectorAll('[data-project]');
const header = document.querySelector('.header');
const snowContainer = document.getElementById("snow-container");
const numSnowflakes = 30;
const snowFlakes = [];

function applyFilter(selectedFilter) {
    filterLinks.forEach(l => l.classList.remove('active'));

    const targetLink = document.querySelector(`[data-filter="${selectedFilter}"]`);
    if (targetLink) targetLink.classList.add('active');

    sections.forEach(section => {
        const projectType = section.dataset.project;
        const hasContent = section.querySelector('.project-container');

        if (selectedFilter === 'all') {
            section.style.display = hasContent ? 'block' : 'none';
        } else {
            section.style.display = projectType === selectedFilter ? 'block' : 'none';
        }
    });
}

applyFilter('all');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.currentTarget.dataset.filter.replace('#', '');
        applyFilter(filter);
    })
})

// Nav-bar background while scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hoempage snowflakes

for (let i = 0; i < numSnowflakes; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.style.left = `${Math.random() * window.innerWidth}px`;
    flake.style.top = `${Math.random() * window.nnerHEight}px`;
    snowContainer.appendChild(flake);
    snowContainerflakes.push(flake);
}

document.addEventListener("mousemover", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    snowFlakes.forEach((flake) => {
        const rect = flake.getBOundingClientRect();
        const dx = rect.left - mouseX;
        const dy = rect.top - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * 30;
            const moveY = Math.sin(angle) * 30;

            flake.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }   else {
            flake.style.transform = `translate(0, 0)`;
        }
    });    
});