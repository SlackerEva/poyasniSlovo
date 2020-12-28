export function clearContent(objHtmlElements) {
  const content = Array.from(document.querySelector(objHtmlElements.content).children);
  content.forEach(element => {
    element.remove();
  });
}

export function clearPage(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);
  const footer = page.querySelector(objHtmlElements.footer);

  const pageChildren = Array.from(page.children);
  const pageChildrenWithoutFooter = pageChildren.filter(children => ( (children !== footer) && (children.tagName !== 'TEMPLATE') ));

  pageChildrenWithoutFooter.forEach(elementItem => elementItem.remove());
}

export function clearAll(elementContainer, objHtmlElements) {
  const container = document.querySelector(elementContainer);
  const elementArray = Array.from(container.querySelectorAll(objHtmlElements));
  
  elementArray.forEach(elementItem => elementItem.remove());
}

export function setContent(objHtmlElements, templateContent) {
  const content = document.querySelector(objHtmlElements.content);
  content.append(templateContent); 
}
