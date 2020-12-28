export let poems; 

export function loadPoems() {
  let url = "https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json";

  return new Promise(resolve => {
    fetch(url)
    .then(respone => respone.json())
    .then(proseArray => {
      poems = proseArray;
      resolve(poems);
    })
    .catch(error => console.log(error));
  });
}