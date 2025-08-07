document.addEventListener('DOMContentLoaded', function() {
    const discordButton = document.querySelector('.discord-button');
    const shineEffect = document.querySelector('.shine-effect');
    let shineInterval;
    let isHovering = false;

    // Function to trigger shine effect
    function triggerShine() {
        shineEffect.style.left = '-100%';
        setTimeout(() => {
            shineEffect.style.left = '100%';
        }, 50);
    }

    // Mouse enter event
    discordButton.addEventListener('mouseenter', function() {
        isHovering = true;
        triggerShine(); // Initial shine on hover
        
        // Set up repeating shine every 5 seconds
        shineInterval = setInterval(() => {
            if (isHovering) {
                triggerShine();
            }
        }, 5000);
    });

    // Mouse leave event
    discordButton.addEventListener('mouseleave', function() {
        isHovering = false;
        clearInterval(shineInterval);
        shineEffect.style.left = '-100%';
    });

    // Add some extra visual flair with a subtle pulse effect
    discordButton.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 2s infinite';
    });

    discordButton.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: translateY(-3px) scale(1);
        }
        50% {
            transform: translateY(-3px) scale(1.02);
        }
        100% {
            transform: translateY(-3px) scale(1);
        }
    }
`;
document.head.appendChild(style); 
