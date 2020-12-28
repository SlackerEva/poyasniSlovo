import {clearPage, renderStartPage, renderAuthorizationpage} from '../index.js'

export function renderPagePrivacyPolicy(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);

  const privacyTemplate = document.querySelector(objHtmlElements.templaitPrivacy).content;
  const privacyElement = privacyTemplate.cloneNode(true);
  const logo = privacyElement.querySelector(objHtmlElements.logo);
  const footerLinkLink = privacyElement.querySelector(objHtmlElements.footerLinkLink);

  logo.addEventListener('click', (evt) => {
    if (!localStorage.getItem('test') == '1' || !localStorage.getItem('test') == null) {
      renderAuthorizationpage(objHtmlElements);
    } else {
      renderStartPage(objHtmlElements);
    }
  });

  footerLinkLink.addEventListener('click', (evt) => {
    if (!localStorage.getItem('test') == '1' || !localStorage.getItem('test') == null) {
      renderAuthorizationpage(objHtmlElements);
    } else {
      renderStartPage(objHtmlElements);
    }
  });

  clearPage(objHtmlElements);

  page.prepend(privacyElement);
}