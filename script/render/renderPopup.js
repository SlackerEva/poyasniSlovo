import {addWord} from '../index.js'

export function renderPopup(objHtmlElements) {
  const popupTemplate = document.querySelector(objHtmlElements.templaitPopup).content;
  const popupElement = popupTemplate.cloneNode(true);
  
  const popup = popupElement.firstElementChild;
  const popupClose = popupElement.querySelector(objHtmlElements.popupClose);
  const popupTitle = popupElement.querySelector(objHtmlElements.popupTitle);
  const popupMeaning = popupElement.querySelector(objHtmlElements.popupMeaning);
  const popupAdd = popupElement.querySelector(objHtmlElements.popupAdd);
  
  popupClose.addEventListener('click', () => {
    popupTitle.textContent = '';
    popup.classList.remove('popup_opened');
  });

  popupAdd.addEventListener('click', () => {
    addWord(popupTitle.textContent, popupMeaning.textContent);
    popupTitle.textContent = '';
    popup.classList.remove('popup_opened');
  });

  return popupElement;
}