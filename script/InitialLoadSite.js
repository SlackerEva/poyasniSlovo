import {objHtmlElements, loadPoems, initialLetters, initialSenders, mailBox, renderAuthorizationpage, clickHandlerFooterMenu, renderStartPage} from './index.js'

const footerMenu = document.querySelector(objHtmlElements.footerMenu);

loadPoems().then(poems => {
  initialSenders.map((sender, index) => {
    mailBox.push(initialLetters(index, sender, poems));
  });

  if(!localStorage.getItem('test') == '1' || !localStorage.getItem('test') == null) {
    renderAuthorizationpage(objHtmlElements);
  } else {
    renderStartPage(objHtmlElements);
  }

  footerMenu.addEventListener('click', (evt) => {
    clickHandlerFooterMenu(evt, objHtmlElements);
  })
});







