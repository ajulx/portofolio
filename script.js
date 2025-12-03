// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add animate class for specific elements
            if (entry.target.classList.contains('tentang-image') || 
                entry.target.classList.contains('tentang-text') ||
                entry.target.classList.contains('hero-name')) {
                entry.target.classList.add('animate');
            }
            
            // Trigger Keahlian zig-zag animation when section is visible
            if (entry.target.id === 'keahlian') {
                triggerKeahlianZigZag();
            }
        } else {
            // Remove classes when element is not intersecting (reversible animation)
            entry.target.classList.remove('visible');
            if (entry.target.classList.contains('tentang-image') || 
                entry.target.classList.contains('tentang-text')) {
                entry.target.classList.remove('animate');
            }
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe Tentang Saya specific elements for left-right animation
    const tentangImage = document.querySelector('.tentang-image');
    const tentangText = document.querySelector('.tentang-text');
    
    if (tentangImage) {
        observer.observe(tentangImage);
    }
    
    if (tentangText) {
        observer.observe(tentangText);
    }
    
    // Observe hero name for slide-in animation
    const heroName = document.querySelector('.hero-name');
    
    if (heroName) {
        observer.observe(heroName);
    }
    
    // Observe experience items
    const pengalamanItems = document.querySelectorAll('.pengalaman-item');
    pengalamanItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe project cards
    const projekCards = document.querySelectorAll('.projek-card');
    projekCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe contact form
    const kontakForm = document.querySelector('.kontak-form');
    if (kontakForm) {
        observer.observe(kontakForm);
    }
    
    // Observe Keahlian section for scroll-triggered zig-zag animation
    const keahlianSection = document.getElementById('keahlian');
    if (keahlianSection) {
        observer.observe(keahlianSection);
    }
});

// Keahlian Zig-Zag Animation (Scroll-triggered)
let keahlianAnimationTriggered = false;

function triggerKeahlianZigZag() {
    // Prevent animation from triggering multiple times
    if (keahlianAnimationTriggered) return;
    keahlianAnimationTriggered = true;
    
    const keahlianBoxes = document.querySelectorAll('.keahlian-box');
    if (keahlianBoxes.length === 0) return;
    
    // Create zig-zag animation sequence based on numbering:
    // Left: 1,2,3,4,5 (top to bottom)
    // Right: 6,7,8,9,10 (top to bottom)
    const leftBoxes = document.querySelectorAll('.keahlian-kiri .keahlian-box');
    const rightBoxes = document.querySelectorAll('.keahlian-kanan .keahlian-box');
    
    const animationSequence = [];
    
    // Create zig-zag pattern: 1,6,2,7,3,8,4,9,5,10
    for (let i = 0; i < 5; i++) {
        // Add left box (1,2,3,4,5)
        if (leftBoxes[i]) {
            animationSequence.push({
                box: leftBoxes[i],
                delay: i * 300 // 0, 300, 600, 900, 1200ms
            });
        }
        
        // Add right box (6,7,8,9,10)
        if (rightBoxes[i]) {
            animationSequence.push({
                box: rightBoxes[i],
                delay: (i * 300) + 150 // 150, 450, 750, 1050, 1350ms
            });
        }
    }
    
    // Execute animation sequence
    animationSequence.forEach(({ box, delay }) => {
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
            box.style.transition = 'all 0.6s ease';
        }, delay);
    });
}

// Contact Form Handler
document.querySelector('.kontak-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subjek').value;
    const message = document.getElementById('pesan').value;
    
    // Create mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Optional: Show success message
    alert('Terima kasih! Pesan Anda akan dibuka di aplikasi email.');
    
    // Reset form
    this.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Offset for fixed navbar
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



// WhatsApp Copy Functionality
document.addEventListener('DOMContentLoaded', () => {
    const whatsappIcon = document.getElementById('whatsapp-icon');
    const copyNotification = document.getElementById('copy-notification');
    
    if (whatsappIcon && copyNotification) {
        whatsappIcon.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const phoneNumber = '081374640683';
            
            try {
                // Try to use the modern clipboard API
                await navigator.clipboard.writeText(phoneNumber);
                
                // Show notification
                copyNotification.classList.add('show');
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 3000);
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = phoneNumber;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    copyNotification.classList.add('show');
                    
                    setTimeout(() => {
                        copyNotification.classList.remove('show');
                    }, 3000);
                } catch (fallbackErr) {
                    console.error('Failed to copy:', fallbackErr);
                }
                
                document.body.removeChild(textArea);
            }
        });
    }
});

// Initialize particles animation when page loads
window.addEventListener('load', () => {
    initParticles();
});

// Particle Animation System
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 0.5; // Slightly smaller size 0.5-3.5px
            this.speedX = (Math.random() * 0.8 + 0.2) * 0.3; // Much slower movement to the right
            this.speedY = -(Math.random() * 0.2 + 0.02) * 0.2; // Slower upward movement
            this.opacity = Math.random() * 0.25 + 0.05; // Even lower opacity 0.05-0.3
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Respawn when out of bounds
            if (this.x > canvas.width || this.y < -10) {
                this.reset();
                this.x = -10; // Start from left
                this.y = canvas.height + 10; // Start from bottom
            }
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Create particles
    function createParticles() {
        const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 8000)); // Increased particle count significantly
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}