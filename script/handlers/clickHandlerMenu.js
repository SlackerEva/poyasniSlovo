import { clearAll, renderLetters, poems, getRandInt, mailBox, answer} from '../index.js'

export function clickHandlerMenuBtn(evt, objHtmlElements, letters, deleteLetters, render = renderLetters) {
  const content = document.querySelector(objHtmlElements.content);
  const menuCheckBoxArray = Array.from(content.querySelectorAll(objHtmlElements.checkboxListItem));
  const menuCheckBoxArrayChecked = menuCheckBoxArray.filter(element => element.checked);
  const menuCheckBoxArrayId = menuCheckBoxArrayChecked.map(element => +element.value);

  let index = 0;

  while(letters.length) {
    if (menuCheckBoxArrayId.includes(letters[index].id)) {
      deleteLetters.push(letters[index]);
      letters.splice(index, 1);
      index--;
    }
    index++;
    if(index == letters.length) break;
  }

  clearAll(objHtmlElements.content, objHtmlElements.linkContent);
  render(objHtmlElements, letters);
}

export function clickHandlerMenuBtnAnswer(evt, objHtmlElements, letters, deleteLetters, render = renderLetters) {
  const content = document.querySelector(objHtmlElements.content);
  const menuCheckBoxArray = Array.from(content.querySelectorAll(objHtmlElements.checkboxListItem));
  const menuCheckBoxArrayChecked = menuCheckBoxArray.filter(element => element.checked);
  const menuCheckBoxArrayId = menuCheckBoxArrayChecked.map(element => +element.value);

  let index = 0;

  while(letters.length) {
    if (menuCheckBoxArrayId.includes(letters[index].id)) {
      deleteLetters.push(letters[index]);
      let randomIntIndexProse = getRandInt(0, poems.length - 1);
      deleteLetters[deleteLetters.length-1].answer = poems[randomIntIndexProse].fields.text;
      letters.splice(index, 1);
      index--;
    }
    index++;
    if(index == letters.length) break;
  }
  clearAll(objHtmlElements.content, objHtmlElements.linkContent);
  render(objHtmlElements, letters);
}

export function clickHandlerMenuBtnmenuBtnRestore(evt, objHtmlElements, letters, render = renderLetters) {
  const content = document.querySelector(objHtmlElements.content);
  const menuCheckBoxArray = Array.from(content.querySelectorAll(objHtmlElements.checkboxListItem));
  const menuCheckBoxArrayChecked = menuCheckBoxArray.filter(element => element.checked);
  const menuCheckBoxArrayId = menuCheckBoxArrayChecked.map(element => +element.value);

  let index = 0;

  while(letters.length) {
    if (menuCheckBoxArrayId.includes(letters[index].id)) {
      if("answer" in letters[index]) {
        answer.push(letters[index]);
      } else {
        mailBox.push(letters[index]);
      }
      letters.splice(index, 1);
      index--;
    }
    index++;
    if(index == letters.length) break;
  }

  clearAll(objHtmlElements.content, objHtmlElements.linkContent);
  render(objHtmlElements, letters);
}



export function clickHandlerMenuCheckbox(objHtmlElements, menuCheckboxAll) {
  const content = document.querySelector(objHtmlElements.content);
  const menuCheckBoxArray = Array.from(content.querySelectorAll(objHtmlElements.checkboxListItem));
  if (menuCheckboxAll.checked) {
    menuCheckBoxArray.forEach(element => element.checked = true);
  } else {
    menuCheckBoxArray.forEach(element => element.checked = false);
  }
}