import {clickHandlerSidebar, renderMailBox, clearPage, renderErrorPage, clickHandlerAvatar} from '../index.js'

export function renderStartPage(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);

  const headerTemplate = document.querySelector(objHtmlElements.templaitHeader).content;
  const headerElement = headerTemplate.cloneNode(true);

  const mainTemplate = document.querySelector(objHtmlElements.templaitMain).content;
  const mainElement = mainTemplate.cloneNode(true);

  const sidebar = mainElement.querySelector(objHtmlElements.sidebar);
  const sidebarLinkIncoming = sidebar.querySelector(objHtmlElements.sidebarLinkIncoming);
  sidebarLinkIncoming.classList.add(objHtmlElements.sidebarLinkActive);

  const navigationLinkApplication = headerElement.querySelector(objHtmlElements.navigationLinkApplication);

  navigationLinkApplication.addEventListener('click', (evt) => {
    renderErrorPage(objHtmlElements);
  });

  sidebar.addEventListener('click', (evt) => {
    clickHandlerSidebar(evt, objHtmlElements);
  });
  
  const avatar = headerElement.querySelector(objHtmlElements.avatar);
  avatar.addEventListener('click', () => {
    clickHandlerAvatar(objHtmlElements);
  });

  clearPage(objHtmlElements);

  page.prepend(mainElement);
  page.prepend(headerElement);

  renderMailBox(objHtmlElements);
}