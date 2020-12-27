import {getRandInt, poems} from '../index.js'

export function clickHundlerBtnAnswer(evt, array, id, objHtmlElements) {

  const poupElement = document.querySelector(objHtmlElements.popupAnswer);
  let letter = array.filter((item) => (item.id == id));
  const popupData = poupElement.querySelector(objHtmlElements.popupData);
  popupData.classList.remove( objHtmlElements.menuHide );

  const popupMessageTitle = popupData.querySelector(objHtmlElements.popupMessageTitle);
  popupMessageTitle.textContent = 'Re: Обращение № 00' + id;

  const popupMessageEmailBold = popupData.querySelector(objHtmlElements.popupMessageEmailBold);
  popupMessageEmailBold.textContent = 'To:';

  const popupMessageEmail = popupData.querySelector(objHtmlElements.popupMessageEmail);
  popupMessageEmail.lastChild.textContent = ' ' + letter[0].email;

  const popupMessageMeaning = poupElement.querySelector(objHtmlElements.popupMessageMeaning);
  let randomIntIndexProse = getRandInt(0, poems.length - 1);
  popupMessageMeaning.textContent = poems[randomIntIndexProse].fields.text;

  poupElement.classList.add('popup_opened');
}