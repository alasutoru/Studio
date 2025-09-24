document.addEventListener("DOMContentLoaded", function() {
    // --- Function to load HTML components ---
    const loadComponent = (selector, url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`File not found: ${url}`);
                return response.text();
            })
            .then(data => {
                const element = document.querySelector(selector);
                if (element) element.outerHTML = data;
            });
    };

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
        const header = document.querySelector('header.sticky');
        if (header) {
            if (window.scrollY > 10) { // Add shadow after scrolling down 10px
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        }
    };

    // --- Combined function to run after header is loaded ---
    const initializeHeaderAndTheme = () => {
        setActiveNavLink();
        updateHeaderLinks();
        handleHeaderShadow(); // Initial check in case the page is reloaded mid-scroll
        window.addEventListener('scroll', handleHeaderShadow);
    };

    // Load components and then initialize scripts
    Promise.all([
        loadComponent("header#header-placeholder", "_header.html"),
        loadComponent("footer#footer-placeholder", "_footer.html")
    ]).then(() => {
        initializeHeaderAndTheme();
    }).catch(error => console.error("Error loading components:", error));
});