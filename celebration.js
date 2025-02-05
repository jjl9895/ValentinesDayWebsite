document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hearts-container');
    const numberOfHearts = 40; // Increased number of hearts
    const hearts = [];
  
    // Create hearts with initial positions above the viewport and random velocities.
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = "♥";
  
      // Initial X position anywhere along the width.
      const x = Math.random() * window.innerWidth;
      // Start above the viewport so they "fall" into view.
      const y = -Math.random() * window.innerHeight;
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
  
      // Set a larger font size (between 30 and 60px) for bigger hearts.
      const fontSize = Math.random() * 30 + 30;
      heart.style.fontSize = fontSize + 'px';
  
      // Set initial velocities.
      // Horizontal speed between -1 and 1.
      heart.vx = (Math.random() * 2 - 1);
      // Vertical speed between 1 and 2 for a gentler fall.
      heart.vy = Math.random() * 1 + 1;
  
      hearts.push(heart);
      container.appendChild(heart);
    }
  
    // Simple collision detection (axis-aligned bounding box)
    function isColliding(rect1, rect2) {
      return !(rect1.right < rect2.left ||
               rect1.left > rect2.right ||
               rect1.bottom < rect2.top ||
               rect1.top > rect2.bottom);
    }
  
    // Physics simulation parameters
    const gravity = 0.01;      // Lower gravity for a gentle float
    const restitution = 0.8;   // Bounce energy loss factor
  
    function animateHearts() {
      // Update each heart's position and velocity.
      hearts.forEach(heart => {
        // Apply gravity to vertical velocity.
        heart.vy += gravity;
  
        // Get current position.
        let x = parseFloat(heart.style.left);
        let y = parseFloat(heart.style.top);
  
        // Update positions based on velocities.
        x += heart.vx;
        y += heart.vy;
  
        // Get heart's current dimensions.
        const rect = heart.getBoundingClientRect();
  
        // Bounce off left/right boundaries.
        if (x < 0) {
          x = 0;
          heart.vx *= -1;
        } else if (x + rect.width > window.innerWidth) {
          x = window.innerWidth - rect.width;
          heart.vx *= -1;
        }
  
        // Bounce off the bottom of the viewport.
        if (y + rect.height > window.innerHeight) {
          y = window.innerHeight - rect.height;
          heart.vy *= -restitution;
        }
        // Bounce off the top of the viewport.
        if (y < 0) {
          y = 0;
          heart.vy *= -1;
        }
  
        // Update the heart's position.
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
      });
  
      // Check for collisions between hearts and swap velocities if colliding.
      for (let i = 0; i < hearts.length; i++) {
        for (let j = i + 1; j < hearts.length; j++) {
          const rectA = hearts[i].getBoundingClientRect();
          const rectB = hearts[j].getBoundingClientRect();
          if (isColliding(rectA, rectB)) {
            // Swap the velocities of the colliding hearts.
            let tempVx = hearts[i].vx;
            let tempVy = hearts[i].vy;
            hearts[i].vx = hearts[j].vx;
            hearts[i].vy = hearts[j].vy;
            hearts[j].vx = tempVx;
            hearts[j].vy = tempVy;
          }
        }
      }
  
      requestAnimationFrame(animateHearts);
    }
  
    animateHearts();
  });
  