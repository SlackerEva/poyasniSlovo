export function renderMenu(objHtmlElements, mode = '') {
  const menuTemplate = document.querySelector(objHtmlElements.templaitMenu).content;
  const menuElement = menuTemplate.cloneNode(true);
// Оптимизировать код
  if(mode === objHtmlElements.templaitMessage) {
    const menuCheckBox = menuElement.querySelector('.' + objHtmlElements.checkbox);
    const menuSearch = menuElement.querySelector(objHtmlElements.menuSearch);

    menuCheckBox.classList.add(objHtmlElements.menuHide);
    menuSearch.classList.add(objHtmlElements.menuHide);
  }

  if(mode === objHtmlElements.templaitWord) {
    const menuBtnAnswer = menuElement.querySelector(objHtmlElements.menuBtnAnswer);
    const menuBtnArchive = menuElement.querySelector(objHtmlElements.menuBtnArchive);

    menuBtnAnswer.classList.add(objHtmlElements.menuHide);
    menuBtnArchive.classList.add(objHtmlElements.menuHide);
  }


  return menuElement;
}