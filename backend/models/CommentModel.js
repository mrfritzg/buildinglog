
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
   body: { type: String },
   user: { type: String, default: 'Bob' , required: true },

}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment