import {clearPage, renderStartPage, renderAuthorizationpage} from '../index.js'

export function renderPageRule(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);

  const termsTemplate = document.querySelector(objHtmlElements.templaitTerms).content;
  const termsElement = termsTemplate.cloneNode(true);
  const logo = termsElement.querySelector(objHtmlElements.logo);

  logo.addEventListener('click', (evt) => {
    if (!localStorage.getItem('test') == '1' || !localStorage.getItem('test') == null) {
      renderAuthorizationpage(objHtmlElements);
    } else {
      renderStartPage(objHtmlElements);
    }
  });

  clearPage(objHtmlElements);

  page.prepend(termsElement);
}