import {dictionary} from '../index.js'

export function setDictonaryInLocalStorage() {
  localStorage.removeItem('dictionary');
  let Obj = Object.assign({}, dictionary);
  let jsonDictionary = JSON.stringify(Obj);
  localStorage.setItem('dictionary', jsonDictionary);
}

export function getDictonaryInLocalStorage() {
  let array = Object.values(JSON.parse(localStorage.getItem('dictionary')));
  dictionary.length = 0;
  array.forEach((item) => dictionary.push(item));
}