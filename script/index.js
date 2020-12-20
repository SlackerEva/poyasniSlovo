const content = document.querySelector(".content");
const incomingMessage = document.querySelector(".sidebar__link-incoming");
const dictionary = document.querySelector(".sidebar__link-dictionary");

let mailbox;


function Letter(id = '', name = '', surname = '', email = '', text = '', theme = 'Без темы') {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.text = text;
  this.theme = theme;
}

const initialSenders = [{
  name: 'Левин',
  surname: 'Маркович',
  email: 'aojv@mail.ru',
},{
  name: 'Ольга',
  surname: 'Григорьева',
  email: 'kggfpxw@yandex.ru',
},{
  name: 'Надежда',
  surname: 'Смирнова',
  email: 'oxxv@yandex.ru',
},{
  name: 'Давид',
  surname: 'Андрианов',
  email: 'f9jxjd14@gmail.com',
},{
  name: 'Ярослава',
  surname: 'Астафьева',
  email: 'p24a@mail.ru',
},{
  name: 'Ярослав',
  surname: 'Маслов',
  email: 'ahbg@yandex.ru',
},{
  name: 'Анастасия',
  surname: 'Панова',
  email: 'xl9bc5@gmail.com',
},{
  name: 'Михаил',
  surname: 'Беляков',
  email: 'n4zc9kz@yandex.ru',
},{
  name: 'Максим',
  surname: 'Казанцев',
  email: 'copaa6@gmail.com',
},{
  name: 'Арина',
  surname: 'Громова',
  email: 'myrfqpb@mail.ru',
}];

function getRandInt(min, max) {
  return Math.floor(min - (min - max -1) * Math.random());
}

function addLetter(id, sender, text, theme) {
  return new Letter(id, sender.name, sender.surname, sender.email, text, theme)
}

function initialLetters(initialSenders, proseArray) {
  return initialSenders.map( (sender, id) => {  let randomIntIndexProse = getRandInt(0, proseArray.length - 1);
                                                return addLetter(id + 'letter', sender, proseArray[randomIntIndexProse].fields.text, proseArray[randomIntIndexProse].fields.name); });
}

function setLetter(theme, author) {
  const letterTemplate = document.querySelector(".template-letter-list").content;
  const letterGrid = document.querySelector(".mail__box");
  const letterElement = letterTemplate.cloneNode(true);
  const letterSub = letterElement.querySelector(".mail__letter-theme");

  letterSub.textContent = theme;
  letterElement.querySelector(".mail__letter-author").textContent = author;
  letterGrid.append(letterElement);
}

function setIdLetters() {
  const letters = content.querySelectorAll('.mail__letter');
  letters.forEach((element, index) => element.id = mailbox[index].id);
}

function getLetters() {
  mailbox.forEach( (letter, index) => {
    if(index < 7) 
    {setLetter(letter.theme, letter.name + letter.surname);}
  });
}

function renderInitialSite() {
  url = "https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json";
  
  fetch(url)
    .then(respone => respone.json())
    .then(proseArray => {
      mailbox = initialLetters(initialSenders, proseArray);
      getLetters();
      setIdLetters();
      SetEventListenerMailbox();
    })
    .catch(error => console.log(error));
}

function clearContent() {
  content.firstElementChild.remove(); 
}

function addMailSection() {
  const mailTemplate = document.querySelector('.template-mail').content; 
  const mailElement = mailTemplate.cloneNode(true);
  content.prepend(mailElement);
  getLetters();
  setIdLetters();
  SetEventListenerMailbox();
}
//const incoming = document.querySelector("#incoming").content;
//const dictionary = document.querySelector("#dictionary").content;
//const message = document.querySelector("#message").content;
//const contentItems = document.querySelector(".content__items");

//const incomingExists= () => {return contentItems.querySelector(".incoming")};
//const dictionaryExists= () => {return contentItems.querySelector(".dictionary")};
//const messageExists= () => {return contentItems.querySelector(".message")};


/*function openIncoming() {
  const incomingClone = incoming.cloneNode(true);
  if (incomingExists() == null) {
    contentItems.append(incomingClone);
    loadPoems();
  } 
  if (dictionaryExists() != null) {
    dictionaryExists().remove();
  }
  if (messageExists() != null) {
    messageExists().remove();
  }
}

function openDictionary() {
  const dictionaryClone = dictionary.cloneNode(true);
  if (dictionaryExists() == null) {
    contentItems.append(dictionaryClone);    
    addWords();
  } 
  if (incomingExists() != null) {
    incomingExists().remove();
  }
  if (messageExists() != null) {
    messageExists().remove();
  }
}

function openMessage(sender, text, id) {
  const messageClone = message.cloneNode(true);
  if (messageExists() == null) {
    messageClone.querySelector(".message__title").textContent = `Обращение № ${id}`;
    messageClone.querySelector(".message__author").textContent = sender.name + " " + sender.surname;
   // messageClone.querySelector(".message__email").textContent = email;
    messageClone.querySelector(".message__text").textContent = text;
    contentItems.append(messageClone);  
  } 
  if (incomingExists() != null) {
    incomingExists().remove();
  }
  if (dictionaryExists() != null) {
    dictionaryExists().remove();
  }
}
*/

