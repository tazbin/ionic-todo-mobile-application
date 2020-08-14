const mongoose = require('mongoose')

const item = new mongoose.Schema({
    itemName: String,
    noteTime: String,
    status: Boolean
})

module.exports = mongoose.model('items', item)