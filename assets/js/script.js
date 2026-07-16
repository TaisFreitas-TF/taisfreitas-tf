const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('nav ul');
const menuIcon = document.querySelector('.menu-mobile i');
const menuLinks = document.querySelectorAll('nav ul li a');

menuMobile.addEventListener('click', () => {

    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }

});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    });
});