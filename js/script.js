
var buttons = document.querySelectorAll('.read_button');


buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      
        var card = this.closest('.card');
        card.classList.toggle('active');

        
        if (card.classList.contains('active')) {
            this.textContent = 'ler menos';
        } else {
            this.textContent = 'ler mais';
        }
    });
});