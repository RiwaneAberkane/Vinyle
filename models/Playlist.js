const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema({
    name: String,
    description: String,
    image: String,
    owner: {type: Schema.Types.ObjectId, ref: "Membre"},
    followers: Number,
    genres: [String],
    total_tracks: Number
})

const Playlist = mongoose.model("Playlist", playlistSchema)
module.exports = Playlist