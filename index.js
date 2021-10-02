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

  //backdrop in catalog
  const catalogBtn = document.querySelectorAll(".catalog__btn");
  const backdropRefs = {
    wrapper: document.querySelector(".js-catalog-backdrop"),
    theme: document.querySelectorAll(".js-catalog-backdrop__theme"),
    btnClose: document.querySelector(".js-close"),
  };

  catalogBtn.forEach((item, index) =>
    item.addEventListener("click", () => {
      backdropRefs.wrapper.classList.remove("display-none");
      hideThemeBlock();
      backdropRefs.theme[index].classList.remove("display-none");
      backdropRefs.btnClose.classList.remove("display-none");
    })
  );

  backdropRefs.btnClose.addEventListener("click", () => {
    hideThemeBlock();
    hideBtnClose();

    backdropRefs.wrapper.classList.add("display-none");
  });

  function hideThemeBlock() {
    backdropRefs.theme.forEach((block) => block.classList.add("display-none"));
  }

  function hideBtnClose() {
    backdropRefs.btnClose.classList.add("display-none");
  }
});
