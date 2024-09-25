import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const signup = (req, res) => {
  const newUser = new User(req.body.name, req.body.email, req.body.password);

  User.create(newUser, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send({ message: "User registered successfully!" });
    }
  });
};

export const login = (req, res) => {
  User.findByEmail(req.body.email, (err, user) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else if (!user) {
      res.status(404).send({ message: "User not found" });
    } else {
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
      res.send({ id: user.id, email: user.email, accessToken: token });
    }
  });
};
