document.getElementById('changeText').addEventListener('click', function () {
  document.getElementById('text').textContent = 'Текст змінено';
});

const hoverArea = document.getElementById('hoverArea');
hoverArea.addEventListener('mouseover', function () {
  hoverArea.classList.add('highlight');
});
hoverArea.addEventListener('mouseout', function () {
  hoverArea.classList.remove('highlight');
});

document.getElementById('addElement').addEventListener('click', function () {
  const p = document.createElement('p');
  p.textContent = 'Новий динамічний елемент';
  document.getElementById('dynamic-container').appendChild(p);
});

document.getElementById('removeElement').addEventListener('click', function () {
  const container = document.getElementById('dynamic-container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});

let counter = 0;
document.getElementById('clickCounter').addEventListener('click', function () {
  counter++;
  if (counter === 6) {
    alert('Максим Кобрин, варіант номер 6');
    counter = 0;
  }
});