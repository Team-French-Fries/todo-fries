// Require dependencies
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const logger = require('morgan')
const todoController = require('./controllers/todoController')

// Define PORT
const PORT = process.env.PORT

// Create express app
const app = express()
app.use(cors())

// Accept json as req.body
app.use(express.json())

// Use logger middleware
app.use(logger('dev'))