export function getSearchListDefineWords(selectWord) {
  console.log('Функция поиска заголовков');
  let url = 'https://ru.wiktionary.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=' + selectWord;
  return new Promise((resolve) => fetch(url)
                                            .then(response => response.json())
                                            .then(define => resolve(define.query.search)));       
}

export function getDefineWikiSite(title) {
  console.log('Функция текст страницы толкования слова');
  let url = 'https://ru.wiktionary.org/w/api.php?action=query&prop=revisions&rvprop=content&origin=*&format=json&titles=' + title;
  return new Promise((resolve) => fetch(url)
                  .then(response => response.json())
                  .then(define => resolve(Object.values(define.query.pages)[0].revisions[0]['*']))
                  .catch(error => console.log(error)));
}

export function getDefine(str) {
  let indexstart = str.indexOf('==== Значение ====');
  let indexend = str.indexOf('====', indexstart + '==== Значение ===='.length + 1);
  let indexFirstDefine = str.indexOf('#', indexstart);
  if(indexFirstDefine > indexend) return [];
  return str.slice(indexFirstDefine, indexend).match(/#.+/g).map( (item) => {return item.replace(/{{выдел\|.+?}}/g, '').replace(/{{пример\|.+}}/g, '').replace(/{{.+}}/g, '').replace(/#\s+/, '').replace(/\[\[|\]\]/g, '').replace(/\s+$/, '');});
}