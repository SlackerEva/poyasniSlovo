import {getRandInt, errors, renderStartPage, clearPage} from '../index.js'

export function renderErrorPage(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);
  let randNum = getRandInt(0, errors.length-1)
  let pageError = errors[randNum];

  const errorTemplate = document.querySelector(objHtmlElements.templaitError).content;
  const errorElement = errorTemplate.cloneNode(true);

  const footerLinkBreackImg = errorElement.querySelector(objHtmlElements.footerLinkBreackImg);
  const footerLinkTitle = errorElement.querySelector(objHtmlElements.footerLinkTitle);
  const footerLinkBack = errorElement.querySelector(objHtmlElements.footerLinkBack);
  const logo = errorElement.querySelector(objHtmlElements.logo);

  footerLinkBreackImg.src = pageError.src;
  footerLinkTitle.textContent = pageError.title;
  footerLinkBack.innerHTML = pageError.subtitle;

  const footerLinkLink = errorElement.querySelector(objHtmlElements.footerLinkLink);
  
  logo.addEventListener('click', (evt) => {
    renderStartPage(objHtmlElements)
  });

  if(footerLinkLink) {
    footerLinkLink.addEventListener('click', (evt) => {
      renderStartPage(objHtmlElements)
    });
  }

  clearPage(objHtmlElements);

  page.prepend(errorElement);
}