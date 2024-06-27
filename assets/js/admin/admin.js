document.querySelector("#iconClose1").onclick = function () {
  document.querySelector("#menu").classList.toggle("menu-active");
  document
    .querySelector("#iconClose1 i:first-child")
    .classList.toggle("d-none");
  document.querySelector("#iconClose1 i:last-child").classList.toggle("d-none");
};

document.querySelector("#iconClose2").onclick = function () {
  document.querySelector("#menu").classList.toggle("d-flex");
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

document.querySelector("#btnButtonMenu").onclick = function () {
  document.querySelector("#menu").classList.toggle("d-flex");
};
