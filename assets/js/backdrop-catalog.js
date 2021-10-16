//backdrop in catalog
const catalogBtn = document.querySelectorAll(".catalog__btn");
const backdropRefs = {
  wrapper: document.querySelector(".js-catalog-backdrop"),
  theme: document.querySelectorAll(".js-catalog-backdrop__theme"),
  btnClose: document.querySelector(".js-close"),
  btnBrands: document.querySelectorAll(".catalog-backdrop-link"),
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

// console.log(backdropRefs.btnBrands);

function hideThemeBlock() {
  backdropRefs.theme.forEach((block) => block.classList.add("display-none"));
}

function hideBtnClose() {
  backdropRefs.btnClose.classList.add("display-none");
}
