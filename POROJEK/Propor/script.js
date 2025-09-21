 document.addEventListener('DOMContentLoaded', function() {
            // Scroll to top functionality
            const scrollTop = document.querySelector('.scroll-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTop.classList.add('active');
                } else {
                    scrollTop.classList.remove('active');
                }
            });
            
            scrollTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Animation on scroll
            const animateElements = document.querySelectorAll('.animate-element');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(el => {
                observer.observe(el);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu after clicking a link
                        document.getElementById('menu-toggle').checked = false;
                    }
                });
            });
            
            // Add typing animation to the home section
            const textElement = document.querySelector('.home-content p');
            const originalText = textElement.textContent;
            textElement.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    textElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }
            
            // Start typing animation when home section is in view
            const homeObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    typeWriter();
                    homeObserver.disconnect();
                }
            });
            
            homeObserver.observe(document.querySelector('.home'));
            
            // Add hover effect to project boxes
            const projectBoxes = document.querySelectorAll('.project-box');
            projectBoxes.forEach(box => {
                box.addEventListener('mouseenter', () => {
                    box.style.transform = 'translateY(-10px)';
                });
                
                box.addEventListener('mouseleave', () => {
                    box.style.transform = 'translateY(0)';
                });
            });
            
            // Add animation to skills icons
            const skillsIcons = document.querySelectorAll('.skills-icons i');
            skillsIcons.forEach((icon, index) => {
                icon.style.animationDelay = `${index * 0.1}s`;
            });
        });
