const body = document.querySelector('body');
const lightTheme = document.querySelector('.theme__light');
const darkTheme = document.querySelector('.theme__dark');
const keys = document.querySelectorAll('.keys');
const resultField = document.querySelector('.result__field');
const inputField = document.querySelector('.input__field');

lightTheme.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
  }
});

darkTheme.addEventListener('click', () => {
  if (!body.classList.contains('dark')) {
    body.classList.add('dark');
  }
});
