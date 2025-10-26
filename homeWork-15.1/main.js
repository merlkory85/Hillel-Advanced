'use strict'

const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const list = document.querySelector('.js--todos-wrapper');

// Завантаження завдань із localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Функція для збереження в localStorage
function saveToLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Рендер списку завдань
function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (todo.completed) li.classList.add('todo-item--checked');

    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''} data-index="${index}" class="js--checkbox">
      <span class="todo-item__description">${todo.text}</span>
      <button class="todo-item__delete" data-index="${index}">Видалити</button>
    `;
    list.appendChild(li);
  });
}

// Додавання нового завдання
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;

  todos.push({ text, completed: false });
  input.value = '';
  saveToLocalStorage();
  renderTodos();
});

// Обробка кліків по списку (делегування подій)
list.addEventListener('click', (e) => {
  const index = e.target.dataset.index;

  // Видалення завдання
  if (e.target.classList.contains('todo-item__delete')) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  }

  // Відмітити виконання
  if (e.target.classList.contains('js--checkbox')) {
    todos[index].completed = e.target.checked;
    saveToLocalStorage();
    renderTodos();
  }
});

// Початковий рендер після завантаження сторінки
renderTodos();
