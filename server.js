const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Song = require('./models/Song')
const songRouter = require('./routes/songs')
const userRouter = require('./routes/users')
const dotenv = require('dotenv').config()
const port = process.env.PORT;

mongoose.set('strictQuery', false)
main().catch(err => console.log(err));

//connecting to our database(MONGODB)
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('data base connected');
}

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
// app.use(express.json())

app.get('/', async (req, res) => {
    let songs = await Song()
    res.render('songs/index', { songs: songs })
})

app.use('/songs', songRouter)
app.use('/users', userRouter)

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`);
})