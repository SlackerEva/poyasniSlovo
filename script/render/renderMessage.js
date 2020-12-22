export function renderMessage(objHtmlElements, letter) {
  const messageTemplate = document.querySelector(objHtmlElements.templaitMessage).content;
  const messageElement = messageTemplate.cloneNode(true);
  const messageTitle = messageElement.querySelector(objHtmlElements.messageTitle);
  const messageName = messageElement.querySelector(objHtmlElements.messageName);
  const messageEmail = messageElement.querySelector(objHtmlElements.messageEmail);
  const messageText = messageElement.querySelector(objHtmlElements.messageText);

  messageTitle.textContent = "Обращение №00" + letter.id;
  messageName.textContent = letter.name + " " + letter.surname;
  messageEmail.textContent = letter.email;
  messageText.textContent = letter.text;

  return messageElement;
}