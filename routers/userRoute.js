const express = require('express');

const {home, createUser, getUsers, editUser, deleteUser} = require('../controllers/userController.js')

const router = express.Router();

//routers
router.get('/', home)
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.put('/edituser/:id',editUser )
router.delete('/deleteUser/:id', deleteUser)


//Export router
module.exports = router