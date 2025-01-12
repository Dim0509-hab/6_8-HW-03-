const consolelog = document.querySelector('#consoleLog');
 
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
   
})


const alerr1 = document.querySelector('#alert');
 
alerr1.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK или Закрыть');
   
})

const prompt = document.querySelector('#prompt');
 
prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста.');
   
})
