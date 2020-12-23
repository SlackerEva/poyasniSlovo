import {dictionary} from '../index.js'

export function Word(name, value) {
  this.name = name;
  this.value = value;
}

export function addWord(name, value) {
  dictionary.push(new Word(name, value));
}