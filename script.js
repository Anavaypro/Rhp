document.addEventListener('DOMContentLoaded', function() {
    // Preloader Animation
    const preloader = document.querySelector('.preloader');
    const preloaderWords = document.querySelectorAll('.preloader-text-words');
    
    // Animate each letter of the preloader
    preloaderWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Hide preloader after animation completes
    setTimeout(() => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                preloader.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Initialize animations after preloader
                initAnimations();
            }
        });
    }, preloaderWords.length * 150 + 500);
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .hover-effect, .info-card, .skill-category, .timeline-content');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for all links
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
            }
        });
    });
    
    // Initialize animations after preloader
    function initAnimations() {
        // GSAP animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animations
        gsap.from('.title-word-1', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        });
        
        gsap.from('.title-word-2', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.4
        });
        
        gsap.from('.hero-subtitle', {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8
        });
        
        gsap.from('.cta-button', {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1
        });
        
        gsap.from('.image-wrapper', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5,
            rotationY: -30,
            rotationX: -10
        });
        
        // About section animations
        gsap.from('.about-intro', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.about-details p', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2
        });
        
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2
        });
        
        // Experience section animations
        gsap.from('.timeline-item', {
            scrollTrigger: {
                trigger: '.experience',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.3
        });
        
        // Animate timeline progress bar
        ScrollTrigger.create({
            trigger: ".timeline",
            start: "top center",
            end: "bottom center",
            onUpdate: (self) => {
                const progress = self.progress;
                document.querySelector('.timeline-progress::after').style.height = `${progress * 100}%`;
            }
        });
        
        // Skills section animations
        gsap.from('.skill-category', {
            scrollTrigger: {
                trigger: '.skills',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.3
        });
        
        // Animate skill bars
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.getAttribute('data-width');
            ScrollTrigger.create({
                trigger: bar,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(bar, {
                        width: `${width}%`,
                        duration: 1.5,
                        ease: 'power3.out'
                    });
                }
            });
        });
        
        // Animate stats counting
        document.querySelectorAll('.stat-number').forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const increment = target / 50;
            let current = 0;
            
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 80%',
                onEnter: () => {
                    const timer = setInterval(() => {
                        current += increment;
                        if (current > target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 20);
                }
            });
        });
        
        // Contact section animations
        gsap.from('.info-card', {
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2
        });
        
        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3
        });
        
        // Initialize 3D skill sphere
        initSkillSphere();
    }
    
    // 3D Skill Sphere
    function initSkillSphere() {
        const container = document.querySelector('.skill-sphere');
        if (!container) return;
        
        const skills = [
            {name: "Strategic Planning", level: 95},
            {name: "Business Development", level: 90},
            {name: "Market Analysis", level: 88},
            {name: "Client Relations", level: 97},
            {name: "Team Leadership", level: 92},
            {name: "Product Education", level: 89},
            {name: "Networking", level: 94},
            {name: "Sales Strategy", level: 91},
            {name: "Communication", level: 96},
            {name: "Problem Solving", level: 93}
        ];
        
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        
        // Create sphere
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        
        // Add skill points
        const points = [];
        const pointGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        skills.forEach((skill, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;
            
            const x = 5 * Math.cos(theta) * Math.sin(phi);
            const y = 5 * Math.sin(theta) * Math.sin(phi);
            const z = 5 * Math.cos(phi);
            
            const point = new THREE.Mesh(pointGeometry, pointMaterial);
            point.position.set(x, y, z);
            scene.add(point);
            
            // Add label
            const label = document.createElement('div');
            label.className = 'skill-label';
            label.textContent = skill.name;
            label.style.color = `rgba(99, 102, 241, ${0.5 + skill.level / 100})`;
            label.style.fontSize = `${0.8 + skill.level / 100}rem`;
            container.appendChild(label);
            
            points.push({
                mesh: point,
                label: label,
                position: {x, y, z}
            });
        });
        
        // Position camera
        camera.position.z = 10;
        
        // Animation
        function animate() {
            requestAnimationFrame(animate);
            
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;
            
            // Update labels
            points.forEach(point => {
                const vector = new THREE.Vector3(
                    point.position.x,
                    point.position.y,
                    point.position.z
                );
                vector.project(camera);
                
                const x = (vector.x * 0.5 + 0.5) * width;
                const y = (-(vector.y * 0.5) + 0.5) * height;
                
                point.label.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
            });
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Handle resize
        window.addEventListener('resize', () => {
            const newWidth = container.offsetWidth;
            const newHeight = container.offsetHeight;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.form-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                
                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.className = 'form-success';
                    successMsg.textContent = 'Your message has been sent successfully!';
                    this.appendChild(successMsg);
                    
                    setTimeout(() => {
                        successMsg.remove();
                    }, 3000);
                }, 1500);
            }, 1500);
        });
    }
    
    // Vanilla tilt effect for cards
    if (typeof VanillaTilt !== 'undefined') {
        const tiltElements = document.querySelectorAll('.info-card, .stat-card, .skill-category, .timeline-content');
        tiltElements.forEach(el => {
            VanillaTilt.init(el, {
                max: 5,
                speed: 300,
                glare: true,
                'max-glare': 0.1,
                scale: 1.02
            });
        });
    }
});