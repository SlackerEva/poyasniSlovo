import {printMessage, printList, clickHundlerBtnAnswer, swapElementRestore, answer, mailBox, inputHandlerMenu, dictionary, renderLetters, renderWords, clickHandlerMenuCheckbox, clickHandlerMenuBtn, deleteMail, archivemail, swapElementArray, clickHandlerMenuBtnAnswer, clickHandlerMenuBtnmenuBtnRestore} from '../index.js'

export function renderMenu(objHtmlElements, mode = '', id = '') {
  const menuTemplate = document.querySelector(objHtmlElements.templaitMenu).content;
  const menuElement = menuTemplate.cloneNode(true);
  const menuSearch = menuElement.querySelector(objHtmlElements.menuSearch);
  const menuBtnDelete = menuElement.querySelector(objHtmlElements.menuBtnDelete);
  const menuCheckboxAll = menuElement.querySelector('.checkbox-all');
  const menuBtnArchive = menuElement.querySelector(objHtmlElements.menuBtnArchive);
  const menuBtnAnswer = menuElement.querySelector(objHtmlElements.menuBtnAnswer);
  const menuBtnPrint = menuElement.querySelector(objHtmlElements.menuBtnPrint);
  const menuBtnRestore = menuElement.querySelector(objHtmlElements.menuBtnRestore);

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

    menuBtnPrint.addEventListener('click', (evt) => {
      printList();
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

      menuBtnAnswer.addEventListener('click', (evt) => {
        clickHundlerBtnAnswer(evt, mailBox, id, objHtmlElements);
      });

      menuBtnPrint.addEventListener('click', (evt) => {
        printMessage();
      });
    }

    if(sidebarLinkActive.classList.contains(objHtmlElements.sidebarLinkArchive.slice(1))) {
      menuBtnArchive.classList.add(objHtmlElements.menuHide);

      menuBtnDelete.addEventListener('click', (evt) => {
        swapElementArray(archivemail, deleteMail, id);
      });

      menuBtnAnswer.addEventListener('click', (evt) => {
        clickHundlerBtnAnswer(evt, archivemail, id, objHtmlElements);
      });

      menuBtnPrint.addEventListener('click', (evt) => {
        printMessage();
      });
    }

    if(sidebarLinkActive.classList.contains(objHtmlElements.sidebarLinkDelete.slice(1))) {
      const menuBtnRestore = menuElement.querySelector(objHtmlElements.menuBtnRestore);
      menuBtnAnswer.classList.add(objHtmlElements.menuHide);
      menuBtnPrint.classList.add(objHtmlElements.menuHide);
      menuBtnDelete.classList.add(objHtmlElements.menuHide);
      menuBtnRestore.classList.remove(objHtmlElements.menuHide);

      menuBtnRestore.addEventListener('click', (evt) => {
        swapElementRestore(deleteMail, id);
      });
  
      menuBtnArchive.addEventListener('click', (evt) => {
        swapElementArray(deleteMail, archivemail, id);
      });

      menuBtnAnswer.addEventListener('click', (evt) => {
        clickHundlerBtnAnswer(evt, deleteMail, id, objHtmlElements);
      });
    }

    if(sidebarLinkActive.classList.contains(objHtmlElements.sidebarLinkAnswer.slice(1))) {
      menuBtnAnswer.classList.add(objHtmlElements.menuHide);

      menuBtnDelete.addEventListener('click', (evt) => {
        swapElementArray(answer, deleteMail, id);
      });

      menuBtnArchive.addEventListener('click', (evt) => {
        swapElementArray(answer, archivemail, id);
      });

      menuBtnPrint.addEventListener('click', (evt) => {
        printMessage();
      });
    }
  }

  if (mode === objHtmlElements.templaitWord) {
    menuBtnAnswer.classList.add(objHtmlElements.menuHide);
    menuBtnArchive.classList.add(objHtmlElements.menuHide);

    menuBtnDelete.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, dictionary, [], renderWords);
    });

    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, dictionary, menuSearch, 'name', renderWords);
    })

    menuBtnPrint.addEventListener('click', (evt) => {
      printList();
    });

  }

  if (mode === objHtmlElements.sidebarLinkDelete) {
    menuBtnAnswer.classList.add(objHtmlElements.menuHide);
    menuBtnPrint.classList.add(objHtmlElements.menuHide);
    menuBtnDelete.classList.add(objHtmlElements.menuHide);
    menuBtnRestore.classList.remove(objHtmlElements.menuHide);

    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, deleteMail, menuSearch, 'theme', renderLetters);
    });

    menuBtnRestore.addEventListener('click', (evt) => {
      clickHandlerMenuBtnmenuBtnRestore(evt, objHtmlElements, deleteMail);
    });

    menuBtnArchive.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, deleteMail, archivemail);
    });

    menuBtnAnswer.addEventListener('click', (evt) => {
      clickHandlerMenuBtnAnswer(evt, objHtmlElements, deleteMail, answer);
    });
  }

  if (mode === objHtmlElements.sidebarLinkAnswer) {
    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, answer, menuSearch, 'theme', renderLetters);
    });

    menuBtnArchive.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, answer, archivemail);
    });

    menuBtnDelete.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, answer, deleteMail);
    });

    menuBtnPrint.addEventListener('click', (evt) => {
      printList();
    });

    menuBtnAnswer.classList.add(objHtmlElements.menuHide);
  }

  if (mode === objHtmlElements.sidebarLinkArchive) {
    menuBtnArchive.classList.add(objHtmlElements.menuHide);

    menuSearch.addEventListener('input', (evt) => {
      inputHandlerMenu(objHtmlElements, archivemail, menuSearch, 'theme', renderLetters);
    });

    menuBtnDelete.addEventListener('click', (evt) => {
      clickHandlerMenuBtn(evt, objHtmlElements, archivemail, deleteMail);
    });

    menuBtnAnswer.addEventListener('click', (evt) => {
      clickHandlerMenuBtnAnswer(evt, objHtmlElements, archivemail, answer);
    });

    menuBtnPrint.addEventListener('click', (evt) => {
      printList();
    });
  }
  return menuElement;
}