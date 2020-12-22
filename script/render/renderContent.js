export function clearContent(objHtmlElements) {
  const content = Array.from(document.querySelector(objHtmlElements.content).children);
  content.forEach(element => {
    element.remove();
  });
}

export function setContent(objHtmlElements, templateContent) {
  const content = document.querySelector(objHtmlElements.content);
  content.append(templateContent); 
}