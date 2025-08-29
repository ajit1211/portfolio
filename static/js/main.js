// Smooth scrolling
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
    document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-bs-theme', savedTheme);

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('d-none');
    backToTop.classList.add('d-block');
  } else {
    backToTop.classList.remove('d-block');
    backToTop.classList.add('d-none');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Navigation progress bar
const progressBar = document.querySelector('#nav-progress .progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});

// Download resume animation
const downloadBtn = document.querySelector('.btn-success');
downloadBtn.addEventListener('click', (e) => {
  const text = downloadBtn.querySelector('.download-text');
  const progress = downloadBtn.querySelector('.download-progress');
  text.classList.add('d-none');
  progress.classList.remove('d-none');
  setTimeout(() => {
    text.classList.remove('d-none');
    progress.classList.add('d-none');
  }, 2000);
});

// Typed.js
document.addEventListener('DOMContentLoaded', () => {
  new Typed("#typed", {
    strings: ["Full-Stack Developer", "Python & Django", "MERN Stack", "SQL Enthusiast"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // AOS init
  AOS.init({ duration: 800, once: true });
});