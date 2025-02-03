// Theme backgrounds
const backgrounds = {
    light: 'https://i.postimg.cc/J4TF769b/fondo2.gif',
    dark: 'https://i.postimg.cc/V6jTYY86/fondo1.gif'
};

// Theme state
let currentTheme = 'dark';

// Theme toggle function
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update background
    document.body.style.backgroundImage = `url('${backgrounds[currentTheme]}')`;
    
    // Toggle icon visibility
    document.getElementById('dark-mode-toggle').style.display = currentTheme === 'dark' ? 'none' : 'block';
    document.getElementById('light-mode-toggle').style.display = currentTheme === 'light' ? 'none' : 'block';
    
    // Toggle theme class
    document.body.classList.toggle('light-theme', currentTheme === 'light');
}

// Custom scrollbar functionality
function initCustomScrollbar() {
    const content = document.querySelector('.window-content');
    const scrollThumb = document.querySelector('.scroll-thumb');
    let isDragging = false;
    let startPosition = 0;
    let scrollStartPosition = 0;

    scrollThumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPosition = e.clientY;
        scrollStartPosition = content.scrollTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const delta = e.clientY - startPosition;
        const scrollableHeight = content.scrollHeight - content.clientHeight;
        const scrollbarHeight = document.querySelector('.custom-scrollbar').clientHeight;

        const scrollAmount = (delta / scrollbarHeight) * scrollableHeight;
        content.scrollTop = scrollStartPosition + scrollAmount;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Update thumb position on scroll
    content.addEventListener('scroll', () => {
        const scrollableHeight = content.scrollHeight - content.clientHeight;
        const scrollbarHeight = document.querySelector('.custom-scrollbar').clientHeight;
        const thumbHeight = scrollbarHeight * (content.clientHeight / content.scrollHeight);

        const scrollPosition = (content.scrollTop / scrollableHeight) * (scrollbarHeight - thumbHeight);
        scrollThumb.style.transform = `translateY(${scrollPosition}px)`;
    });
}

// Contact form submission handler
function initContactForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Mensaje enviado con éxito! Gracias por contactarme.');
        form.reset();
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    document.body.style.backgroundImage = `url('${backgrounds[currentTheme]}')`;

    // Event listeners for theme toggles
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleTheme);
    document.getElementById('light-mode-toggle').addEventListener('click', toggleTheme);

    // Initialize custom components
    initCustomScrollbar();
    initContactForm();
});
