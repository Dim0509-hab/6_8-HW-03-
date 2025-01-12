const dubll1 = document.querySelector('#duplicateField');

(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        // Дублируем значение текстового поля, запуск кнопкой enter
         dubll1.textContent = this.value;
      }
    });
  })();

  const button = document.querySelector('button');

    button.addEventListener('mousedown', () => [
    // Запись значения в консоль и стираем текстовый блок duplicateField
    console.log(dubll1.textContent), dubll1.textContent = ''
  ])
  
  let input = document.querySelector('input');
    // И стираем значение в input, обратным ходом кнопки. Понимаю что можно было всех в верхней строке.
  button.addEventListener('mouseup', () => [
    input.value = ''
  ])



