import {renderStartPage, objHtmlElements} from '../index.js'
const email = 'MIvanova@gosjalobi.ru';
const phone = '89123123123';
const password = 'yandex-praktikum-best';
const regexEmail = /[a-z]{8}@gosjalobi\.ru/ig;
const regexPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
const regexPass = /[a-z]{6}\S[a-z]{9}\S[a-z]{4}/;

function enableValidation(options) {
    const form = document.querySelector(options.formSelector);
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

// function regValidEmail(input) {
//     const val = regexEmail.test(input.value);
// }

// function regValidPass(input) {
//     const inputPass = regexPass.test(input.value);
//     if(inputPass) {
//         console.log(input.value === password);
//     }

// }

function hasInValidInput(inputList) {    
    return inputList.some(function(input) {
        return input.validity.valid == false;
    })
};


function isValid(form, input, options) {
        // switch (input.type) {
        //     case 'text':
        //         regValidEmail(input);
        //         console.log('1');
        //         break;
        //     case 'password':
        //         console.log('2');
        //         regValidPass(input);
        //         break;
        // }
        // return input.validity.valid;
      //return input.validity.valid == false;
      if (input.validity.valid) {
        hideInputError(form, input, options);
    } else {
        showInputError(form, input, input.validationMessage, options);
    }
};

function showInputError(formElement, input, errorMessage, options) {
    const formError = formElement.querySelector(`#${input.id}-error`);
    input.classList.add(options.inputErrorClass);
    formError.classList.add(options.errorClass);
    formError.textContent = errorMessage;
};

function hideInputError(formElement, input, options) {
    const formError = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(options.inputErrorClass);
    formError.classList.remove(options.errorClass);
    formError.textContent = '';
};

const throwPass = document.querySelector('.login__throw-pass');
const passHelp = document.querySelector('.login__pass-help');

throwPass.addEventListener('click', function() {
    passHelp.classList.toggle('login__pass-help_active')
})

const obj = {
    formSelector: '.login__form',
    inputSelector: '.login__input',
    checkboxSelector: '.login__checkbox',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'login__input_type_error',
    errorClass: 'login__input-error_active'
}
enableValidation(obj);