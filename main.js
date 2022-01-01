const mainMenu = document.querySelector(".navbar");
const openMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close() {
    mainMenu.style.top = "-100%";
}
