// Tab Switching Logic for Multi-Page SPA Experience
function switchTab(tabId) {
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden-section');
    });

    const target = document.getElementById(tabId);
    if (target) {
        target.classList.remove('hidden-section');
        target.classList.add('active-section');
    }

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active-tab'));
    event.target.classList.add('active-tab');
}

// Update Spectral Band Wavelength Readout
function updateBand(val) {
    const wavelength = (val * 0.045).toFixed(2);
    document.getElementById('bandValue').innerText = wavelength + " µm";
}

// Animated Space Particle / Starfield Background (Techfest Gaming Aesthetic)
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.1,
        alpha: Math.random()
    });
}

function animateSpace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    particles.forEach(p => {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speed;
        if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animateSpace);
}
animateSpace();
