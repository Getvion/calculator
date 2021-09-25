const body = document.querySelector('body');
const lightTheme = document.querySelector('.theme__light');
const darkTheme = document.querySelector('.theme__dark');
const sun = document.querySelector('.svg__sun');
const moon = document.querySelector('.svg__moon');

// изменение цветовых тем
moon.classList.add('active');

lightTheme.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');

    sun.classList.add('active');
    moon.classList.remove('active');
  }
});

darkTheme.addEventListener('click', () => {
  if (!body.classList.contains('dark')) {
    body.classList.add('dark');

    moon.classList.add('active');
    sun.classList.remove('active');
  }
});

// функции счета
function insert(num) {
  document.form.textview.value += num;
}

function clean() {
  document.form.textview.value = '';
}

function removeOneSimbol() {
  const exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
  const exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}