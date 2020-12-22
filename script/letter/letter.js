import {getRandInt} from '../index.js'

export function Letter(id = '', name = '', surname = '', email = '', text = '', theme = 'Без темы') {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.text = text;
  this.theme = theme;
}

export function initialLetters(id, sender, proseArray) {
  let randomIntIndexProse = getRandInt(0, proseArray.length - 1);
  return new Letter(id, sender.name, sender.surname, sender.email, proseArray[randomIntIndexProse].fields.text, proseArray[randomIntIndexProse].fields.name);
}