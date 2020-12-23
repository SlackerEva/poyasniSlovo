import {renderMailBox, renderDictionary} from '../index.js'

export function clickHandlerSidebar(evt, objHtmlElements) {
  const sidebar = document.querySelector(objHtmlElements.sidebar);
  
  if (evt.target.classList.contains(objHtmlElements.sidebarLinkIncoming.slice(1))) {
    const sidebarLinkIncoming = sidebar.querySelector(objHtmlElements.sidebarLinkIncoming);
    const sidebarLinkActive = sidebar.querySelector('.' + objHtmlElements.sidebarLinkActive);

    sidebarLinkActive.classList.remove(objHtmlElements.sidebarLinkActive);
    sidebarLinkIncoming.classList.add(objHtmlElements.sidebarLinkActive);

    renderMailBox(objHtmlElements);
  }

  if (evt.target.classList.contains(objHtmlElements.sidebarLinkDictionary.slice(1))) {
    const sidebarLinkDictionary = sidebar.querySelector(objHtmlElements.sidebarLinkDictionary);
    const sidebarLinkActive = sidebar.querySelector('.' + objHtmlElements.sidebarLinkActive);

    sidebarLinkActive.classList.remove(objHtmlElements.sidebarLinkActive);
    sidebarLinkDictionary.classList.add(objHtmlElements.sidebarLinkActive);
    
    renderDictionary(objHtmlElements);
  }
}