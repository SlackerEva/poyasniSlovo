import { renderMessage, clearContent, setContent} from '../index.js'

export function clickHandelerLetter(evt, letter, objHtmlElements) {
  if (!evt.target.classList.contains(objHtmlElements.checkbox)) {

    const messageElement = renderMessage(objHtmlElements, letter);

    evt.preventDefault();
    clearContent(objHtmlElements);
    setContent(objHtmlElements, messageElement);
  }
}