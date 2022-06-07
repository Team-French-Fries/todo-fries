const express = require("express");
const Todo = require(`./../models/todo`)
const Time = require('./../models/time')

const router = express.Router();

// GET /Todos
router.get('/', function (req, res) {
    // Find All todos
    Todo.find()
    // Return todos as json
    .then(todos => res.status(200).json({todos: todos}))
})

router.post('/', function(req, res){
    const data = req.body
    Todo.create(data)
    .then((todo => res.status(201).json({todo: todo})))
})

module.exports = router;