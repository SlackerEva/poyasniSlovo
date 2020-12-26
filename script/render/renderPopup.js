import { addWord, swapElementAnswer} from '../index.js'

export function renderPopup(objHtmlElements) {
  const popupTemplate = document.querySelector(objHtmlElements.templaitPopup).content;
  const popupElement = popupTemplate.cloneNode(true);

  const popup = popupElement.firstElementChild;
  const popupClose = popupElement.querySelector(objHtmlElements.popupClose);
  const popupTitle = popupElement.querySelector(objHtmlElements.popupTitle);
  const popupMeaning = popupElement.querySelector(objHtmlElements.popupMeaning);
  const popupAdd = popupElement.querySelector(objHtmlElements.popupAdd);
  popupAdd.textContent = 'Добавить слово';

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

export function renderPopupAnswer(objHtmlElements, arrayTarget, id) {
  const popupTemplate = document.querySelector('#popup-answer').content;
  const popupElement = popupTemplate.cloneNode(true);

  const popupTitle = popupElement.querySelector(objHtmlElements.popupTitle);
  popupTitle.textContent = 'Новое сообщение';

  const popup = popupElement.firstElementChild;
  const popupClose = popupElement.querySelector(objHtmlElements.popupClose);
  const popupAdd = popupElement.querySelector(objHtmlElements.popupAdd);
  const popupMeaning = popupElement.querySelector(objHtmlElements.popupMeaning);

  popupAdd.textContent = 'Отправить';

  popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
  });

  popupAdd.addEventListener('click', () => {
    swapElementAnswer(arrayTarget, popupMeaning.textContent, id)
  });

  return popupElement;
}