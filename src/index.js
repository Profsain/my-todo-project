import _ from 'lodash';
import './style.css';
import todoList from './modules/tododatabase.js';
import generateTodoList from './modules/generatetodos.js';

// default todo object
todoList.forEach((todo) => {
  generateTodoList(todo);
});