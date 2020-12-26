import { clearPage, enableValidation } from '../index.js'

export function renderAuthorizationpage(objHtmlElements) {
  const page = document.querySelector(objHtmlElements.page);
  const obj = {
    formSelector: '.login__form',
    inputSelector: '.login__input',
    checkboxSelector: '.login__checkbox',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'login__input_type_error',
    errorClass: 'login__input-error_active'
  }
  const logInTemplateLogIn = document.querySelector(objHtmlElements.templateLogIn).content;
  const logInElement = logInTemplateLogIn.cloneNode(true);
  const form = logInElement.querySelector(obj.formSelector);

  enableValidation(obj, form);
  clearPage(objHtmlElements);
  page.prepend(logInElement);
}