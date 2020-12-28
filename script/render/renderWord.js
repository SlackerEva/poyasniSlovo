import {setContent, clickHandelerWord} from '../index.js'

export function renderWord(objHtmlElements, word) {
  const wordTemplate = document.querySelector(objHtmlElements.templaitWord).content;
  const wordElement = wordTemplate.cloneNode(true);
  const wordTitle = wordElement.querySelector(objHtmlElements.wordTitle);
  const wordValue = wordElement.querySelector(objHtmlElements.wordValue);
  const wordCheckbox = wordElement.querySelector(objHtmlElements.checkboxItem);

  wordTitle.textContent = word.name;
  wordValue.textContent = word.value;
  wordCheckbox.value = word.id;

  return wordElement;
}

export function renderWords(objHtmlElements, dictionary) {
  dictionary.forEach((word, index) => {
    if (index < 7) {
      let wordElement = renderWord(objHtmlElements, word);
      wordElement.firstElementChild.addEventListener('click', (evt) => {
        clickHandelerWord(evt, word, objHtmlElements);
      });
      setContent(objHtmlElements, wordElement);
    }
  })
}