export function swapElementArray(arrayOut, arrayInp, id) {
  let letter = arrayOut.filter(item => item.id == id)[0];
  arrayOut.forEach((item, index) => {if(item.id == id) arrayOut.splice(index, 1);})
  arrayInp.push(letter);
}