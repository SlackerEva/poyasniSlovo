import { renderMenu, renderPopup, getSearchListDefineWords, getDefineWikiSite, getDefine, renderPopupAnswer, arrayTarget, renderPopupHint } from '../index.js'
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

  const menuElement = renderMenu(objHtmlElements, objHtmlElements.templaitMessage, letter.id);

  const popupElement = renderPopup(objHtmlElements);
  const popup = popupElement.firstElementChild;
  const popupTitle = popup.querySelector(objHtmlElements.popupTitle);
  const popupMeaning = popup.querySelector(objHtmlElements.popupMeaning);
  const PopupAnswerElement = renderPopupAnswer(objHtmlElements, arrayTarget, letter.id);
  const renderPopupHintElement = renderPopupHint(objHtmlElements);

  messageElement.firstElementChild.append(popupElement);
  messageElement.firstElementChild.append(PopupAnswerElement);
  messageElement.firstElementChild.append(renderPopupHintElement);


  messageInfo.after(menuElement);

  if ("answer" in letter) {
    const templateAnswer = document.querySelector(objHtmlElements.templateAnswer).content;
    const answerElement = templateAnswer.cloneNode(true);
    const answer = answerElement.firstElementChild;
    answer.textContent = letter.answer;

    answer.addEventListener('pointerdown', (evt) => {
      let tempBool = true;
      document.addEventListener('selectionchange', (evt1) => {
        answer.addEventListener('pointerup', (evt2) => {
          if (!document.getSelection().isCollapsed && tempBool) {
            tempBool = false;
            let selectWord = document.getSelection().toString().toLowerCase();
            let word;
            getSearchListDefineWords(selectWord)
              .then(searchList => {
                word = searchList[0].title;
                return getDefineWikiSite(word);
              })
              .then(text => getDefine(text))
              .then(define => {
                let selection = document.getSelection();
                let selection_text = selection.toString();
                let span = document.createElement('SPAN');
                span.classList.add(objHtmlElements.select);
                span.textContent = selection_text;
                let range = selection.getRangeAt(0);
                range.deleteContents();
                range.insertNode(span);

                popupTitle.textContent = word;
                popupMeaning.textContent = define ? define : 'Ops!';
                popup.classList.add('popup_opened');
              });
          }
        })
      })
    });

    messageElement.firstElementChild.append(answerElement);
  }

  messageText.addEventListener('pointerdown', (evt) => {
    let tempBool = true;
    document.addEventListener('selectionchange', (evt1) => {
      messageText.addEventListener('pointerup', (evt2) => {
        if (!document.getSelection().isCollapsed && tempBool) {
          tempBool = false;
          let selectWord = document.getSelection().toString().toLowerCase();
          let word;
          getSearchListDefineWords(selectWord)
            .then(searchList => {
              word = searchList[0].title;
              return getDefineWikiSite(word);
            })
            .then(text => getDefine(text))
            .then(define => {
              let selection = document.getSelection();
              let selection_text = selection.toString();
              let span = document.createElement('SPAN');
              span.classList.add(objHtmlElements.select);
              span.textContent = selection_text;
              let range = selection.getRangeAt(0);
              range.deleteContents();
              range.insertNode(span);
              
              popupTitle.textContent = word;
              popupMeaning.textContent = define ? define : 'Ops!';
              popup.classList.add('popup_opened');
            });
        }
      })
    })
  });

  return messageElement;
}