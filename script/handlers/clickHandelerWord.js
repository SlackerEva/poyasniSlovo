export function clickHandelerWord(evt, word, objHtmlElements) {
  if (!evt.target.classList.contains(objHtmlElements.checkbox)) {
    evt.preventDefault();
    const popup = document.querySelector(objHtmlElements.popup);
    const popupTitle = popup.querySelector(objHtmlElements.popupTitle);
    const popupMeaning = popup.querySelector(objHtmlElements.popupMeaning);

    popupTitle.textContent = word.name;
    popupMeaning.textContent =  word.value;
    popup.classList.add('popup_opened');
  }
}