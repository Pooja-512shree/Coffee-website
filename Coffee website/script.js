// Mobile Menu Toggle
const menuOpenBtn = document.getElementById('menu-open-button');
const menuCloseBtn = document.getElementById('menu-close-button');
const body = document.body;

menuOpenBtn.addEventListener('click', () => {
    body.classList.add('show-mobile-menu');
});

menuCloseBtn.addEventListener('click', () => {
    body.classList.remove('show-mobile-menu');
});

// Basic Testimonial Slider (Auto-Slide)
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.display = (i === index) ? 'flex' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize
showTestimonial(currentTestimonial);
setInterval(nextTestimonial, 4000); // Change testimonial every 4 seconds
