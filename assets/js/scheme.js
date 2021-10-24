const refs = {
  select: document.querySelector(".js-select"),
  btns: document.querySelectorAll(".scheme-btn"),
  floors: document.querySelectorAll(".js-floor"),
  links: document.querySelectorAll(".scheme-sub-list"),
};

let selectValue = 1;

refs.select.addEventListener("change", () => {
  selectValue = refs.select.value;

  if (selectValue == 1) {
    showFloor(selectValue - 1);
  } else if (selectValue == 2) {
    showFloor(1);
  } else if (selectValue == 3) {
    showFloor(2);
  } else if (selectValue == 4) {
    showFloor(3);
  }
});

refs.links.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("js-cinema")) {
      changeFloor(3);
    }

    if (link.classList.contains("js-laser-city")) {
      changeFloor(4);
    }

    if (link.classList.contains("js-roller-city")) {
      changeFloor(4);
    }

    if (link.classList.contains("js-mini-soccer")) {
      changeFloor(3);
    }

    if (link.classList.contains("js-fitness")) {
      changeFloor(3);
    }

    if (link.classList.contains("js-mida")) {
      changeFloor(2);
    }

    if (link.classList.contains("js-drinck")) {
      changeFloor(1);
    }

    if (link.classList.contains("js-cafe")) {
      changeFloor(1);
    }

    if (link.classList.contains("js-strans")) {
      changeFloor(1);
    }
  });
});

function changeFloor(valueSelect) {
  refs.select.value = valueSelect;
  showFloor(valueSelect - 1);
}

function showFloor(select) {
  refs.floors.forEach((floor) => {
    floor.classList.add("display-none");
  });

  refs.floors[select].classList.remove("display-none");
}
