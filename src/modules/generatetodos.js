const generateTodoList = (todo) => {
  const todoUl = document.querySelector('.todo-list');
  const liItems = document.createElement('li');
  liItems.innerHTML = `
    <input id="${todo.id}" type="checkbox">
    <span>${todo.description}</span>
    <button class=".delete-todo" type="button">Delete</button>
  `;

  todoUl.append(liItems);
};

export default generateTodoList;