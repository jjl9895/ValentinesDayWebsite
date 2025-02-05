document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('falling-hearts-container');
    const numberOfHearts = 20;
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('falling-heart');
      heart.textContent = "♥";
      heart.style.left = Math.random() * 100 + 'vw';
      // Randomize the animation duration (e.g., between 3 and 6 seconds)
      const duration = Math.random() * 3 + 3;
      heart.style.animationDuration = duration + 's';
      heart.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(heart);
    }
  });
  