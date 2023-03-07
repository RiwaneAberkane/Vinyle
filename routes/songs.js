const express = require('express')
const Song = require('../models/Song')
const router = express.Router()

// router.get('/all', (req, res) => {
//     let songs = Song.find({})
//     res.render('songs/allSongs', { songs: songs})
// })

router.get('/new', (req, res) => {
    res.render('songs/addsmth', { song: new Song() })
})

router.get('/:id', async (req, res) => {
    //res.send(req.params.id)
    let song = await Song.findById(req.params.id)
    res.render('songs/songbyid', {song: song })
})

router.post('/', async (req, res) => {
    // req.body is used to access actual form data that you 'posted'.
    let song = new Song({
        name: req.body.name,
        duration: req.body.duration,
        // image: req.body.image,
        // artist: req.body.artist,
        // album: req.body.album,
        genres: req.body.genres
    })
    try {
        song = await song.save()
        //save is mongoose method to save it in the db
        console.log(song)
        res.redirect(`/songs/${song.id}`)
    } catch(err) {
        console.log(err)
        //res.render('songs/addsmth', { song: song })
    }
})

module.exports = router