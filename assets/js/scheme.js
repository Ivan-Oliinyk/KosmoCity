const refs = {
  select: document.querySelector(".js-select"),
  btns: document.querySelectorAll(".scheme-btn"),
  floors: document.querySelectorAll(".js-floor"),
  links: document.querySelectorAll(".scheme-sub-list"),

  //scheme
  btnRollerCity: document.querySelector(".js-roller-city"),
  btnFocus: document.querySelectorAll(".js-focus-scheme"),
  btnRollerFocus: document.querySelector(".js-roller-focus"),
  schemeComps: document.querySelectorAll(".comp"),

  btnLaserCity: document.querySelector(".js-laser-city"),
  btnLaserfocus: document.querySelector(".js-laser-focus"),

  btnCinema: document.querySelector(".js-cinema"),
  btnCinemaFocus: document.querySelector(".js-cinema-focus"),

  btnFitnes: document.querySelector(".js-fitness"),
  btnFitnesFocus: document.querySelector(".js-maksimus-focus"),

  btnSoccer: document.querySelector(".js-mini-soccer"),
  btnSoccerFocus: document.querySelector(".js-soccer-focus"),

  btnMida: document.querySelector(".js-mida"),
  btnMidaFocus: document.querySelector(".js-mida-focus"),

  btnDrinck: document.querySelector(".js-drinck"),
  btnDrinckFocus: document.querySelector(".js-drinck-focus"),

  btnCafe: document.querySelector(".js-cafe"),
  btnCafeFocus: document.querySelector(".js-cafe-focus"),

  btnStrans: document.querySelector(".js-strans"),
  btnStransFocus: document.querySelector(".js-strans-focus"),
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

refs.btnLaserCity.addEventListener("click", () => {
  refs.btnLaserfocus.classList.add("is-active-floor");
});

refs.btnRollerCity.addEventListener("click", () => {
  refs.btnRollerFocus.classList.add("is-active-floor");
});

refs.btnCinema.addEventListener("click", () => {
  refs.btnCinemaFocus.classList.add("is-active-floor");
});

refs.btnFitnes.addEventListener("click", () => {
  refs.btnFitnesFocus.classList.add("is-active-floor");
});

refs.btnSoccer.addEventListener("click", () => {
  refs.btnSoccerFocus.classList.add("is-active-floor");
});

refs.btnMida.addEventListener("click", () => {
  refs.btnMidaFocus.classList.add("is-active-floor");
});

refs.btnDrinck.addEventListener("click", () => {
  refs.btnDrinckFocus.classList.add("is-active-floor");
});

refs.btnCafe.addEventListener("click", () => {
  refs.btnCafeFocus.classList.add("is-active-floor");
});

refs.btnStrans.addEventListener("click", () => {
  refs.btnStransFocus.classList.add("is-active-floor");
});


refs.btnFocus.forEach((el) => {
  el.addEventListener("click", () => {
    refs.btnRollerFocus.classList.remove("is-active-floor");
    refs.btnLaserfocus.classList.remove("is-active-floor");
    refs.btnCinemaFocus.classList.remove("is-active-floor");
    refs.btnFitnesFocus.classList.remove("is-active-floor");
    refs.btnSoccerFocus.classList.remove("is-active-floor");
    refs.btnMidaFocus.classList.remove("is-active-floor");
    refs.btnDrinckFocus.classList.remove("is-active-floor");
    refs.btnCafeFocus.classList.remove("is-active-floor");
    refs.btnStransFocus.classList.remove("is-active-floor");
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
