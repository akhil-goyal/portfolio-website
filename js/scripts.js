const openMenu = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.sidebar-close');

openMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "20em";
});

closeMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "0em";
});