const incoming = document.querySelector("#incoming").content;
const dictionary = document.querySelector("#dictionary").content;
const contentItems = document.querySelector(".content__items");
const incomingExists= () => {return contentItems.querySelector(".incoming")};
const dictionaryExists= () => {return contentItems.querySelector(".dictionary")};



function openIncoming() {
  const incomingClone = incoming.cloneNode(true);
  if (incomingExists() == null) {
    contentItems.append(incomingClone);
    loadPoems();
  } 
  if (dictionaryExists() != null) {
    dictionaryExists().remove();
  }
}


function openDictionary() {
  const dictionaryClone = dictionary.cloneNode(true);
  if (dictionaryExists() == null) {
    contentItems.append(dictionaryClone);
    loadPoems();
  } 
  if (incomingExists() != null) {
    incomingExists().remove();
  }
}

openIncoming();
//y.ChildNode.replaceWith(x);

/*function addLetter() {
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
addLetersInGrid();*/
