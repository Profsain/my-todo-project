
const todoUl = document.querySelector('.todo-list');

const clearAllCompleted = (todoObjArr) => {
  const filteredTodo = todoObjArr.filter((todo) => todo.isCheck === true);

  filteredTodo.forEach((todo) => {
    todoObjArr.splice(todoObjArr.indexOf(todo), 1);
    todoObjArr.forEach((todoItem, i) => {
      todoItem.index = i + 1;
    });
    localStorage.setItem('todoStore', JSON.stringify(todoObjArr));
    todoUl.removeChild(todoUl.children[todo.index - 1]);
  });
}

export default clearAllCompleted;