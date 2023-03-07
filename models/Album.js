const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    name: String,
    artist: {type: Schema.Types.ObjectId, ref: "Artist"},
    album_type: String,
    total_tracks: Number,
    image: String,
    genres: [String]
})

const Album = mongoose.model("Album", albumSchema)
module.exports = Album