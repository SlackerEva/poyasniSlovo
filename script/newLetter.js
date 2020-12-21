import {getRandInt, wrapperMailbox, objHtmlElements} from './newindex.js'

export function Letter(id = '', name = '', surname = '', email = '', text = '', theme = 'Без темы') {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.text = text;
  this.theme = theme;
}

export function addLetter(id, sender, text, theme) {
  return new Letter(id, sender.name, sender.surname, sender.email, text, theme)
}

export function initialLetters(initialSenders, proseArray) {
  return initialSenders.map( (sender, id) => {  let randomIntIndexProse = getRandInt(0, proseArray.length - 1);
                                                return addLetter(id + 'letter', sender, proseArray[randomIntIndexProse].fields.text, proseArray[randomIntIndexProse].fields.name); });
}

export function setLetter(theme, author, objHtmlElements) {
  const letterTemplate = document.querySelector(objHtmlElements.templaitLetter).content;
  const letterGrid = document.querySelector(objHtmlElements.mailBox);
  const letterElement = letterTemplate.cloneNode(true);
  const letterSub = letterElement.querySelector(objHtmlElements.letterTheme);

  letterSub.textContent = theme;
  letterElement.querySelector(objHtmlElements.letterAuthor).textContent = author;
  letterGrid.append(letterElement);
}

export function setIdLetters() {
  const letters = content.querySelectorAll('.mail__letter');
  letters.forEach((element, index) => element.id = mailbox[index].id);
}

export function getLetters() {
  wrapperMailbox.mailbox.forEach( (letter, index) => {
    if(index < 7) 
    {setLetter(letter.theme, letter.name + letter.surname, objHtmlElements);}
  });
}

export function openLetter(id) {
  clearContent();
  addLetterSection(id);
}