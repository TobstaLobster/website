const button = document.querySelector('button');

button.addEventListener('click', () => {
  const body = document.querySelector('body');
  const color = prompt('Choose a color for the background');
  body.style.backgroundColor = color;
});

const title = document.querySelector('.title');

title.addEventListener('mouseover', () => {
  title.textContent = 'TobstaLobster';
});

title.addEventListener('mouseout', () => {
  title.textContent = 'My Website';
});
