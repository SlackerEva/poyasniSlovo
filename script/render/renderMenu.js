import { answer, mailBox, inputHandlerMenu, dictionary, renderLetters, renderWords, clickHandlerMenuCheckbox, clickHandlerMenuBtn, deleteMail, archivemail, swapElementArray, clickHandlerMenuBtnAnswer} from '../index.js'

export function renderMenu(objHtmlElements, mode = '', id = '') {
  const menuTemplate = document.querySelector(objHtmlElements.templaitMenu).content;
  const menuElement = menuTemplate.cloneNode(true);
  const menuSearch = menuElement.querySelector(objHtmlElements.menuSearch);
  const menuBtnDelete = menuElement.querySelector(objHtmlElements.menuBtnDelete);
  const menuCheckboxAll = menuElement.querySelector('.checkbox-all');
  const menuBtnArchive = menuElement.querySelector(objHtmlElements.menuBtnArchive);
  const menuBtnAnswer = menuElement.querySelector(objHtmlElements.menuBtnAnswer);

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

    menuBtnAnswer.addEventListener('click', (evt) => {
      clickHandlerMenuBtnAnswer(evt, objHtmlElements, mailBox, answer);
    });
  }

  if (mode === objHtmlElements.templaitMessage) {
    const menuCheckBox = menuElement.querySelector(objHtmlElements.checkbox);
    const sidebarLinkActive = document.querySelector('.' + objHtmlElements.sidebarLinkActive)

    menuCheckBox.classList.add(objHtmlElements.menuHide);
    menuSearch.classList.add(objHtmlElements.menuHide);

    if(sidebarLinkActive.classList.contains(objHtmlElements.sidebarLinkIncoming.slice(1))) {

      menuBtnDelete.addEventListener('click', (evt) => {
        swapElementArray(mailBox, deleteMail, id);
      });
  
      menuBtnArchive.addEventListener('click', (evt) => {
        swapElementArray(mailBox, archivemail, id);
      });
    }

    if(sidebarLinkActive.classList.contains(objHtmlElements.sidebarLinkArchive.slice(1))) {
      menuBtnArchive.classList.add(objHtmlElements.menuHide);

      menuBtnDelete.addEventListener('click', (evt) => {
        swapElementArray(archivemail, deleteMail, id);
      });
    }

    if(sidebarLinkActive.classList.contains(objHtmlElements.sidebarLinkDelete.slice(1))) {
      const menuBtnRestore = menuElement.querySelector(objHtmlElements.menuBtnRestore);

      menuBtnDelete.classList.add(objHtmlElements.menuHide);
      menuBtnRestore.classList.remove(objHtmlElements.menuHide);

      menuBtnRestore.addEventListener('click', (evt) => {
        swapElementArray(deleteMail, mailBox, id);
      });
  
      menuBtnArchive.addEventListener('click', (evt) => {
        swapElementArray(deleteMail, archivemail, id);
      });
    }
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