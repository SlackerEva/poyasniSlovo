const incoming = document.querySelector("#incoming").content;
const dictionary = document.querySelector("#dictionary").content;
const message = document.querySelector("#message").content;
const contentItems = document.querySelector(".content__items");
const popup = document.querySelector(".popup");
let popupTitle = document.querySelector(".popup__title");
const closeButton = document.querySelector(".popup__close");
const incomingExists= () => {return contentItems.querySelector(".incoming")};
const dictionaryExists= () => {return contentItems.querySelector(".dictionary")};
const messageExists= () => {return contentItems.querySelector(".message")};


function openIncoming() {
  const incomingClone = incoming.cloneNode(true);
  if (incomingExists() == null) {
    contentItems.append(incomingClone);
    loadPoems();
  } 
  if (dictionaryExists() != null) {
    dictionaryExists().remove();
  }
  if (messageExists() != null) {
    messageExists().remove();
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
  if (messageExists() != null) {
    messageExists().remove();
  }
}

function openMessage(sender, text, id) {
  const messageClone = message.cloneNode(true);
  if (messageExists() == null) {
    messageClone.querySelector(".message__title").textContent = `Обращение № ${id}`;
    messageClone.querySelector(".message__author").textContent = sender.name + " " + sender.surname;
   // messageClone.querySelector(".message__email").textContent = email;
    messageClone.querySelector(".message__text").textContent = text;
    contentItems.append(messageClone);  
  } 
  if (incomingExists() != null) {
    incomingExists().remove();
  }
  if (dictionaryExists() != null) {
    dictionaryExists().remove();
  }
}

function openPopup(evt) {
  popup.classList.add("popup_opened");
  renderWordCard(evt);
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function renderWordCard(evt) {
  const changeTitle = evt.target.textContent;
  popupTitle.textContent = changeTitle;
}

closeButton.addEventListener("click", function() {closePopup()});
openIncoming();
