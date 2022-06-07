const express = require("express");
const Todo = require(`./../models/todo`)

const router = express.Router();

// GET /Todos
router.get('/', function (req, res) {
    // Find All todos
    Todo.find()
    // Return todos as json
    .then(todos => res.status(200).json({todos: todos}))
})

// Create a Todo
router.post('/', function(req, res){
    const data = req.body
    Todo.create(data)
    .then((todo => res.status(201).json({todo: todo})))
})

//Update a Todo
router.patch('/:id', function(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(todo => res.status(200).json({todo: todo}))
})

// Delete a Todo
router.delete('/:id', function(req, res) {
    Todo.findByIdAndDelete(req.params.id).then(todo => {
        res.json({data: todo})
    })
})



module.exports = router;