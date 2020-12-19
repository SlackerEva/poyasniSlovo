/*function Letter(id = 0, name = '', surname = '', email = '', text = '') {
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
}/*,{
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
}*/];

function getRandInt(min, max) {
  return Math.floor(min - (min - max -1) * Math.random());
}

function addLetter(id, sender, text) {
    const letterElement = letterTemplate.cloneNode(true);
    const letterGrid = document.querySelector(".grid__letters");
    const letterSub = letterElement.querySelector(".letter__subject");
    letterSub.textContent = "Тема письма";
    letterElement.querySelector(".letter__author").textContent = sender.surname;
    letterGrid.append(letterElement); 
  //return new Letter(id, sender.name, sender.surname, sender.email, text)
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
      console.log(mailbox);
    })
    .catch(error => console.log(error));
}