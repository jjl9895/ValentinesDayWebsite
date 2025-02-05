document.addEventListener('DOMContentLoaded', () => {
    // Create bouncing hearts in the background
    const heartsContainer = document.getElementById('hearts-container');
    const numberOfHearts = 15;
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = "♥";
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = Math.random() * 100 + 'vh';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      heart.style.animationDelay = Math.random() * 2 + 's';
      heartsContainer.appendChild(heart);
    }
  
    // Get references to fixed elements
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const invitationBox = document.querySelector('.invitation-box');
    const message = document.getElementById('message');
  
    // Clicking the fixed Yes button navigates to the celebration page
    yesButton.addEventListener('click', () => {
      window.location.href = 'celebration.html';
    });
  
    // When the No button is clicked, create two extra Yes buttons:
    // one inside the invitation box and one at a random position on the page.
    noButton.addEventListener('click', () => {
      // Create extra Yes button inside the invitation box
      const extraYesButtonBox = document.createElement('button');
      extraYesButtonBox.classList.add('heart-button', 'random-button');
      extraYesButtonBox.textContent = '♥ Yes';
      // Position it randomly within the box (using percentages so it stays inside)
      extraYesButtonBox.style.left = Math.random() * 80 + '%';
      extraYesButtonBox.style.top = Math.random() * 80 + '%';
      extraYesButtonBox.addEventListener('click', () => {
        window.location.href = 'celebration.html';
      });
      invitationBox.appendChild(extraYesButtonBox);
  
      // Create extra Yes button randomly on the page (outside the fixed box)
      const extraYesButtonBody = document.createElement('button');
      extraYesButtonBody.classList.add('heart-button', 'random-button');
      extraYesButtonBody.textContent = '♥ Yes';
      extraYesButtonBody.style.left = Math.random() * 100 + 'vw';
      extraYesButtonBody.style.top = Math.random() * 100 + 'vh';
      extraYesButtonBody.addEventListener('click', () => {
        window.location.href = 'celebration.html';
      });
      document.body.appendChild(extraYesButtonBody);
      
    });
  });
  