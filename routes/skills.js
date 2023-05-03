const express = require("express");
const router = express.Router();

const skillController = require("../controllers/skills");

// GET request localhost:3000/todo
router.get('/', skillController.index);

router.get('/new', skillController.newSkill);

// GET request localhost:3000/todos/125223
// since this is a GET request, we need to get the user `id` somehow.
// this how is with a url param
// we can name `:id` whatever we want just as long as
// we then refer to it as what we named it
// req.params.id
router.get('/:id', skillController.show);

router.post('/', skillController.create);

router.delete('/:id', skillController.deleteSkill);

// if there is only one export, you don't need the object
module.exports = router; 