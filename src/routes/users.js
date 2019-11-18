const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controllers/users.controller');

router.route('/')
    .get(usersCtrl.getUsers)
    .post(usersCtrl.createUser)

router.route('/:id')
    .get(usersCtrl.getUser)
    .delete(usersCtrl.deleteUser)
    .put(usersCtrl.updateUser)


  

module.exports = router;
 
