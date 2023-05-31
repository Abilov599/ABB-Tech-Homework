let burgerBtnOpen = document.querySelector(".btn-open")
let  burgerBtnClose = document.querySelector(".btn-close")
  nav = document.querySelector(".mobile-nav");

burgerBtnOpen.addEventListener("click", function () {
  burgerBtnClose.style.display = "block";
  burgerBtnOpen.style.display = "none";
  nav.style.display = "flex";
});

burgerBtnClose.addEventListener("click", function () {
  burgerBtnOpen.style.display = "block";
  burgerBtnClose.style.display = "none";
  nav.style.display = "none";
});
