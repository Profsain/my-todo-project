const todoCompleted = (todoCheckBox, todoObjArr) => {
  const todoId = Number(todoCheckBox.id);
  const todoCompletedChecked = todoObjArr.filter((todo) => todo.id === todoId);
  const liText = document.getElementById(todoId).nextElementSibling;

  if(todoCompletedChecked[0].isCheck === false) {
    liText.classList.add('completed');
    todoCompletedChecked[0].isCheck = true;
    todoObjArr.splice(todoObjArr.indexOf(todoCompletedChecked[0]), todoCompletedChecked);
    localStorage.setItem('todoStore', JSON.stringify(todoObjArr));
  } else{
    liText.classList.remove('completed');
    todoCompletedChecked[0].isCheck = false;
    todoObjArr.splice(todoObjArr.indexOf(todoCompletedChecked[0]), todoCompletedChecked);
    localStorage.setItem('todoStore', JSON.stringify(todoObjArr));
  }
}

export default todoCompleted;