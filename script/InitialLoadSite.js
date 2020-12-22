import { renderMenu, renderLetters, setContent, objHtmlElements, loadPoems, initialLetters, initialSenders, mailBox, clickHandlerSidebar } from './index.js'

let menuElement = renderMenu(objHtmlElements);
const sidebar = document.querySelector(objHtmlElements.sidebar);
const sidebarLinkIncoming = sidebar.querySelector(objHtmlElements.sidebarLinkIncoming);
sidebarLinkIncoming.classList.add(objHtmlElements.sidebar__link_active);

loadPoems().then(poems => {
  initialSenders.map((sender, index) => {
    mailBox.push(initialLetters(index, sender, poems));
  });
  setContent(objHtmlElements, menuElement);
  renderLetters(objHtmlElements, mailBox);
  sidebar.addEventListener('click', (evt) => {
    clickHandlerSidebar(evt, objHtmlElements, mailBox);
  })
});



