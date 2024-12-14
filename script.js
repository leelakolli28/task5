/* script.js */

// Navbar active link highlighting
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Your message has been sent!');
    contactForm.reset();
});
