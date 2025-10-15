// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize smooth scrolling
let smoother;
if (window.innerWidth > 768) {
    smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
    });
}

// Page load animation
window.addEventListener('load', () => {
    // Navbar entrance
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.template-btn', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });

    // Hero content animations
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    
    heroTimeline
        .from('.hero-badge', {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        })
        .from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.hero-description', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.hero-buttons button', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.hero-dashboard', {
            y: 100,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: 'power3.out'
        }, '-=0.5');
});

// Parallax effect for hero elements
gsap.to('.hero-video-mask', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.hero-blur', {
    yPercent: 20,
    scale: 1.2,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// Dashboard card typing animation
const typingAnimation = () => {
    const texts = document.querySelectorAll('.dashboard-text, .response-text');
    texts.forEach(text => {
        const content = text.textContent;
        text.textContent = '';
        let index = 0;
        
        ScrollTrigger.create({
            trigger: text,
            start: 'top 80%',
            onEnter: () => {
                const interval = setInterval(() => {
                    if (index < content.length) {
                        text.textContent += content[index];
                        index++;
                    } else {
                        clearInterval(interval);
                    }
                }, 30);
            },
            once: true
        });
    });
};

// Trusted section animation
gsap.from('.trusted-section', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.trusted-section',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.partners-logo', {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.partners-logo',
        start: 'top 85%'
    }
});

// Bento section animations
gsap.from('.section-badge', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.bento-section',
        start: 'top 70%'
    }
});

gsap.from('.section-title', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%'
    }
});

gsap.from('.section-description', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: '.section-description',
        start: 'top 85%'
    }
});

// Bento cards stagger animation
gsap.from('.bento-card', {
    y: 80,
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 75%'
    }
});

// Bento card hover effect
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to(this.querySelector('.bento-image'), {
            scale: 1.05,
            duration: 0.3
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to(this.querySelector('.bento-image'), {
            scale: 1,
            duration: 0.3
        });
    });
});

// AI Powered section animations
const aiTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.ai-powered-section',
        start: 'top 70%'
    }
});

aiTimeline
    .from('.ai-globe', {
        rotation: 0,
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    })
    .from('.ai-text', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.ai-gradient-text', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.3');

// AI Dashboard with parallax
gsap.to('.ai-dashboard-img', {
    y: -50,
    scale: 1.05,
    ease: 'none',
    scrollTrigger: {
        trigger: '.ai-dashboard-preview',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
    }
});

// Chat messages animation
gsap.from('.chat-user-message', {
    x: 100,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.ai-chat-interface',
        start: 'top 80%'
    }
});

gsap.from('.chat-ai-response', {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
        trigger: '.ai-chat-interface',
        start: 'top 80%'
    }
});

// Use cases cards animation
gsap.from('.use-case-card', {
    y: 60,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.5)',
    scrollTrigger: {
        trigger: '.use-cases',
        start: 'top 80%'
    }
});

// Use case card hover effect
document.querySelectorAll('.use-case-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -15,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to(this.querySelector('img'), {
            rotation: 10,
            scale: 1.1,
            duration: 0.3
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            scale: 1,
            duration: 0.3
        });
        
        gsap.to(this.querySelector('img'), {
            rotation: 0,
            scale: 1,
            duration: 0.3
        });
    });
});

// Integrate section animation
gsap.from('.integrate-title', {
    y: 50,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.integrate-section',
        start: 'top 70%'
    }
});

// Testimonials section
gsap.from('.testimonials-section .section-badge', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 70%'
    }
});

// Testimonial cards entrance
gsap.from('.testimonial-card', {
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.testimonials-scroll',
        start: 'top 80%'
    }
});

// Continuous scroll animation for testimonials
const testimonialsScroll = document.querySelector('.testimonials-scroll');
if (testimonialsScroll) {
    const scrollWidth = testimonialsScroll.scrollWidth;
    const containerWidth = testimonialsScroll.parentElement.offsetWidth;
    
    gsap.to('.testimonials-scroll', {
        x: -(scrollWidth / 2),
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % (scrollWidth / 2))
        }
    });
    
    // Pause on hover
    testimonialsScroll.addEventListener('mouseenter', () => {
        gsap.to('.testimonials-scroll', { timeScale: 0, duration: 0.3 });
    });
    
    testimonialsScroll.addEventListener('mouseleave', () => {
        gsap.to('.testimonials-scroll', { timeScale: 1, duration: 0.3 });
    });
}

// Testimonial card hover effect
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -10,
            scale: 1.03,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            scale: 1,
            duration: 0.3
        });
    });
});

// CTA section animation
gsap.from('.cta-title', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 75%'
    }
});

gsap.from('.cta-description', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 75%'
    }
});

gsap.from('.cta-section .btn-large', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 75%'
    }
});

// Footer animation
gsap.from('.footer-content', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 85%'
    }
});

// Button hover animations with GSAP
document.querySelectorAll('.btn-gradient, .btn-outline, .action-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Navbar scroll behavior
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

ScrollTrigger.create({
    start: 'top -100',
    end: 99999,
    onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > 100) {
            gsap.to('.navbar', {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                duration: 0.3
            });
        } else {
            gsap.to('.navbar', {
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)',
                duration: 0.3
            });
        }
        lastScroll = currentScroll;
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            if (smoother) {
                smoother.scrollTo(target, true, 'top 100px');
            } else {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Cursor blink animation
gsap.to('.cursor', {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Gradient button glow effect
document.querySelectorAll('.btn-gradient').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            boxShadow: '0 0 20px rgba(255, 137, 24, 0.5)',
            duration: 0.3
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            boxShadow: '0 0 0px rgba(255, 137, 24, 0)',
            duration: 0.3
        });
    });
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Initialize typing animation
setTimeout(typingAnimation, 1000);
