// Selecion a função do elemento
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    dutarion: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    dutarion: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top',{
    origin: 'top',
    dutarion: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    dutarion: 1000,
    distance: '25rem',
    delay: 600
});