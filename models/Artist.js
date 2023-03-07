const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    name: String,
    albums: [{type: Schema.Types.ObjectId, ref: "Album"}],
    image: String,
    bio: String,
    single: [
        {
            type: Schema.Types.ObjectId, ref: "Song"
        }
    ]
})

const Artist = mongoose.model('Artist', artistSchema)
export default Artist