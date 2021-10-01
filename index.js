window.addEventListener("DOMContentLoaded", () => {
  //Меню и кнопка меню
  const burger = document.querySelector(".js-burger");
  const dropContainer = document.querySelector(".js-drop-container");

  burger.addEventListener("click", addIsActive);

  function addIsActive() {
    burger.classList.toggle("is-active");
    dropContainer.classList.toggle("is-active");
  }

  //Появление блока в хедере
  window.addEventListener("load", () => {
    const hideBlocks = document.querySelectorAll(".js-hide-block");

    setTimeout(() => {
      hideBlocks.forEach((elem) => elem.classList.remove("hide-block"));
    }, 2000);
  });

  //Счетчик в блоке промо
  const counterLists = document.querySelectorAll(".js-counter");

  addCountOnListsElement(counterLists);

  function addCountOnListsElement(counterLists) {
    for (let i = 0; i < counterLists.length; i += 1) {
      counterLists[i].textContent = i + 1;
    }
  }
});
