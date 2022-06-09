import _ from 'lodash';
import './style.css';
import Todos from './modules/todosclass.js';
import renderTodoList from './modules/rendertodolist.js';
import todoCompleted from './modules/todocompleted.js';
import clearAllCompleted from './modules/clearallcompleted.js';
import checkCompletedTodo from './modules/checkCompleted.js';

const form = document.querySelector('.form');
const input = document.querySelector('#new-todo');
const todoUl = document.querySelector('.todo-list');
const clearAll = document.querySelector('.clear-all');

// create new todo object from todos class
const todoObj = new Todos();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    todoObj.addNewTodo();
    input.value = '';
    input.focus();
  }
});

// remove todo items
// edit todo items
// mark todo as completed
todoUl.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-todo')) {
    const deleteButton = event.target;
    todoObj.deleteTodoItem(deleteButton);
  } else if (event.target.classList.contains('editTodo')) {
    const todoLi = event.target;
    todoObj.editTodoItem(todoLi);
  } else if (event.target.classList.contains('todoCheck')) {
    const todoCheckBox = event.target;
    todoCompleted(todoCheckBox, todoObj.todosArr);
  }
});

clearAll.addEventListener('click', () => {
  clearAllCompleted(todoObj.todosArr);
});

// render todos page onload
todoObj.check();
todoObj.todosArr.forEach(renderTodoList);

window.onload = () => {
  checkCompletedTodo(todoObj.todosArr);
};


export default todoObj;
