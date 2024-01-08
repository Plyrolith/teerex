const button = document.querySelector('#nav-button');
const menu = document.querySelector('#nav-menu');

button.addEventListener('click', () => {
    button.classList.toggle('activated');
    menu.classList.toggle('activated');
});