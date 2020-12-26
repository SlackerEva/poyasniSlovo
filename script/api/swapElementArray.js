import {answer, mailBox} from '../index.js'

export function swapElementArray(arrayOut, arrayInp, id) {
  let letter = arrayOut.filter(item => item.id == id)[0];
  arrayOut.forEach((item, index) => {if(item.id == id) arrayOut.splice(index, 1);})
  arrayInp.push(letter);
}

export function swapElementAnswer(arrayOut, text, id) {
  let letter = arrayOut.filter(item => item.id == id)[0];
  console.log(arrayOut);
  letter.answer = text;
  arrayOut.forEach((item, index) => {if(item.id == id) arrayOut.splice(index, 1);})
  answer.push(letter);
}

export function swapElementRestore(arrayOut, id) {
  let letter = arrayOut.filter(item => item.id == id)[0];
  arrayOut.forEach((item, index) => {if(item.id == id) arrayOut.splice(index, 1);});

  if("answer" in letter) {
    answer.push(letter);
  } else {
    mailBox.push(letter);
  }
}
