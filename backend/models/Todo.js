import { v4 as uuidv4 } from 'uuid';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../db.sqlite');
const db = new sqlite3.Database(dbPath);

class Todo {
  constructor(user_id, title, description, status) {
    this.id = uuidv4();
    this.user_id = user_id;
    this.title = title;
    this.description = description;
    this.status = status;
  }

  static create(newTodo, result) {
    db.run(`INSERT INTO todos (id, user_id, title, description, status) VALUES (?, ?, ?, ?, ?)`,
      [newTodo.id, newTodo.user_id, newTodo.title, newTodo.description, newTodo.status],
      function (err) {
        if (err) {
          result(err, null);
        } else {
          result(null, newTodo);
        }
      });
  }

  static findByUserId(user_id, result) {
    db.all(`SELECT * FROM todos WHERE user_id = ?`, [user_id], (err, rows) => {
      if (err) {
        result(err, null);
      } else {
        result(null, rows);
      }
    });
  }

  static findById(id, result) {
    db.get(`SELECT * FROM todos WHERE id = ?`, [id], (err, row) => {
      if (err) {
        result(err, null);
      } else {
        result(null, row);
      }
    });
  }

  static updateById(id, todo, result) {
    db.run(`UPDATE todos SET title = ?, description = ?, status = ? WHERE id = ?`,
      [todo.title, todo.description, todo.status, id],
      function (err) {
        if (err) {
          result(err, null);
        } else {
          result(null, todo);
        }
      });
  }

  static deleteById(id, result) {
    db.run(`DELETE FROM todos WHERE id = ?`, [id], function (err) {
      if (err) {
        result(err, null);
      } else {
        result(null, this.changes);
      }
    });
  }
}

export default Todo;
