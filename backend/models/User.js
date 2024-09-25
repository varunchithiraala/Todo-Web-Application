import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../db.sqlite');
const db = new sqlite3.Database(dbPath);

class User {
  constructor(name, email, password) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = bcrypt.hashSync(password, 8);
  }

  static create(newUser, result) {
    db.run(`INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
      [newUser.id, newUser.name, newUser.email, newUser.password],
      function (err) {
        if (err) {
          result(err, null);
        } else {
          result(null, newUser);
        }
      });
  }

  static findByEmail(email, result) {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
      if (err) {
        result(err, null);
      } else {
        result(null, row);
      }
    });
  }

  static findById(id, result) {
    db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
      if (err) {
        result(err, null);
      } else {
        result(null, row);
      }
    });
  }

  static updateById(id, user, result) {
    db.run(`UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`,
      [user.name, user.email, bcrypt.hashSync(user.password, 8), id],
      function (err) {
        if (err) {
          result(err, null);
        } else {
          result(null, user);
        }
      });
  }
}

export default User;
