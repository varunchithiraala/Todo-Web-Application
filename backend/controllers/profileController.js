import User from '../models/User.js';

export const getProfile = (req, res) => {
  User.findById(req.userId, (err, user) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send(user);
    }
  });
};

export const updateProfile = (req, res) => {
  User.updateById(req.userId, req.body, (err, user) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send({ message: "Profile updated successfully!", user });
    }
  });
};
