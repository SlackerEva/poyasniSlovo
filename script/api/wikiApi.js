export function getSearchListDefineWords(selectWord) {
  console.log('Функция поиска заголовков');
  let url = 'https://ru.wiktionary.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=' + selectWord;
  return new Promise((resolve) => fetch(url)
                                            .then(response => response.json())
                                            .then(define => resolve(define.query.search)));       
}

export function getDefineWikiSite(title) {
  console.log('Функция текст страницы толкования слова');
  let url = 'https://ru.wiktionary.org/w/api.php?action=query&prop=extracts&origin=*&format=json&titles=' + title;
  return new Promise((resolve) => fetch(url)
                  .then(response => response.json())
                  .then(define => resolve(Object.values(define.query.pages)[0].extract))
                  .catch(error => console.log(error)));
}

export function getDefine(str) {
  let indexstart = str.indexOf('<span id="Семантические_свойства">Семантические свойства</span></h3>');
  let indexStartdefine = str.indexOf('<ol><li>', indexstart);
  let indexEndDefine = str.indexOf('</li>', indexStartdefine);
  let regExp = /(<.+?>)|([\u25C6]\s.+)/g
  return str.slice(indexStartdefine, indexEndDefine).replace(regExp, '');
}