import {addMailSection, objHtmlElements, initialSenders, wrapperMailbox, initialLetters} from './newindex.js'

function renderInitialSite() {
  let url = "https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json";
  
  fetch(url)
    .then(respone => respone.json())
    .then(proseArray => {
      wrapperMailbox.mailbox = initialLetters(initialSenders, proseArray);
      addMailSection(objHtmlElements);
    })
    .catch(error => console.log(error));
}

renderInitialSite();

