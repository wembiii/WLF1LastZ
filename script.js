document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav
    window.go = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    // Hero Animation
    setTimeout(() => {
        document.getElementById('title').style.opacity = '1';
        document.getElementById('title').style.transform = 'translateY(0)';
    }, 100);

    // Fetching Data (Simulated fetch or local)
    // In a real server environment, use: fetch('data.json').then(...)
});