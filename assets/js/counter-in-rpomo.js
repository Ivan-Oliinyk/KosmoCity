//Счетчик в блоке промо
const counterLists = document.querySelectorAll(".js-counter");

addCountOnListsElement(counterLists);

function addCountOnListsElement(counterLists) {
  for (let i = 0; i < counterLists.length; i += 1) {
    counterLists[i].textContent = i + 1;
  }
}
