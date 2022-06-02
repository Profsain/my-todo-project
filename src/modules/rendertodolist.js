const todoUl = document.querySelector('.todo-list');
const renderTodoList = ({id, description, ischeck}) => {
  const liItems = document.createElement('li');
  liItems.innerHTML = `
    <input id="${id}" type="checkbox">
    <span class="editTodo" id="${id}">${description}</span>
    <button class="delete-todo" id="${id}" type="button">Delete</button>
  `;

  todoUl.append(liItems);
};

export default renderTodoList;