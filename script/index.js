const incoming = document.querySelector("#incoming").content;
const dictionary = document.querySelector("#dictionary").content;
const contentItems = document.querySelector(".content__items");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
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
    addWords();
  } 
  if (incomingExists() != null) {
    incomingExists().remove();
  }
}

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}


closeButton.addEventListener("click", function() {closePopup()});
openIncoming();
