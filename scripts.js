// script.js
document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.getElementById('heart');
    const button = document.getElementById('animate-btn');
    const text = document.getElementById('text');

    button.addEventListener('click', () => {
        heartContainer.style.display = 'flex';
        heartContainer.style.animation = 'fadeIn 1s forwards';
        text.style.animation = 'fadeIn 2s forwards';
        button.style.display = 'none'; // Hide button after it's clicked
    });

    heart.addEventListener('click', (e) => {
        heart.style.background = heart.style.background === 'linear-gradient(45deg, #ff6b6b, #ff4757)' ? 'linear-gradient(45deg, #ff9999, #ffcccc)' : 'linear-gradient(45deg, #ff6b6b, #ff4757)';
        
        for (let i = 0; i < 20; i++) {
            createParticle(e.clientX, e.clientY);
        }
    });
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x - size / 2}px`;
    particle.style.top = `${y - size / 2}px`;
    particle.style.setProperty('--rand', Math.random());

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}
