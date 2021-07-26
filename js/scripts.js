const openMenu = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.sidebar-close');
const contactButton = document.querySelector('.button-contact');

openMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "20em";
});

closeMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "0em";
});

document.addEventListener('click', (e) => {
    if (e.target.className === 'sidebar-option') {
        document.querySelector(".side-bar").style.width = "0em";
    }
});

contactButton.addEventListener('click', () => {
    window.open('mailto:akhilgoyal.work@gmail.com');
});