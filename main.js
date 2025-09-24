document.addEventListener("DOMContentLoaded", function() {

    // --- Function to set the active navigation link ---
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('#')[0];
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('text-primary', 'dark:text-accent');
                link.classList.remove('text-gray-600', 'dark:text-gray-400');
            }
        });
    };

    // --- Function to adjust header links for the index page ---
    const updateHeaderLinks = () => {
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'index.html' || currentPage === '') {
            document.querySelector('a.nav-link[href="index.html#services"]').setAttribute('href', '#services');
        }
    };

    // --- Function to handle header shadow on scroll ---
    const handleHeaderShadow = () => {
        // Now we can select the header directly
        const header = document.querySelector('header'); // Simplified selector
        if (header) {
            if (window.scrollY > 10) { // Add shadow after scrolling down 10px
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        }
    };
    
    // Initialize all functions
    setActiveNavLink();
    updateHeaderLinks();
    handleHeaderShadow(); // Initial check
    window.addEventListener('scroll', handleHeaderShadow);
});

document.addEventListener("DOMContentLoaded", function() {
    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');

    const handleBackToTopVisibility = () => {
        if (backToTopButton) {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        }
    };

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (backToTopButton) {
        window.addEventListener('scroll', handleBackToTopVisibility);
        backToTopButton.addEventListener('click', scrollToTop);
    }
});