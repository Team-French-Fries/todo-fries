const mongoose = require('./../connection')

const timeSchema = new mongoose.Schema({
    timeOfDay: {type: String, required: true},
    tasks: [{
        ref: "Todo",
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('Times', timeSchema)