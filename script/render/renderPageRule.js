import {clearPage, renderStartPage} from '../index.js'

export function renderPageRule(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);

  const termsTemplate = document.querySelector(objHtmlElements.templaitTerms).content;
  const termsElement = termsTemplate.cloneNode(true);
  const logo = termsElement.querySelector(objHtmlElements.logo);

  logo.addEventListener('click', (evt) => {
    renderStartPage(objHtmlElements)
  });

  clearPage(objHtmlElements);

  page.prepend(termsElement);
}