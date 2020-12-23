import { renderMenu, renderPopup, getSearchListDefineWords, getDefineWikiSite, getDefine } from '../index.js'
// Сделать рефакторинг
export function renderMessage(objHtmlElements, letter) {
  const messageTemplate = document.querySelector(objHtmlElements.templaitMessage).content;
  const messageElement = messageTemplate.cloneNode(true);

  const messageTitle = messageElement.querySelector(objHtmlElements.messageTitle);
  const messageName = messageElement.querySelector(objHtmlElements.messageName);
  const messageEmail = messageElement.querySelector(objHtmlElements.messageEmail);
  const messageText = messageElement.querySelector(objHtmlElements.messageText);
  const messageInfo = messageElement.querySelector(objHtmlElements.messageInfo);

  messageTitle.textContent = "Обращение №00" + letter.id;
  messageName.textContent = letter.name + " " + letter.surname;
  messageEmail.textContent = letter.email;
  messageText.textContent = letter.text;

  const menuElement = renderMenu(objHtmlElements, objHtmlElements.templaitMessage);

  const popupElement = renderPopup(objHtmlElements);
  const popup = popupElement.firstElementChild;
  const popupTitle = popup.querySelector(objHtmlElements.popupTitle);
  const popupMeaning = popup.querySelector(objHtmlElements.popupMeaning);

  messageElement.firstElementChild.append(popupElement);
  messageInfo.after(menuElement);

  messageText.addEventListener('pointerdown', (evt) => {
    console.log("Pointerdown");
    let tempBool = true;
    document.addEventListener('selectionchange', (evt1) => {
      messageText.addEventListener('pointerup', (evt2) => {
        if (!document.getSelection().isCollapsed && tempBool) {
          tempBool = false;
          console.log("Pointerup")
          let selectWord = document.getSelection().toString().toLowerCase();
          let word;
          getSearchListDefineWords(selectWord)
            .then(searchList => {
              word = searchList[0].title;
              return getDefineWikiSite(word);
            })
            .then(text => getDefine(text))
            .then(define => {
              popupTitle.textContent = word;
              define = define.filter((value => value.length > 1))
              popupMeaning.textContent = define[0] ? define[0] : 'Ops!';
              popup.classList.add('popup_opened');
            });
        }
      })
    })
  });

  return messageElement;
}