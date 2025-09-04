// Portfolio Website JavaScript

// Data for projects, skills, education, experience, and certificates
const portfolioData = {
    webProjects: [
        {
            id: 1,
            name: "Fec",
            description: "Customized professional engineering consultancy website showcasing services, projects, and team information with a modern, responsive design and intuitive navigation.",
            image: "Images/fec.png",
            technologies: ["Php", "Html", "Css", "JavaScript"],
            liveUrl: "https://www.fecqatar.com/",
        },
        {
            id: 2,
            name: "Amilcar",
            description: "Responsive, user-friendly website for Amilcar Energy & Services, a leading provider of fire protection systems and solar energy solutions in Qatar.",
            image: "Images/amilcar.png",
            technologies: ["Wordpress", "Elementor", "Bluehost"],
            liveUrl: "https://amilcarenergy.com/",
          
        },
        {
            id: 3,
            name: "HybrLab",
            description: "Dynamic technology solutions website presenting digital transformation services, with a modern, responsive design and seamless user experience.",
            image: "Images/hybrlab.png",
            technologies: ["Php", "Html", "Css", "JavaScript"],
            liveUrl: "https://www.hybrlab.com/",
        
        },
        {
            id: 4,
            name: "My White Field",
            description: "E-commerce website dedicated to premium men’s white undergarments, featuring a seamless shopping experience.",
            image: "Images/whitefield.png",
            technologies: ["Wordpress", "Bakery Builder", "Bluehost"],
            liveUrl: "https://mywhitefield.com/",
        
        },
        {
            id: 5,
            name: "It World",
            description: "Custom e-commerce website for IT and networking products, featuring a responsive design and seamless shopping experience.",
            image: "Images/itworld.png",
            technologies: ["Shopify", "Html", "JavaScript"],
            liveUrl: "https://itworld.ae/",
        
        },
        {
            id: 6,
            name: "It Hub",
            description: "A E-commerce website developed for a Dubai-based IT store, with a smooth shopping experience.",
            image: "Images/ithub.png",
            technologies: ["Wordpress", "Elementor","WooCommerce"],
            liveUrl: "https://ithub.ae/",
        
        }
    ],

    mobileProjects: [
        {
            id: 7,
            name: "Tattoo loree",
            description: "Cross-platform mobile app for tattoo shop, with multiple pages, luxurious layout and smooth navigation",
            image: "Images/tattoo.png",
            technologies: ["Flutter", "Firebase"],
            appStoreUrl: "#",
            githubUrl: "#"
        },
        {
            id: 5,
            name: "Attandance Monitoring System",
            description: "Mobile app for attendance monitoring using facial recognition technology, enabling secure and efficient attendance tracking for organizations.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
            technologies: ["Java", "Python", "MySQL"],
            
        },
        
    ],

    education: [
        {
            id: 1,
            degree: "PG Diploma",
            school: "Sheridan College, Brampton, ON",
            period: "2025 - 2025",
            details: "IOT and Machine Intelligence - Specialized in concepts that are pillars of the Industry 4.0 revolution, including artificial intelligence, sensors, robotics, cybersecurity and cloud computing."
        },
        {
            id: 2,
            degree: "PG Diploma",
            school: "Canadore College, Mississauga, ON",
            period: "2024-2025",
            details: "Mobile Application Development - Gained expertise in mobile app development for iOS and Android platforms using Java, Flutter, and Swift."
        },
        {
            id: 3,
            degree: "Bachelors in computer science and engineering",
            school: "KTU University, India",
            period: "2018-2022",
            details: "Graduated with First Class Honors, specializing in software development, algorithms, and data structures. Completed a capstone project on developing a full-stack web application on topic Smart attendance monitoring system."
        }
        
    ],

    experience: [
        {
            id: 1,
            title: "Application Developer",
            company: "Freelance",
            period: "2024 - 2025",
            description: "DEveloped cross-platform mobile applications using Flutter, integrating RESTful APIs and third-party services. Delivered multiple projects with a focus on performance, usability, and client satisfaction."
        },
        {
            id: 2,
            title: "Full Stack Web Developer",
            company: "Zayn Technology",
            period: "2023 - 2024",
            description: "Worked as a web developer, creating and maintaining customized and CMS websites for various clients. Improved website performance through code optimization and implementing best practices. Collaborated with designers and content creators to deliver high-quality web solutions."
        },
        
    ],

    frontendSkills: [
        { name: "Html", level: "Advanced", percentage: 50 },
        { name: "Flutter (Dart)", level: "Advanced", percentage: 90 },
        { name: "JavaScript", level: "Intermediate", percentage: 75 },
        { name: "CSS", level: "Expert", percentage: 98 },
        { name: "Wordpress ", level: "Advanced", percentage: 98 },
        { name: "Shopify", level: "Intermediate", percentage: 70 }

    ],

    backendSkills: [
        { name: "Python", level: "Advanced", percentage: 90 },
        { name: "C", level: "Advanced", percentage: 88 },
        { name: "Java", level: "Intermediate", percentage: 80 },
        { name: "PHP", level: "Intermediate", percentage: 70 },
        { name: "Firebase", level: "Advanced", percentage: 90 },
        { name: "MySQL", level: "Advanced", percentage: 92 }
        
    ],

    toolsSkills: [
        { name: "Git & GitHub", level: "Expert", percentage: 95 },
        { name: "Vs Code", level: "Advanced", percentage: 80 },
        { name: "Android Studio", level: "Advanced", percentage: 95 },
        { name: "Figma", level: "Advanced", percentage: 82 },
        { name: "Canva", level: "Advanced", percentage: 85 },
        { name: "Xcode", level: "Intermediate", percentage: 70 },
        { name: "phpMyAdmin", level: "Advanced", percentage: 90 }
    ],

    technologies: [
    { icon: "devicon-php-plain colored", name: "PHP" },
    { icon: "devicon-java-plain colored", name: "Java" },
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-flutter-plain colored", name: "Flutter" },
    { icon: "devicon-figma-plain colored", name: "Figma" },
    { icon: "devicon-git-plain colored", name: "Git" }
    ],

    // certificates: [
    //     {
    //         id: 1,
    //         title: "AWS Certified Developer - Associate",
    //         organization: "Amazon Web Services (AWS)",
    //         issueDate: "Issued: March 2023 • Valid until: March 2026",
    //         description: "Demonstrates expertise in developing and maintaining applications on the AWS platform, including deployment, debugging, and optimization.",
    //         icon: "fab fa-aws",
    //         iconColor: "color: #FF9900",
    //         borderColor: "border-left-color: #3b82f6",
    //         verifyUrl: "#"
    //     },
    //     {
    //         id: 2,
    //         title: "Google Professional Cloud Developer",
    //         organization: "Google Cloud",
    //         issueDate: "Issued: January 2023 • Valid until: January 2025",
    //         description: "Validates ability to design, build, and deploy scalable applications using Google Cloud technologies and best practices.",
    //         icon: "fab fa-google",
    //         iconColor: "color: #4285F4",
    //         borderColor: "border-left-color: #10b981",
    //         verifyUrl: "#"
    //     },
    //     {
    //         id: 3,
    //         title: "MongoDB Certified Developer",
    //         organization: "MongoDB University",
    //         issueDate: "Issued: November 2022 • Valid until: November 2024",
    //         description: "Demonstrates proficiency in MongoDB development including data modeling, querying, indexing, and application development.",
    //         icon: "fas fa-leaf",
    //         iconColor: "color: #47A248",
    //         borderColor: "border-left-color: #8b5cf6",
    //         verifyUrl: "#"
    //     },
    //     {
    //         id: 4,
    //         title: "Meta Front-End Developer Professional",
    //         organization: "Meta (Facebook)",
    //         issueDate: "Issued: September 2022 • No expiration",
    //         description: "Comprehensive program covering React, JavaScript, HTML/CSS, and modern front-end development practices and tools.",
    //         icon: "fab fa-facebook",
    //         iconColor: "color: #1877F2",
    //         borderColor: "border-left-color: #ef4444",
    //         verifyUrl: "#"
    //     }
    // ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupEventListeners();
    setupScrollAnimations();
    setupTypingAnimation();
});

