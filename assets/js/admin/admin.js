document.querySelector("#iconClose").onclick = function () {
  let arrIconClose = document.querySelectorAll("#iconClose i");
  let menuContainer = document.querySelector("#menu");
  let arrTextMenu = document.querySelectorAll("#menu__list li a");
  let footerContainer = document.querySelector("footer");
  let logoText = document.querySelector("#logo__container div span");

  for (const text of arrTextMenu) {
    text.classList.toggle("d-none");
  }

  for (const iconClose of arrIconClose) {
    iconClose.classList.toggle("d-none");
  }

  footerContainer.classList.toggle("d-none");
  logoText.classList.toggle("d-none");
  menuContainer.classList.toggle("menu-active");
};

document.querySelector("#iconThongBao").onclick = function () {
  document.querySelector("#showThongBao").classList.toggle("d-none");
};

document.querySelector("#dongThongBao").onclick = function () {
  document.querySelector("#showThongBao").classList.toggle("d-none");
};

document.querySelector("#btnMode").onclick = function () {
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector("#btnMode i:first-child").classList.toggle("d-none");
  document.querySelector("#btnMode i:last-child").classList.toggle("d-none");
};
