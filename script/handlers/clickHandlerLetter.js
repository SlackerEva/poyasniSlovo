import { renderMessage, clearContent, setContent} from '../index.js'

export function clickHandlerLetter(evt, letter, objHtmlElements) {
  
  if (!evt.target.closest(objHtmlElements.checkbox)) {
  
    const messageElement = renderMessage(objHtmlElements, letter);

    evt.preventDefault();
    clearContent(objHtmlElements);
    setContent(objHtmlElements, messageElement);
  }
}