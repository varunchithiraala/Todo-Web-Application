import React, { useState } from 'react';
import todoService from '../../../services/todoService';
import './index.css';

const TodoItem = ({ todo, reloadTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });
  const [errors, setErrors] = useState({ title: false, description: false });

  const handleDelete = async () => {
    await todoService.deleteTodo(todo.id);
    reloadTodos();
  };

  const handleUpdate = async () => {
    const { title, description } = updatedTodo;
    if (title.trim() === '' || description.trim() === '') {
      setErrors({
        title: title.trim() === '',
        description: description.trim() === ''
      });
      return;
    }

    await todoService.updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
    reloadTodos();
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <div className="todo-item-edit">
          <input
            type="text"
            className={`todo-item-input ${errors.title ? 'input-error' : ''}`}
            value={updatedTodo.title}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, title: e.target.value });
              setErrors({ ...errors, title: false });
            }}
            placeholder="Title"
            required
          />
          {errors.title && <span className="todo-item-error-message">Title is required</span>}
          <input
            type="text"
            className={`todo-item-input ${errors.description ? 'input-error' : ''}`}
            value={updatedTodo.description}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, description: e.target.value });
              setErrors({ ...errors, description: false });
            }}
            placeholder="Description"
            required
          />
          {errors.description && <span className="todo-item-error-message">Description is required</span>}
          <select
            className="todo-item-select"
            value={updatedTodo.status}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, status: e.target.value })}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
            <option value="completed">Completed</option>
          </select>
          <div className="todo-item-buttons">
            <button className="todo-item-button todo-item-save" onClick={handleUpdate}>Save</button>
            <button className="todo-item-button todo-item-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="todo-item-view">
          <div className="todo-item-details">
            <div className="todo-item-title-status">
              <span className="todo-item-title">{todo.title}</span>
              <span className={`todo-item-status ${todo.status.replace(' ', '-')}`}>{todo.status}</span>
            </div>
            <span className="todo-item-description">{todo.description}</span>
          </div>
          <div className="todo-item-buttons">
            <button className="todo-item-button todo-item-edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="todo-item-button todo-item-delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
