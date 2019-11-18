const { Router } = require('express');
const router = Router();
const notesCtr = require('../controllers/notes.controller');

router.route('/')
    .get(notesCtr.getNotes)
    .post(notesCtr.createNote)

router.route('/:id')
    .get(notesCtr.getNote)
    .delete(notesCtr.deleteNote)
    .put(notesCtr.updateNote)


  

module.exports = router;
 