//function Letter(id = 0, name = '', surname = '', email = '', text = '', theme = 'Без темы') {
/*function letterValue(id = 0, name = '', surname = '', email = '', text = '') {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.text = text;
  this.theme = theme;
}

const letterTemplate = document.querySelector(".letter").content;
const letterGrid = document.querySelector(".mail__box");

let mailbox;

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
}];


function getRandInt(min, max) {
  return Math.floor(min - (min - max -1) * Math.random());
}

/*function addLetter(id, sender, text, theme) {
  return new Letter(id, sender.name, sender.surname, sender.email, text, theme)
}

function addLetter(id, sender, text, email) {
    const letterElement = letterTemplate.cloneNode(true);
    const letterGrid = document.querySelector(".grid__letters");
    const letterSub = letterElement.querySelector(".letter__subject");
    letterSub.textContent = "Тема письма";
    letterElement.querySelector(".letter__author").textContent = sender.surname;
    const letter = letterElement.querySelector(".letter");
    letter.addEventListener("click", function() {openMessage(sender, text, id)});
    letterGrid.append(letterElement); 
  //return new letterValue(id, sender.name, sender.surname, sender.email, text)
}*/

function initialLetters(initialSenders, proseArray) {
  return initialSenders.map( (sender, id) => {  let randomIntIndexProse = getRandInt(0, proseArray.length - 1);
                                                return addLetter(id, sender, proseArray[randomIntIndexProse].fields.text, proseArray[randomIntIndexProse].fields.name); });
}

function setLetter(theme, author) {
  const letterElement = letterTemplate.cloneNode(true);
  const letterSub = letterElement.querySelector(".mail__letter-theme");
  letterSub.textContent = theme;
  letterElement.querySelector(".mail__letter-author").textContent = author;
  letterGrid.append(letterElement); 
}

function loadPoems() {
  url = "https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json";
  
  fetch(url)
    .then(respone => respone.json())
    .then(proseArray => {
      mailbox = initialLetters(initialSenders, proseArray);
      console.log(mailbox);
      mailbox.forEach( (letter, index) => {
        if(index < 7) setLetter(letter.theme, letter.name + letter.surname);
      });
    })
    .catch(error => console.log(error));
}

loadPoems();