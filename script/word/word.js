import {dictionary, getRandInt} from '../index.js'

export let idSet = new Set();

export function Word(id ,name, value) {
  this.id = id;
  this.name = name;
  this.value = value;
}

export function addWord(name, value) {
  let id = 0;
  while(idSet.has(id)) {
    id = getRandInt(0, 1000000);
    if(idSet.size == 500000) {alert("Словарь переполнен"); break;}
  }
  idSet.add(id);
  dictionary.push(new Word(id, name, value));
}