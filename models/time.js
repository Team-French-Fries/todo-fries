const mongoose = require('./../connection')

const timeSchema = new mongoose.schema({
    timeOfDay: String,
    tasks: [{
        ref: "Todo",
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('Times', timeSchema)