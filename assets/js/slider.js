const refs = {
  wrapper: document.querySelector(".js-slider-wrapper"),
  sliderItems: document.querySelectorAll(".js-slider-item"),
  close: document.querySelectorAll(".js-slider-item .btn-close"),
  btnNext: document.querySelectorAll(".js-slider-item .js-next"),
  btnPrev: document.querySelectorAll(".js-slider-item .js-prev"),
  currenCounter: document.querySelectorAll(
    ".js-slider-item .js-counter-current"
  ),
  totalCounter: document.querySelectorAll(".js-slider-item .js-counter-total"),
  btns: document.querySelectorAll(".js-go-on-slider"),
};

refs.btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    refs.wrapper.classList.remove("display-none");
    refs.sliderItems[i].classList.remove("display-none");
    document.body.style.overflow = "hidden";
  });
});

refs.close.forEach((btn) => btn.addEventListener("click", closeAllSlides));

refs.btnNext.forEach((btn, i, arr) => {
  btn.addEventListener("click", () => {
    if (i < arr.length - 1) {
      refs.sliderItems[i].classList.add("display-none");
      refs.sliderItems[i + 1].classList.remove("display-none");
    } else {
      refs.sliderItems[arr.length - 1].classList.remove("display-none");
    }
  });
});

refs.btnPrev.forEach((btn, i, arr) => {
  btn.addEventListener("click", () => {
    if (i > 0) {
      refs.sliderItems[i].classList.add("display-none");
      refs.sliderItems[i - 1].classList.remove("display-none");
    } else {
      refs.sliderItems[i].classList.remove("display-none");
    }
  });
});

showTotalCounter();
showCurrentCounter();

function showTotalCounter() {
  refs.totalCounter.forEach((item, i, arr) => {
    item.textContent = `${arr.length}`;
  });
}

function showCurrentCounter() {
  refs.currenCounter.forEach((item, i) => {
    item.textContent = `${i + 1}`;
  });
}

function closeAllSlides() {
  refs.wrapper.classList.add("display-none");
  refs.sliderItems.forEach((item) => item.classList.add("display-none"));
  document.body.style.overflow = "";
}
