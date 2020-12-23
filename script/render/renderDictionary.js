import {clearContent, setContent, renderWords, renderMenu, dictionary, renderPopup} from '../index.js'

export function renderDictionary(objHtmlElements) {
  const menuElement = renderMenu(objHtmlElements, objHtmlElements.templaitWord);
  const popupElement = renderPopup(objHtmlElements);

  clearContent(objHtmlElements);
  setContent(objHtmlElements, menuElement);
  renderWords(objHtmlElements, dictionary);
  setContent(objHtmlElements, popupElement);
}