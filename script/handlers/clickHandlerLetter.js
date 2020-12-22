import {renderMenu, renderMessage, clearContent, setContent} from '../index.js'

export function clickHandelerLetter(evt, letter, objHtmlElements) {
  if (!evt.target.classList.contains(objHtmlElements.checkbox)) {

    const menuElement = renderMenu(objHtmlElements);
    const messageElement = renderMessage(objHtmlElements, letter);
    evt.preventDefault();
    clearContent(objHtmlElements);
    setContent(objHtmlElements, menuElement);
    setContent(objHtmlElements, messageElement);
  }
}