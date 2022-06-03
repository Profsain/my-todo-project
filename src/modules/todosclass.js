import renderTodoList from './rendertodolist.js';

const input = document.querySelector('#new-todo');
const showMessage = document.querySelector('.feedback');
class Todos {
  // array to hold todos list
  todosArr = [];

  // check if todos present in localstorage
  check() {
    if (localStorage.getItem('todoStore')) {
      this.todosArr = JSON.parse(localStorage.getItem('todoStore'));
    }
  }

  // set notification to empty string
  setEmpty() {
    this.showMessage.innerText = '';
  }

  // Add new todo
  addNewTodo() {
    const newTodos = {
      id: Date.now(),
      index: this.todosArr.length + 1,
      description: input.value,
      isCheck: false,
    };
    this.check();
    if (this.todosArr.some((todoItem) => todoItem.description === newTodos.description)) {
      showMessage.innerText = 'Task already exist';
      setTimeout(this.setEmpty, 3000);
    } else {
      showMessage.innerText = 'Task added Successfully';
      setTimeout(this.setEmpty, 3000);
      this.todosArr.push(newTodos);
      localStorage.setItem('todoStore', JSON.stringify(this.todosArr));
      renderTodoList(newTodos);
    }
  }

  // delete todos item
  deleteTodoItem(deleteButton) {
    const removedTodo = deleteButton.parentElement;
    const removedTodoItem = this.todosArr.filter((todo) => todo.id === Number(deleteButton.id));
    // update todo index
    this.todosArr.splice(this.todosArr.indexOf(removedTodoItem[0]), 1);
    this.todosArr.forEach((todoItem, i) => {
      todoItem.index = i + 1;
    });
    localStorage.setItem('todoStore', JSON.stringify(this.todosArr));
    // remove todo from node
    removedTodo.remove();
  }

  // edit todos item
  editTodoItem(todoLi) {
    todoLi.setAttribute('contenteditable', true);

    const editedTodoLi = this.todosArr.filter((todo) => todo.id === Number(todoLi.id));
    todoLi.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const editedText = todoLi.innerHTML;
        editedTodoLi[0].description = editedText;
        todoLi.blur();
        // update todo array
        this.todosArr.splice(this.todosArr.indexOf(editedTodoLi[0]), editedTodoLi);
        localStorage.setItem('todoStore', JSON.stringify(this.todosArr));
      }
    });
  }
}

export default Todos;