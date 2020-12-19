const letterTemplate = document.querySelector(".letter").content;
const letterGrid = document.querySelector(".grid__letters");


function addLetter() {
  const letterElement = letterTemplate.cloneNode(true);
  const letterSub = letterElement.querySelector(".letter__subject");
  letterSub.textContent = "Тема письма";
  letterElement.querySelector(".letter__author").textContent = "От кого письмо";
  letterGrid.append(letterElement); 
}

function addLetersInGrid() {
  let i = 0;
  while (i < 6) {
    addLetter();
    i++;
  }
}
addLetersInGrid();


