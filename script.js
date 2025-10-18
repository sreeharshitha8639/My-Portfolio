// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // Close mobile menu after clicking a link
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
  });
});

// Project card animation (works for both hover and tap)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
  card.addEventListener('touchstart', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  });
  card.addEventListener('touchend', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const navbar = document.querySelector('.navbar');
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});