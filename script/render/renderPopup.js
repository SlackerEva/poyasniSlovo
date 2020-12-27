import { addWord, swapElementAnswer, renderMailBox} from '../index.js'

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
    const popupHint = document.querySelector(objHtmlElements.PopupHint);
    const popupHintTitle =  popupHint.querySelector(objHtmlElements.popupHintTitle);

    popupHintTitle.textContent = "Слово добавлено в словарь!"
    addWord(popupTitle.textContent, popupMeaning.textContent);
    popupTitle.textContent = '';
    popup.classList.remove('popup_opened');
    popupHint.classList.add('popup_opened');
  });

  return popupElement;
}

export function renderPopupAnswer(objHtmlElements, arrayTarget, id) {
  const popupTemplate = document.querySelector(objHtmlElements.templatePopupAnswer).content;
  const popupElement = popupTemplate.cloneNode(true);

  const popupTitle = popupElement.querySelector(objHtmlElements.popupTitle);
  popupTitle.textContent = 'Новое сообщение';

  const popup = popupElement.firstElementChild;
  const popupClose = popupElement.querySelector(objHtmlElements.popupClose);
  const popupAdd = popupElement.querySelector(objHtmlElements.popupAdd);
  const popupMessageMeaning = popupElement.querySelector(objHtmlElements.popupMessageMeaning);

  popupAdd.textContent = 'Отправить';

  popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
  });

  popupAdd.addEventListener('click', () => {
    swapElementAnswer(arrayTarget, popupMessageMeaning.textContent, id);
    renderMailBox(objHtmlElements, arrayTarget);
  });

  return popupElement;
}

export function renderPopupHint(objHtmlElements) {
  const popupHintTemplate = document.querySelector(objHtmlElements.templatePopupHint).content;
  const popupHintElement = popupHintTemplate.cloneNode(true);
  const popup = popupHintElement.firstElementChild;
  const popupClose = popupHintElement.querySelector(objHtmlElements.popupClose);

  popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
  });

  return popupHintElement;
}

