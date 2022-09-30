const express = require('express');
const UserController = require('./controller/UserController');
const router = express.Router();

router.get('/users', UserController.list);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);


module.exports = router;