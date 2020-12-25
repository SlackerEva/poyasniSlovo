import {renderMailBox, renderDictionary, deleteMail, archivemail, answer} from '../index.js'

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

  if (evt.target.classList.contains(objHtmlElements.sidebarLinkDelete.slice(1))) {
    const sidebarLinkDelete = sidebar.querySelector(objHtmlElements.sidebarLinkDelete);
    const sidebarLinkActive = sidebar.querySelector('.' + objHtmlElements.sidebarLinkActive);

    sidebarLinkActive.classList.remove(objHtmlElements.sidebarLinkActive);
    sidebarLinkDelete.classList.add(objHtmlElements.sidebarLinkActive);
    
    renderMailBox(objHtmlElements, deleteMail, objHtmlElements.sidebarLinkDelete);
  }

  if (evt.target.classList.contains(objHtmlElements.sidebarLinkArchive.slice(1))) {
    const sidebarLinkArchive = sidebar.querySelector(objHtmlElements.sidebarLinkArchive);
    const sidebarLinkActive = sidebar.querySelector('.' + objHtmlElements.sidebarLinkActive);

    sidebarLinkActive.classList.remove(objHtmlElements.sidebarLinkActive);
    sidebarLinkArchive.classList.add(objHtmlElements.sidebarLinkActive);
    
    renderMailBox(objHtmlElements, archivemail, objHtmlElements.sidebarLinkArchive);
  }

  if (evt.target.classList.contains(objHtmlElements.sidebarLinkAnswer.slice(1))) {
    const sidebarLinkAnswer = sidebar.querySelector(objHtmlElements.sidebarLinkAnswer);
    const sidebarLinkActive = sidebar.querySelector('.' + objHtmlElements.sidebarLinkActive);

    sidebarLinkActive.classList.remove(objHtmlElements.sidebarLinkActive);
    sidebarLinkAnswer.classList.add(objHtmlElements.sidebarLinkActive);
    
    renderMailBox(objHtmlElements, answer, objHtmlElements.sidebarLinkAnswer);
  }
}