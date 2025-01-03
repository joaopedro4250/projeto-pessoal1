
window.addEventListener('load', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });
});