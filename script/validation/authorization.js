import {renderStartPage, objHtmlElements} from '../index.js';
const email = 'MIvanova@gosjalobi.ru';
const phone = '89123123123';
const password = 'yandex-praktikum-best';
// const regexEmail = /[a-z]{8}@gosjalobi\.ru/ig;
// const regexPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
// const regexPass = /[a-z]{6}\S[a-z]{9}\S[a-z]{4}/;

export function enableValidation(options, form) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        localStorage.setItem('test', 1);
        renderStartPage(objHtmlElements);
    });
    setEventListeners(form, options);
};

function setEventListeners(form, options) {
    const inputList = Array.from(form.querySelectorAll(options.inputSelector));
    const checkbox = form.querySelector(options.checkboxSelector);
    const buttonElement = form.querySelector(options.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, options);
    inputList.forEach(function(input) {
        input.addEventListener('input', function() {
            isValid(form, input, options);
            toggleButtonState(inputList, buttonElement, options);
        });
    });
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            localStorage.setItem('test2', 2);
          }
    });
};

function toggleButtonState(inputList, buttonElement, options) {
    if (hasInValidInput(inputList)) {
        buttonElement.classList.add(options.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(options.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
        }
};

function ValidEmail(form, input, options) {
    if(email === input.value || phone === input.value) {
        hideInputError(form, input, options);
    } else {
        showInputError(form, input, options);
    }
}

function ValidPass(form, input, options) {
    if(password === input.value) {
        hideInputError(form, input, options);
    } else {
        showInputError(form, input, options);
    }
}

function hasInValidInput(inputList) {    
    return inputList.some(function(input) {
        return input.validity.valid == false;
    })
};

function isValid(form, input, options) {
        switch (input.type) {
            case 'text':
                ValidEmail(form, input, options);
                break;
            case 'password':
                ValidPass(form, input, options);
                break;
        }
};

function showInputError(formElement, input, options) {
    const formError = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(options.inputAllow);
    input.classList.add(options.inputErrorClass);
    formError.classList.add(options.errorClass);
    if(input.value == ''){
        formError.textContent = 'Необходимо заполнить данное поле';
    } else if(formError.id === 'login__input_email-error') {
        formError.textContent = 'Вы ввели не правильную почту или номер телефона';
    } else if (formError.id === 'login__input_password-error') {
        formError.textContent = 'Вы ввели не правильный пароль';
    }
};

function hideInputError(formElement, input, options) {
    const formError = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(options.inputErrorClass);
    input.classList.add(options.inputAllow);
    formError.classList.remove(options.errorClass);
    formError.textContent = '';
};