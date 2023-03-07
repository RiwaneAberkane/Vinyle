const mongoose = require('mongoose')
// const Schema = mongoose.Schema

const songSchema = new mongoose.Schema({
    name: String,
    duration: String,
    image: String,
    // artist:{type: Schema.Types.ObjectId, ref: "Artist"},
    // album: {type: Schema.Types.ObjectId, ref: "Album"},
    genres: [String]
})

module.exports = mongoose.model('Song', songSchema)