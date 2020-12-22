import {clickHandelerLetter, setContent} from '../index.js'

export function renderLetter(objHtmlElements, letter) {
  const letterTemplate = document.querySelector(objHtmlElements.templaitLetter).content;
  const letterElement = letterTemplate.cloneNode(true);
  const letterTheme = letterElement.querySelector(objHtmlElements.letterTheme);
  const letterAuthor = letterElement.querySelector(objHtmlElements.letterAuthor);

  letterTheme.textContent = letter.theme;
  letterAuthor.textContent = letter.name + " " + letter.surname;

  letterElement.firstElementChild.addEventListener('click', (evt) => {
    clickHandelerLetter(evt, letter, objHtmlElements);
  });

  return letterElement;
}

export function renderLetters(objHtmlElements, mailBox) {
  mailBox.forEach((letter, index) => {
    if (index < 7) {
      let letterElement = renderLetter(objHtmlElements, letter)
      setContent(objHtmlElements, letterElement);
    }
  })
}