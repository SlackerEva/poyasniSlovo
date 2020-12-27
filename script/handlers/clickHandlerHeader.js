export function clickHandlerAvatar(objHtmlElements){
    const { dropdown, dropdownActive  } = objHtmlElements;
    const dropDown = document.querySelector(dropdown);
    dropDown.classList.toggle(dropdownActive);
}
    