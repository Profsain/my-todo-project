import _ from 'lodash';
import './style.css';
import Todos from './modules/todosclass.js';
import renderTodoList from './modules/rendertodolist.js';

const form = document.querySelector('.form');
const input = document.querySelector('#new-todo');
const todoUl = document.querySelector('.todo-list');

// create new todo object from todos class
const todoObj = new Todos();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(input.value !== '') {
    todoObj.addNewTodo();
    input.value = '';
    input.focus();
  }
});

//remove todo items
todoUl.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-todo')) {
    const deleteButton = event.target;
    todoObj.deleteTodoItem(deleteButton);
  } else if(event.target.classList.contains('editTodo')) {
    const todoLi = event.target;
    todoObj.editTodoItem(todoLi);
  }
});
// render todos page onload
todoObj.check();
todoObj.todosArr.forEach(renderTodoList);
