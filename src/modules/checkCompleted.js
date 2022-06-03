// check todo completed and updated ui on reload

const checkCompletedTodo = (todoObjArr) => {
  todoObjArr.forEach((todo) => {
    if (todo.isCheck === true) {
      const liText = document.getElementById(todo.id).nextElementSibling;
      liText.classList.add('completed');
    }
  });
};

export default checkCompletedTodo;