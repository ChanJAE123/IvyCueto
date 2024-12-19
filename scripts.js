document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50, // Increase the number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ffcc" // Change particle color to neon green
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "image": {
                    "src": "images/earth.png", // Use an image of Earth to represent climate change
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 20,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 10,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 100,
                    "size": 20,
                    "duration": 2,
                    "opacity": 0.1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    const navLinks = document.querySelectorAll('.dropdown-content a');
    const sections = document.querySelectorAll('section');
    const headerTitle = document.querySelector('header h1');

    // Show only the About Me section by default
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.style.display = 'none';
        } else {
            section.style.display = 'flex';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'flex';
                    section.classList.add('active');
                    section.classList.remove('inactive');
                } else {
                    section.style.display = 'none';
                    section.classList.add('inactive');
                    section.classList.remove('active');
                }
            });
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');

            // Update header title based on the active section
            switch (targetId) {
                case 'about':
                    headerTitle.textContent = 'My Portfolio';
                    break;
                case 'sdg':
                    headerTitle.textContent = 'Sustainable Development Goal';
                    break;
                case 'projects':
                    headerTitle.textContent = 'My Projects';
                    break;
                case 'skills':
                    headerTitle.textContent = 'My Skills';
                    break;
                case 'contact':
                    headerTitle.textContent = 'My Contacts';
                    break;
                default:
                    headerTitle.textContent = 'My Portfolio';
            }
        });
    });
});

// Debugging: Check if particles.js is loaded
console.log('particles.js script loaded');