const popup = document.querySelector(".popup");
let popupTitle = popup.querySelector(".card-define__word");
const closeButton = document.querySelector(".popup__close");

function openPopup(evt) {
  popup.classList.add("popup_opened");
  renderWordCard(evt);
}

function closePopup(evt) {
  popup.classList.remove("popup_opened");
}

function renderWordCard(evt) {
  const changeTitle = evt.target.textContent;
  popupTitle.textContent = changeTitle;
}


const handlerClickLeterMailbox = (evt) => {
  openLetter(evt.target.closest('.mail__letter').id);
}

function SetEventListenerMailbox() {
  const mailBox = content.querySelector('.mail__box');
  mailBox.addEventListener('click', handlerClickLeterMailbox)
}

renderInitialSite();

incomingMessage.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearContent();
  evt.target.classList.add("sidebar__link_active");
  addMailSection();
})

dictionary.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearContent();
  evt.target.classList.add("sidebar__link_active");
  addWords();
})

function openLetter(id) {
  clearContent();
  addLetterSection(id);
}

function addLetterSection(id) {
  const letterTemplate = document.querySelector('.template-letter-open').content; 
  const letterElement = letterTemplate.cloneNode(true);
  const letter = mailbox.filter((element) =>  {return element.id === id});// Почему ИД выглядят так id: "3letter"?????
  const title = letterElement.querySelector('.letter__name');
  const author = letterElement.querySelector('.letter__author');
  const email = letterElement.querySelector('.letter__email');
  const text = letterElement.querySelector('.letter__text');
  const wordDefine = letterElement.querySelector('.card-define__word');
  const descr = letterElement.querySelector('.card-define__meaning');
  const popup = letterElement.querySelector('.card-define');
  const closes = letterElement.querySelector('.card-define__btn-close');
  
  author.textContent = letter[0].name + " " + letter[0].surname;
  title.textContent = "Обращение №" + " " + letter[0].id.slice(0, 1);
  email.textContent = letter[0].email;
  text.textContent = letter[0].text;

  text.addEventListener('pointerdown', (evt) => {
    console.log("Pointerdown");
    let tempBool = true;
    document.addEventListener('selectionchange', (evt1) => {
      text.addEventListener('pointerup', (evt2) => {
        if(!document.getSelection().isCollapsed && tempBool) {
          tempBool = false;
          console.log("Pointerup")
          selectWord = document.getSelection().toString().toLowerCase();
  
          getSearchListDefineWords(selectWord)
                                        .then(searchList => getDefineWikiSite(searchList[0].title))
                                        .then(text => getDefine(text))
                                        .then(define => {
                                                          wordDefine.textContent = selectWord;
                                                          define = define.filter((value => value.length > 1))
                                                          descr.textContent = define[0] ? define[0] : 'Ops!';
                                                          popup.classList.add('card-define_visible');

                                                          closes.addEventListener('click', () => {
                                                            word = '';
                                                            wordDefine.textContent = '';
                                                            popup.classList.remove('card-define_visible');
                                                          });
                                                        });
                                                    
          
      }
      })
    })
  });

  content.prepend(letterElement);
}

function getDefine(str) {
  let indexstart = str.indexOf('==== Значение ====');
  let indexend = str.indexOf('====', indexstart + '==== Значение ===='.length + 1);
  let indexFirstDefine = str.indexOf('#', indexstart);
  if(indexFirstDefine > indexend) return [];
  return str.slice(indexFirstDefine, indexend).match(/#.+/g).map( (item) => {return item.replace(/{{выдел\|.+?}}/g, '').replace(/{{пример\|.+}}/g, '').replace(/{{.+}}/g, '').replace(/#\s+/, '').replace(/\[\[|\]\]/g, '').replace(/\s+$/, '');});
}

function getSearchListDefineWords(selectWord) {
  console.log('Функция поиска заголовков');
  let url = 'https://ru.wiktionary.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=' + selectWord;
  return new Promise((resolve) => fetch(url)
                                            .then(response => response.json())
                                            .then(define => resolve(define.query.search)));       
}

function getDefineWikiSite(title) {
  console.log('Функция текст страницы толкования слова');
  url = 'https://ru.wiktionary.org/w/api.php?action=query&prop=revisions&rvprop=content&origin=*&format=json&titles=' + title;
  return new Promise((resolve) => fetch(url)
                  .then(response => response.json())
                  .then(define => resolve(Object.values(define.query.pages)[0].revisions[0]['*']))
                  .catch(error => console.log(error)));
}

//Уголок имитации заполнения словаря.

const words = ["Яблоко", "Апельсин", "Банан", "Гранат", "Киви", "Мандарин", "Слива"];
const wordTemplate = document.querySelector("#word").content;


function addWords() {
  const mailTemplate = document.querySelector('.template-mail').content; 
  const template = mailTemplate.cloneNode(true);
  const grid = document.querySelector(".content");
  grid.append(template);

  let i = 0;
  while (i < 7) {
    const wordElement = wordTemplate.cloneNode(true);
    const wordsGrid = document.querySelector(".mail__box");
    const wordTitle = wordElement.querySelector(".word__title");
    wordTitle.textContent = words[i];
    const word = wordElement.querySelector(".mail__letter");//word!!
    word.addEventListener("click", function(evt) {openPopup(evt)});
    wordsGrid.append(wordElement);
    i++;
  }
}
