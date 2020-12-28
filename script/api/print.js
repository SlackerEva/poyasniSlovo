export function printMessage() {
  const printContents = document.querySelector('.message').cloneNode(true);
  const menu =  printContents.querySelector('.menu');
  menu.remove();
  let printtCSS = '<link rel="stylesheet" href="pages/index.css">';
  let WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
  WinPrint.document.write('<div id="print" class="contentpane">');
  WinPrint.document.write(printtCSS);
  WinPrint.document.write(printContents.innerHTML);
  WinPrint.document.write('</div>');
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
}

export function printList() {
  const printContents = document.querySelector('.menu-place').cloneNode(true);
  const menu =  printContents.querySelector('.menu');
  const checkbox =  Array.from(printContents.querySelectorAll('.checkbox'));
  console.log(checkbox);
  checkbox.forEach((item) => item.remove());
  menu.remove();
  let printtCSS = '<link rel="stylesheet" href="pages/index.css">';
  let WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
  WinPrint.document.write('<div id="print" class="contentpane">');
  WinPrint.document.write(printtCSS);
  WinPrint.document.write(printContents.innerHTML);
  WinPrint.document.write('</div>');
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
}

  
  