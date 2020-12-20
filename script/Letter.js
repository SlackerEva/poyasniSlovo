/*function letterValue(id = 0, name = '', surname = '', email = '', text = '') {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.text = text;
}*/
const letterTemplate = document.querySelector("#letter").content;
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
}

function initialLetters(initialSenders, proseArray) {
  return initialSenders.map( (sender, id) => {  let randomIntIndexProse = getRandInt(0, proseArray.length - 1);
                                                return addLetter(id, sender, proseArray[randomIntIndexProse].fields.text); });
}

function loadPoems() {
  url = "https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json";
  
  fetch(url)
    .then(respone => respone.json())
    .then(proseArray => {
      mailbox = initialLetters(initialSenders, proseArray);
//      console.log(mailbox);
    })
    .catch(error => console.log(error));
}


//Уголок имитации заполнения словаря.

const words = ["Яблоко", "Апельсин", "Банан", "Гранат", "Киви", "Мандарин", "Слива"];
const wordTemplate = document.querySelector("#word").content;


function addWords() {
  let i = 0;
  while (i < 7) {
    const wordElement = wordTemplate.cloneNode(true);
    const wordsGrid = document.querySelector(".grid__words");
    const wordTitle = wordElement.querySelector(".word__title");
    wordTitle.textContent = words[i];
    const word = wordElement.querySelector(".word");
    word.addEventListener("click", function(evt) {openPopup(evt)});
    wordsGrid.append(wordElement);
    i++;
  }
}