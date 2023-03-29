const mongoose = require('mongoose')

const Schema = mongoose.Schema

const repairsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Plumbing', 'Electrical', 'Roof','Wear-Tear','Exterior', 'misc']
    }
})

const Repairs = mongoose.model('repairlog', repairsSchema)

module.exports = Repairs