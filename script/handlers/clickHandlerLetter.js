import {renderMenu, renderMessage, clearContent, setContent} from '../index.js'

export function clickHandelerLetter(evt, letter, objHtmlElements) {
  if (!evt.target.classList.contains(objHtmlElements.checkbox)) {

    const menuElement = renderMenu(objHtmlElements);
    const messageElement = renderMessage(objHtmlElements, letter);
    const messageInfo = messageElement.querySelector(objHtmlElements.messageInfo);
    const menuCheckBox = menuElement.querySelector('.' + objHtmlElements.checkbox);
    const menuSearch = menuElement.querySelector(objHtmlElements.menuSearch);
    menuCheckBox.classList.add(objHtmlElements.menuHide);
    menuSearch.classList.add(objHtmlElements.menuHide);

    evt.preventDefault();
    clearContent(objHtmlElements);
    setContent(objHtmlElements, messageElement);
    messageInfo.after(menuElement);
  }
}