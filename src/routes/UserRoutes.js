const router = require('express').Router();
const UserController = require('@controllers/UserController');

router.post('/user', UserController.createUser);

module.exports = router;
