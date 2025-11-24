'use strict';

$(document).ready(function () {

    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $list = $('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function save() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function render() {
        $list.empty();
        todos.forEach((todo, i) => {
            const item = $(`
                <li class="todo-item ${todo.completed ? 'todo-item--checked' : ''}">
                    <input type="checkbox" class="js--checkbox" data-index="${i}" ${todo.completed ? 'checked' : ''}>
                    <span class="todo-item__description" data-index="${i}">${todo.text}</span>
                    <button class="todo-item__delete btn btn-success" data-index="${i}">Видалити</button>
                </li>
            `);
            $list.append(item);
        });
    }

    // Додати завдання
    $form.on('submit', function (e) {
        e.preventDefault();
        const text = $input.val().trim();
        if (!text) return;

        todos.push({ text, completed: false });
        save();
        render();

        $input.val('');
    });

    // Делегування подій
    $list.on('click', '.todo-item__delete', function () {
        const index = $(this).data('index');
        todos.splice(index, 1);
        save();
        render();
    });

    $list.on('change', '.js--checkbox', function () {
        const index = $(this).data('index');
        todos[index].completed = this.checked;
        save();
        render();
    });

    // Показ модального вікна по кліку на текст
    const modal = new bootstrap.Modal(document.getElementById('todoModal'));

    $list.on('click', '.todo-item__description', function () {
        const index = $(this).data('index');
        $("#modalText").text(todos[index].text);
        modal.show();
    });

    render();
});
