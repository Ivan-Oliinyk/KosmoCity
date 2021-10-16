//Меню и кнопка меню
const burger = document.querySelector(".js-burger");
const dropContainer = document.querySelector(".js-drop-container");

burger.addEventListener("click", addIsActive);

function addIsActive() {
  burger.classList.toggle("is-active");
  dropContainer.classList.toggle("is-active");
}
