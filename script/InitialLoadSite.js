import {objHtmlElements, loadPoems, initialLetters, initialSenders, mailBox, renderStartPage, clickHandlerFooterMenu} from './index.js'

const footerMenu = document.querySelector(objHtmlElements.footerMenu);

loadPoems().then(poems => {
  initialSenders.map((sender, index) => {
    mailBox.push(initialLetters(index, sender, poems));
  });

  renderStartPage(objHtmlElements);

  footerMenu.addEventListener('click', (evt) => {
    clickHandlerFooterMenu(evt, objHtmlElements);
  })
});







