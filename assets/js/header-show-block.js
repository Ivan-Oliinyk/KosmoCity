//Появление блока в хедере
window.addEventListener("load", () => {
  const hideBlocks = document.querySelectorAll(".js-hide-block");

  setTimeout(() => {
    hideBlocks.forEach((elem) => elem.classList.remove("hide-block"));
  }, 1000);
});
