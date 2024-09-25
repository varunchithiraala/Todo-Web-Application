import Todo from '../models/Todo.js';

export const createTodo = (req, res) => {
  const newTodo = new Todo(req.userId, req.body.title, req.body.description, req.body.status);

  Todo.create(newTodo, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send(data);
    }
  });
};

export const getTodos = (req, res) => {
  Todo.findByUserId(req.userId, (err, todos) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send(todos);
    }
  });
};

export const updateTodo = (req, res) => {
  Todo.updateById(req.params.id, req.body, (err, todo) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send({ message: "Todo updated successfully!", todo });
    }
  });
};

export const deleteTodo = (req, res) => {
  Todo.deleteById(req.params.id, (err, changes) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send({ message: "Todo deleted successfully!", changes });
    }
  });
};
