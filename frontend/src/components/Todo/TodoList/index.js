import React, { useState, useEffect } from 'react';
import todoService from '../../../services/todoService';
import TodoItem from '../TodoItem';
import './index.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', status: 'pending' });

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await todoService.getTodos();
    setTodos(todos);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    await todoService.createTodo(newTodo);
    setNewTodo({ title: '', description: '', status: 'pending' });
    loadTodos();
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={handleAddTodo}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={newTodo.status}
            onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
            className="form-input"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="form-button">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} reloadTodos={loadTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
