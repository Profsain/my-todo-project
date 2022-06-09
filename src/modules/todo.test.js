
import todoObj from '../index.js';

test('add new todo test', () => {
  const task = {
    id: Date.now(),
    index: 0,
    description: 'JavaScript 101',
    isCheck: false, 
  }
  todoObj.addNewTodo(task);
  const newTask = todoObj.todosArr.find((task) => task.index === 0);
  
  expect(newTask.isCheck).toBeFalsy();
});
