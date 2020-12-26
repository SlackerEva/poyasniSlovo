import {objHtmlElements, loadPoems, initialLetters, initialSenders, mailBox, renderAuthorizationpage, clickHandlerFooterMenu} from './index.js'

const footerMenu = document.querySelector(objHtmlElements.footerMenu);

loadPoems().then(poems => {
  initialSenders.map((sender, index) => {
    mailBox.push(initialLetters(index, sender, poems));
  });

  renderAuthorizationpage(objHtmlElements);

  footerMenu.addEventListener('click', (evt) => {
    clickHandlerFooterMenu(evt, objHtmlElements);
  })
});







