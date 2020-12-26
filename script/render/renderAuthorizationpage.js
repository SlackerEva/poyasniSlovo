import { clearPage } from '../index.js'

export function renderAuthorizationpage(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);

  const logInTemplateLogIn = document.querySelector(objHtmlElements.templateLogIn).content;
  const logInElement = logInTemplateLogIn.cloneNode(true);

  clearPage(objHtmlElements);
  page.prepend(logInElement);
}