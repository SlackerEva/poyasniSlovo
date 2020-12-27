import { renderAuthorizationpage, renderErrorPage } from '../index.js';

export function clickHandlerAvatar(objHtmlElements){
    const { dropdown, dropdownActive } = objHtmlElements;
    const dropDown = document.querySelector(dropdown);
    if(!dropDown.classList.contains('dropdown_main-menu')){
        showMainMenu();
    } 
    else {
        closeDropDownMainMenu();
    }

    dropDown.addEventListener('click', function(evt){
        let target = evt.target;
        if(target.classList.contains('dropdown__link-exit')) {
            localStorage.removeItem('test', 1);
            renderAuthorizationpage(objHtmlElements);
        } else if(target.classList.contains('dropdown__link-setting')) {
            renderErrorPage(objHtmlElements)
        } else if(target.classList.contains('dropdown__link-document')) {
            renderErrorPage(objHtmlElements)
        }
    })

    function closeDropDownMainMenu() {
        dropDown.firstElementChild.remove();
        dropDown.classList.toggle(dropdownActive);
        dropDown.classList.toggle('dropdown_main-menu');
    }

    function showMainMenu() {
        const templateDropdownMainMenu = document.querySelector('#dropdown-main-menu').content;
        const dropdownElementMainMenu = templateDropdownMainMenu.cloneNode(true);
        dropDown.classList.toggle(dropdownActive);
        dropDown.classList.toggle('dropdown_main-menu');
        dropDown.prepend(dropdownElementMainMenu);
    }
}