// Initialize portfolio content
function initializePortfolio() {
    renderProjects();
    renderEducation();
    renderExperience();
    renderSkills();
    renderCertificates();
    renderTechIcons();
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1));
            
            // Close mobile menu if open
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation link
        updateActiveNavLink();
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = ['hero', 'about', 'projects', 'resume', 'skills', 'certificates', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Render projects
function renderProjects() {
    renderProjectCategory(portfolioData.webProjects, 'webProjects');
    renderProjectCategory(portfolioData.mobileProjects, 'mobileProjects');
}

function renderProjectCategory(projects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-content">
                <h4 class="project-title">${project.name}</h4>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-buttons">
                    <a href="${project.liveUrl || project.appStoreUrl || project.playStoreUrl || project.demoUrl || '#'}" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i>
                        ${getProjectButtonText(project)}
                    </a>
                    <a href="${project.githubUrl}" class="btn btn-secondary">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function getProjectButtonText(project) {
    if (project.liveUrl) return 'Live Demo';
    if (project.appStoreUrl) return 'App Store';
    if (project.playStoreUrl) return 'Play Store';
    if (project.demoUrl) return 'Demo';
    return 'View Project';
}

// Render education
function renderEducation() {
    const container = document.getElementById('educationList');
    if (!container) return;

    container.innerHTML = portfolioData.education.map(item => `
        <div class="resume-item">
            <h4>${item.degree}</h4>
            <p class="school">${item.school}</p>
            <p class="period">${item.period}</p>
            <p class="description">${item.details}</p>
        </div>
    `).join('');
}

// Render experience
function renderExperience() {
    const container = document.getElementById('experienceList');
    if (!container) return;

    container.innerHTML = portfolioData.experience.map(item => `
        <div class="resume-item">
            <h4>${item.title}</h4>
            <p class="company">${item.company}</p>
            <p class="period">${item.period}</p>
            <p class="description">${item.description}</p>
        </div>
    `).join('');
}

// Render skills
function renderSkills() {
    renderSkillCategory(portfolioData.frontendSkills, 'frontendSkills');
    renderSkillCategory(portfolioData.backendSkills, 'backendSkills');
    renderSkillCategory(portfolioData.toolsSkills, 'toolsSkills');
}

function renderSkillCategory(skills, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level} </span>
            </div>
            <div class="skill-bar">
                <!-- Start with width 0 for animation -->
                <div class="skill-progress" style="width: 0%;" data-percentage="${skill.percentage}"></div>
            </div>
        </div>
    `).join('');

    // Animate progress after DOM update
    const progresses = container.querySelectorAll('.skill-progress');
    progresses.forEach(progress => {
        const percentage = progress.dataset.percentage;
        // Small delay so transition triggers
        setTimeout(() => {
            progress.style.width = percentage + '%';
        }, 100);
    });
}
// Render tech icons
function renderTechIcons() {
    const container = document.getElementById('techIcons');
    if (!container) return;

    container.innerHTML = portfolioData.technologies.map(tech => `
        <div class="tech-icon" title="${tech.name}">
            <i class="${tech.icon}" style="${tech.color}"></i>
        </div>
    `).join('');
}

// Render certificates
function renderCertificates() {
    const container = document.getElementById('certificatesList');
    if (!container) return;

    container.innerHTML = portfolioData.certificates.map(cert => `
        <div class="certificate-card" style="${cert.borderColor}">
            <div class="certificate-header">
                <div class="certificate-info">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-org">${cert.organization}</p>
                    <p class="certificate-date">${cert.issueDate}</p>
                    <p class="certificate-description">${cert.description}</p>
                    <a href="${cert.verifyUrl}" class="certificate-verify">
                        <i class="fas fa-external-link-alt"></i>
                        Verify Certificate
                    </a>
                </div>
                <div class="certificate-icon">
                    <i class="${cert.icon}" style="${cert.iconColor}"></i>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup scroll animations
function setupScrollAnimations() {
    // Animate skill bars when they come into view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate skill bars
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const percentage = bar.getAttribute('data-percentage');
                    setTimeout(() => {
                        bar.style.width = percentage + '%';
                    }, 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Download resume function
function downloadResume() {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = 'Images/Fathima Niloofar Kappil-Resume.pdf'; // In real implementation, this would be a real PDF
    link.download = 'Fathima Niloofar Kappil-Resume.pdf';
    link.click();
    
    // Show a message to the user
    alert('Resume download started!');
}

// Utility function to create smooth scroll behavior
function smoothScroll(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Typing animation setup
function setupTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const words = JSON.parse(typingElement.getAttribute('data-words') || '["Developer"]');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typing animation after a delay
    setTimeout(typeEffect, 1000);
}

// Add CSS for enhanced buttons and animations
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Enhanced responsive navigation */
    @media (max-width: 768px) {
        .nav-cta {
            display: none;
        }
        
        .logo-title {
            display: none;
        }
        
        .hero-title {
            font-size: 2.5rem;
        }
        
        .hero-greeting {
            font-size: 1.25rem;
        }
        
        .hero-stats {
            gap: 2rem;
        }
        
        .stat-number {
            font-size: 2rem;
        }
        
        .hero-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .floating-elements {
            display: none;
        }
    }
    
    @media (max-width: 480px) {
        .hero-title {
            font-size: 2rem;
        }
        
        .hero-description {
            font-size: 1rem;
        }
        
        .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
        }
    }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    mobileMenuBtn.classList.toggle("open");
    mobileNav.classList.toggle("active"); 
  });
});


