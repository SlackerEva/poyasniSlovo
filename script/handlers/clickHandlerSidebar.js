import { renderMenu, clearContent, setContent, renderLetters } from '../index.js'

export function clickHandlerSidebar(evt, objHtmlElements, mailBox) {
  if (evt.target.classList.contains(objHtmlElements.sidebarLinkIncoming.slice(1))) {
    let menuElement = renderMenu(objHtmlElements);
    clearContent(objHtmlElements);
    setContent(objHtmlElements, menuElement);
    renderLetters(objHtmlElements, mailBox);
  }
}