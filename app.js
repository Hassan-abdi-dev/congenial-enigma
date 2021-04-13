const menu = document.querySelector('#mobile-menu')
const mediaLinks = document.querySelector('.navbar-menu')

const mobileMenu = ()=> {
    menu.classList.toggle('is-active')
    menu.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);