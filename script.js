// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.bento-card, .use-case-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.background = 'transparent';
    }
    
    lastScroll = currentScroll;
});

// Typing cursor animation
const cursors = document.querySelectorAll('.cursor');
cursors.forEach(cursor => {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 530);
});

// Testimonials auto-scroll pause on hover
const testimonialsScroll = document.querySelector('.testimonials-scroll');
if (testimonialsScroll) {
    testimonialsScroll.addEventListener('mouseenter', () => {
        testimonialsScroll.style.animationPlayState = 'paused';
    });
    
    testimonialsScroll.addEventListener('mouseleave', () => {
        testimonialsScroll.style.animationPlayState = 'running';
    });
}

// Button hover effects
document.querySelectorAll('.btn-gradient, .btn-outline, .action-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add smooth transitions to buttons
document.querySelectorAll('button').forEach(button => {
    button.style.transition = 'transform 0.2s ease';
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroMask = document.querySelector('.hero-video-mask');
    const heroBlur = document.querySelector('.hero-blur');
    
    if (heroMask) {
        heroMask.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (heroBlur) {
        heroBlur.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        const navbar = document.querySelector('.nav-container');
        navbar.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
};

// Initialize on load
window.addEventListener('load', () => {
    // Add entrance animation
    document.body.style.opacity = '1';
});

// Preload critical images
const preloadImages = () => {
    const images = [
        'client/public/figmaAssets/hero-video-mask-group.svg',
        'client/public/figmaAssets/background-gradient---bacground-gradient-shape.png',
        'client/public/figmaAssets/image-wrapper-1.svg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

preloadImages();
