import {getRandInt, poems} from '../index.js'

export function clickHundlerBtnAnswer(evt, array, id) {

  const poupElement = document.querySelector('.popup-answer');
  let letter = array.filter((item) => (item.id == id));

  const popupData = poupElement.querySelector('.popup__data');
  popupData.classList.remove( "hidde" );

  const popupMessageTitle = popupData.querySelector('.popup__message-title');
  popupMessageTitle.textContent = 'Re: Обращение № 00' + id;

  const popupMessageEmail = popupData.querySelector('.popup__message-email');
  popupMessageEmail.textContent = 'To: ' + letter[0].email;

  const popupMeaning = poupElement.querySelector('.popup__meaning');
  let randomIntIndexProse = getRandInt(0, poems.length - 1);
  popupMeaning.textContent = poems[randomIntIndexProse].fields.text;

  poupElement.classList.add('popup_opened');
}