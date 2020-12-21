import {getLetters, setIdLetters} from './newindex.js'

export function addMailSection(objHtmlElements) {
  const mailTemplate = document.querySelector(objHtmlElements.templaitMail).content; 
  const mailElement = mailTemplate.cloneNode(true);
  const content = document.querySelector(objHtmlElements.content)
  content.prepend(mailElement);
  getLetters();
  setIdLetters();
  SetEventListenerMailbox();
}

export function SetEventListenerMailbox(objHtmlElements) {
  const mailBox = content.querySelector(objHtmlElements.mailBox);
  mailBox.addEventListener('click', handlerClickLeterMailbox);
}