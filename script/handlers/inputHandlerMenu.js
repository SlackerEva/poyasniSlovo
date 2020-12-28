import {clearAll} from '../index.js'

export function inputHandlerMenu(objHtmlElements, array, menuSearch, title, renderItem) {
  clearAll(objHtmlElements.content, objHtmlElements.linkContent);
  let value = menuSearch.value.toLowerCase();
  let searchArray = array.filter(letter => letter[title].toLowerCase().startsWith(value));
  renderItem(objHtmlElements, searchArray);
}