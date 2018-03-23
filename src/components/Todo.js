import React from 'react';
import TodosModel from '../models/Todos';

const TodoComponent = ({todo, deleteTodo, toggleTodo}) => {
  const { id, isComplete } = todo
  return (
    <div>
      <input type="checkbox" checked={isComplete} onChange={() => toggleTodo(id)}/>
      <label>{todo.content}</label>
      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
};

export default TodoComponent;