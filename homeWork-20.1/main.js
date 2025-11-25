'use strict';

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function render() {
    const list = $('.js--todos-wrapper');
    list.empty();

    todos.forEach((todo, index) => {
        const item = $(`
            <li class="todo-item ${todo.completed ? "todo-item--checked" : ""}">
                <input type="checkbox" class="js--check" data-id="${index}" ${todo.completed ? "checked" : ""}>
                <span class="todo-item__description js--open-modal" data-id="${index}">${todo.text}</span>
                <button class="todo-item__delete" data-id="${index}">Закрити</button>
            </li>
        `);
        list.append(item);
    });
}

$(document).ready(function () {

    render();

    // ДОДАТИ ЗАВДАННЯ
    $('.js--form').on('submit', function (e) {
        e.preventDefault();
        const text = $('.js--form__input').val().trim();
        if (!text) return;

        todos.push({ text, completed: false });
        save();
        render();
        $('.js--form__input').val('');
    });

    // Клік по кнопці "Видалити"
    $(document).on('click', '.todo-item__delete', function () {
        const id = $(this).data('id');
        todos.splice(id, 1);
        save();
        render();
    });

    // Зміна checkbox
    $(document).on('change', '.js--check', function () {
        const id = $(this).data('id');
        todos[id].completed = this.checked;
        save();
        render();
    });

    // Клік по тексту — показ модального вікна
    $(document).on('click', '.js--open-modal', function () {
        const id = $(this).data('id');
        $('.js--modal-body').text(todos[id].text);

        const modal = new bootstrap.Modal(document.getElementById('todoModal'));
        modal.show();
    });

});
