import {clearContent, setContent, renderLetters, mailBox, renderMenu} from '../index.js'

export function renderMailBox(objHtmlElements, array = mailBox, mode = objHtmlElements.templaitLetter) {
  const menuElement = renderMenu(objHtmlElements, mode);
  clearContent(objHtmlElements);
  setContent(objHtmlElements, menuElement);
  renderLetters(objHtmlElements, array);
}