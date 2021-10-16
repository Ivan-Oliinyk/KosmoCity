const refs = {
  select: document.querySelector(".js-select"),
  imgs: document.querySelectorAll(".js-scheme-img"),
};

refs.select.addEventListener("change", () => {
  const selectValue = refs.select.value;

  if (selectValue == 1) {
    showFloor(selectValue - 1);
  } else if (selectValue == 2) {
    showFloor(2);
  } else if (selectValue == 3) {
    showFloor(4);
  } else if (selectValue == 4) {
    showFloor(6);
  }
});

function showFloor(select) {
  refs.imgs.forEach((img) => {
    img.classList.add("display-none");
  });

  refs.imgs[select].classList.remove("display-none");
}
