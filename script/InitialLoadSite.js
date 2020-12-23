import {renderMailBox, objHtmlElements, loadPoems, initialLetters, initialSenders, mailBox, clickHandlerSidebar } from './index.js'

const sidebar = document.querySelector(objHtmlElements.sidebar);
const sidebarLinkIncoming = sidebar.querySelector(objHtmlElements.sidebarLinkIncoming);
sidebarLinkIncoming.classList.add(objHtmlElements.sidebarLinkActive);

loadPoems().then(poems => {
  initialSenders.map((sender, index) => {
    mailBox.push(initialLetters(index, sender, poems));
  });

  renderMailBox(objHtmlElements);

  sidebar.addEventListener('click', (evt) => {
    clickHandlerSidebar(evt, objHtmlElements);
  })
});



