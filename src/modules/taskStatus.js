// save todo
import todos from './storage.js';

export default function saveTodo() {
  const todoInput = document.querySelector('#newTodo');
  const todoValue = todoInput.value;

  // check if todo id empty
  const isEmpty = todoValue === '';
  // check if duplicate
  const isDuplicate = todos.some(
    (todo) => todo.value.toUpperCase() === todoValue.toUpperCase(),
  );

  if (isEmpty) {
    alert('input a todo');
  } else if (isDuplicate) {
    alert('Todo Already Exist');
  } else {
    const todo = {
      value: todoValue,
      checked: false,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
    todos.push(todo);
    todoInput.value = '';
  }
}
