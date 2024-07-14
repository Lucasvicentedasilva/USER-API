// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

router.post('/criar-usuario', createUser);
router.get('/usuarios', getUsers);
router.get('/usuarios/:id', getUserById);
router.put('/usuarios/:id', updateUser);
router.delete('/usuarios/:id', deleteUser);

module.exports = router;
