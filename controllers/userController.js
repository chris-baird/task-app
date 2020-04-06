const knex = require('../config/db');

class UserController {
  getUserById(req, res) {
    knex('users')
      .where('user_id', req.params.id)
      .then(user => {
        return res.send(user);
      });
  }

  createUser(req, res) {
    knex('users')
      .insert({ name: req.body.name })
      .then(idk => res.send(idk));
  }

  deleteUser(req, res) {
    knex('users')
      .delete()
      .where('user_id', req.params.id)
      .then(() => res.send('200'));
  }
}

const userController = new UserController();

module.exports = userController;
