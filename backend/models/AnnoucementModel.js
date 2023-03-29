
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AnnocementSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    user: { type: String, default: 'Bob' },
    description: {
        type: String, 
        required: true
    },
    comments: [{
        // an id referencing the comment
        type: mongoose.Types.ObjectId,
        // search for it in the Comments collection
        ref: 'Comment'
     }]
},{ timestamps: true })

const Annocements = mongoose.model('Annocement', AnnocementSchema)

module.exports = Annocements