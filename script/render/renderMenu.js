export function renderMenu(objHtmlElements) {
  const menuTemplate = document.querySelector(objHtmlElements.templaitMenu).content;
  const menuElement = menuTemplate.cloneNode(true);
  return menuElement;
}