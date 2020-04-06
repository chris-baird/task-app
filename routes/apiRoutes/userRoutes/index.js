const router = require('express').Router();
const userController = require('../../../controllers/userController');

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
