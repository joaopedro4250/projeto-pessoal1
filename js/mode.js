let arrastar = document.getElementById('arrastar');
let body = document.body;
let readButtons = document.querySelectorAll('.read_button');
let cards = document.querySelectorAll('.card');

arrastar.addEventListener('click', () => {
    arrastar.classList.toggle('dark');
    body.classList.toggle('dark');

    
    readButtons.forEach(button => {
        button.classList.toggle('dark');
    });

    
    cards.forEach(card => {
        card.classList.toggle('dark');
    });
});

