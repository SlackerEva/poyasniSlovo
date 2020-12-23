import {clearContent, setContent, renderLetters, mailBox, renderMenu} from '../index.js'

export function renderMailBox(objHtmlElements) {
  const menuElement = renderMenu(objHtmlElements);
  
  clearContent(objHtmlElements);
  setContent(objHtmlElements, menuElement);
  renderLetters(objHtmlElements, mailBox);
}