const mongoose = require('./../connection')

const todoSchema = new mongoose.Schema({
    taskName: String,
    taskDetails: String,
    completed: Boolean
})

module.exports = mongoose.model('Todo', todoSchema)