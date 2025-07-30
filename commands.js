// Commands Page JavaScript

// Page load fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
    }
});

// Search and filter functionality
const commandSearch = document.getElementById('commandSearch');
const categoryFilter = document.getElementById('categoryFilter');
const commandsList = document.getElementById('commandsList');
const commandCards = document.querySelectorAll('.command-card');

// Search functionality
if (commandSearch) {
    commandSearch.addEventListener('input', filterCommands);
}

// Category filter functionality
if (categoryFilter) {
    categoryFilter.addEventListener('change', filterCommands);
}

// Filter commands based on search and category
function filterCommands() {
    const searchTerm = commandSearch.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    commandCards.forEach((card, index) => {
        const commandName = card.querySelector('h3').textContent.toLowerCase();
        const commandDescription = card.querySelector('.command-description').textContent.toLowerCase();
        const commandCategory = card.dataset.category;
        
        const matchesSearch = commandName.includes(searchTerm) || commandDescription.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || commandCategory === selectedCategory;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            // Add fade-in animation with staggered delay
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50);
        } else {
            card.style.display = 'none';
            card.classList.remove('visible');
        }
    });
}

// Copy command functionality
document.querySelectorAll('.fa-copy').forEach(copyIcon => {
    copyIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const commandName = copyIcon.closest('.command-card').querySelector('h3').textContent;
        navigator.clipboard.writeText(commandName).then(() => {
            // Show copy feedback
            copyIcon.style.color = '#10b981';
            setTimeout(() => {
                copyIcon.style.color = '';
            }, 1000);
        });
    });
});

// Expand/collapse functionality
document.querySelectorAll('.fa-chevron-down').forEach(chevron => {
    chevron.addEventListener('click', (e) => {
        e.stopPropagation();
        const commandCard = chevron.closest('.command-card');
        const commandContent = commandCard.querySelector('.command-content');
        
        if (commandContent.style.maxHeight) {
            commandContent.style.maxHeight = null;
            chevron.style.transform = 'rotate(0deg)';
        } else {
            commandContent.style.maxHeight = commandContent.scrollHeight + 'px';
            chevron.style.transform = 'rotate(180deg)';
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search on '/' key
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        commandSearch.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === commandSearch) {
        commandSearch.value = '';
        filterCommands();
        commandSearch.blur();
    }
});

// Command card hover effects
commandCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
        card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
});

// Initialize command cards with fade-in animation
function initializeCommandCards() {
    commandCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Add fade-in animation with staggered delay
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Search bar focus effects
if (commandSearch) {
    commandSearch.addEventListener('focus', () => {
        commandSearch.parentElement.style.borderColor = 'var(--primary-color)';
        commandSearch.parentElement.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)';
    });
    
    commandSearch.addEventListener('blur', () => {
        commandSearch.parentElement.style.borderColor = '';
        commandSearch.parentElement.style.boxShadow = '';
    });
}

// Filter dropdown effects
if (categoryFilter) {
    categoryFilter.addEventListener('focus', () => {
        categoryFilter.parentElement.style.borderColor = 'var(--primary-color)';
    });
    
    categoryFilter.addEventListener('blur', () => {
        categoryFilter.parentElement.style.borderColor = '';
    });
}

// Stats counter animation
function animateStats() {
    const statTags = document.querySelectorAll('.stat-tag');
    statTags.forEach(tag => {
        const text = tag.textContent;
        const number = text.match(/\d+/);
        if (number) {
            const targetNumber = parseInt(number[0]);
            let currentNumber = 0;
            const increment = targetNumber / 50;
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(timer);
                }
                tag.textContent = text.replace(number[0], Math.floor(currentNumber));
            }, 20);
        }
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize command cards
    initializeCommandCards();
    
    // Animate stats
    setTimeout(animateStats, 500);
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Auto-refresh command list (optional)
setInterval(() => {
    // This could be used to fetch new commands from an API
    console.log('Commands page loaded successfully');
}, 30000); 
