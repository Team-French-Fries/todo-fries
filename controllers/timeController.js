const express = require("express");
const Todo = require(`./../models/todo`)
const Time = require('./../models/time')

const router = express.Router();

// GET /Times
router.get('/', async (req, res) => {
    // Find All todos
    Time.find()
    // Populate times with Todo data
    .populate("tasks")
    // Return todos as json
    .then(times => res.status(200).json({times: times}))
})

// Create a Time
router.post('/', function(req, res){
    const data = req.body
    Time.create(data)
    .then((time => res.status(201).json({time: time})))
})

// Update a Time
router.patch('/:id', function(req, res) {
    Time.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(time => res.status(200).json({time: time}))
})

// Delete a Time
router.delete('/:id', function(req, res) {
    Time.findByIdAndDelete(req.params.id).then(time => {
        res.json({data: time})
    })
})

module.exports = router;