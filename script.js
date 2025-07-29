// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
});

// Button functionality
const addToServerBtn = document.querySelector('.btn-primary');
if (addToServerBtn) {
    addToServerBtn.addEventListener('click', () => {
        // Simulate Discord bot invite
        alert('Redirecting to Discord bot invite...');
    });
}

const viewCommandsBtn = document.querySelector('.btn-secondary');
if (viewCommandsBtn) {
    viewCommandsBtn.addEventListener('click', () => {
        // Scroll to commands section or show commands modal
        const commandsSection = document.querySelector('#commands');
        if (commandsSection) {
            commandsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Feature link functionality
document.querySelectorAll('.feature-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add feature-specific functionality here
        console.log('Feature link clicked:', link.textContent);
    });
});

// Popular feature link functionality
const popularLink = document.querySelector('.popular-link');
if (popularLink) {
    popularLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('AutoPost feature coming soon!');
    });
}

// CTA buttons functionality
const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent.includes('Add me')) {
            alert('Redirecting to Discord bot invite...');
        } else if (btn.textContent.includes('Read the docs')) {
            alert('Opening documentation...');
        }
    });
});

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (backToTopBtn) {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// Scroll to top when back to top button is clicked
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Anime character animations
function animateAnimeCharacter() {
    const characterCircle = document.querySelector('.character-circle');
    const animeImage = document.querySelector('.anime-image');
    
    if (characterCircle) {
        // Add hover effects for the character circle
        characterCircle.addEventListener('mouseenter', () => {
            characterCircle.style.transform = 'scale(1.05) rotate(10deg)';
            characterCircle.style.boxShadow = '0 0 80px rgba(255, 105, 180, 0.8)';
        });
        
        characterCircle.addEventListener('mouseleave', () => {
            characterCircle.style.transform = 'scale(1) rotate(0deg)';
            characterCircle.style.boxShadow = '0 0 60px rgba(255, 105, 180, 0.6), inset 0 0 60px rgba(0, 0, 0, 0.2)';
        });
    }
    
    if (animeImage) {
        // Add subtle zoom effect on hover for the image
        animeImage.addEventListener('mouseenter', () => {
            animeImage.style.transform = 'scale(1.1)';
        });
        
        animeImage.addEventListener('mouseleave', () => {
            animeImage.style.transform = 'scale(1)';
        });
    }
}

// Initialize anime character animations
document.addEventListener('DOMContentLoaded', animateAnimeCharacter);

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads (optional)
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.hero-title');
    if (titleElement) {
        // Don't apply typing effect, just animate in
        titleElement.style.opacity = '0';
        titleElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            titleElement.style.transition = 'all 0.8s ease-out';
            titleElement.style.opacity = '1';
            titleElement.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Smooth reveal animation for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Apply reveal animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        revealObserver.observe(section);
    });
});

// Glass morphism effect for cards
function addGlassEffect() {
    const glassCards = document.querySelectorAll('.feature-card, .popular-card');
    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize glass effect
document.addEventListener('DOMContentLoaded', addGlassEffect);

// Preloader animation
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <div class="spinner"></div>
            <p>Loading Prune...</p>
        </div>
    `;
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loader = preloader.querySelector('.loader');
    loader.style.cssText = `
        text-align: center;
        color: white;
    `;
    
    const spinner = preloader.querySelector('.spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    `;
    
    const spinKeyframes = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = spinKeyframes;
    document.head.appendChild(style);
    
    document.body.appendChild(preloader);
    
    // Remove preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize preloader
document.addEventListener('DOMContentLoaded', createPreloader);

// Add smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 
