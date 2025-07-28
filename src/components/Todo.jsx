import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([
    'Read a book',
    'Attend class',
    'eat Amala',
  ]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div className="container-todo">
      <h2>Todo List</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        className="input-style"
        placeholder="add a todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo} type="submit">
        Add
      </button>
    </div>
  );
};

export default Todo;
