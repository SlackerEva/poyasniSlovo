import { mailBox, inputHandlerMenu, dictionary, renderLetters, renderWords, clearAll, clickHandlerMenuCheckbox, clickHandlerMenuBtn, deleteMail, archivemail} from '../index.js'

export function renderMenu(objHtmlElements, mode = '') {
  const menuTemplate = document.querySelector(objHtmlElements.templaitMenu).content;
  const menuElement = menuTemplate.cloneNode(true);
  const menuSearch = menuElement.querySelector(objHtmlElements.menuSearch);
  const menuBtnDelete = menuElement.querySelector(objHtmlElements.menuBtnDelete);
  const menuCheckboxAll = menuElement.querySelector('.checkbox-all');
  const menuBtnArchive = menuElement.querySelector(objHtmlElements.menuBtnArchive);

  menuCheckboxAll.addEventListener('click', (evt) => {
    clickHandlerMenuCheckbox(objHtmlElements, menuCheckboxAll);
  });

  // Оптимизировать код
  if (mode === objHtmlElements.templaitLetter) {
    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, mailBox, menuSearch, 'theme', renderLetters);
    });

    menuBtnDelete.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, mailBox, deleteMail);
    });

    menuBtnArchive.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, mailBox, archivemail);
    });
  }

  if (mode === objHtmlElements.templaitMessage) {
    const menuCheckBox = menuElement.querySelector(objHtmlElements.checkbox);

    menuCheckBox.classList.add(objHtmlElements.menuHide);
    menuSearch.classList.add(objHtmlElements.menuHide);
  }

  if (mode === objHtmlElements.templaitWord) {
    const menuBtnAnswer = menuElement.querySelector(objHtmlElements.menuBtnAnswer);
    const menuBtnArchive = menuElement.querySelector(objHtmlElements.menuBtnArchive);
    menuBtnAnswer.classList.add(objHtmlElements.menuHide);
    menuBtnArchive.classList.add(objHtmlElements.menuHide);

    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, dictionary, menuSearch, 'name', renderWords);
    })

  }

  if (mode === objHtmlElements.sidebarLinkDelete) {
    const menuBtnRestore = menuElement.querySelector(objHtmlElements.menuBtnRestore);
    menuBtnDelete.classList.add(objHtmlElements.menuHide);
    menuBtnRestore.classList.remove(objHtmlElements.menuHide);

    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, deleteMail, menuSearch, 'theme', renderLetters);
    });

    menuBtnRestore.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, deleteMail, mailBox);
    });

    menuBtnArchive.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, deleteMail, archivemail);
    });
  }

  if (mode === objHtmlElements.sidebarLinkArchive) {
    menuBtnArchive.classList.add(objHtmlElements.menuHide);

    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, archivemail, menuSearch, 'theme', renderLetters);
    });

    menuBtnDelete.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, archivemail, deleteMail);
    });
  }
  return menuElement;
}