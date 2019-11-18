const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: []});

usersCtrl.createUser = (req, res) => res.json({message: 'POST Request'});

usersCtrl.getUser = (req, res) => res.json({titulo: 'Titulo 1'}); 

usersCtrl.updateUser = (req, res) => res.json({message: 'User Updated'});

usersCtrl.deleteUser = (req, res) => res.json({message: 'User Deleted'});

module.exports = usersCtrl;