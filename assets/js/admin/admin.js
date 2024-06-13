let iconClose = document.querySelector("#iconClose");
let arrIconClose = document.querySelectorAll("#iconClose i");
let menuContainer = document.querySelector("#menu");
let arrTextMenu = document.querySelectorAll("#menu__list li a");
let footerContainer = document.querySelector("footer");
let logoText = document.querySelector("#logo__container div span");

iconClose.addEventListener("click", () => {
  for (const text of arrTextMenu) {
    text.classList.toggle("d-none");
  }

  for (const iconClose of arrIconClose) {
    iconClose.classList.toggle("d-none");
  }

  footerContainer.classList.toggle("d-none");
  logoText.classList.toggle("d-none");
  menuContainer.classList.toggle("menu-active");
});
