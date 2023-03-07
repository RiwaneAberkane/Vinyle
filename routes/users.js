const userRouter = require('express').Router()
const User = require('../models/User')

userRouter.get('/signup', async (req, res) => {
    try {
                                //is an object containing data that 
                                //will be passed to the view template for rendering
        res.render('users/signup', { user: new User() })
    } catch (error) {
        console.error(error);
    }
})

userRouter.post('/signup', async (req, res) => {
    let user = new User()
        user.name = req.body.name,
        user.email = req.body.email,
        user.password = await user.encryptPassword(req.body.password)
    try {
        const userExists = await User.findOne({email: req.body.email})
        if (userExists) {
			return res
				.status(200)
				.json({ message: "user already exists", success: false });
		}
        user = await user.save()
        console.log(user);
        res.send(user)
    } catch(err){
        console.error(err);
        res.status(500).json({
            message: "Ups! Something went wrong while creating the user",
            successful: false,
            err,
        })
    }
})

userRouter.get('/signin', (req, res) => {
    res.render('users/signin', { user: new User() })
})

userRouter.post('/signin', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email}).select('+password')
    const validPassword = await user.validatePassword(password, user.password)
    if(!validPassword){
        res.status(200).json({msg: 'Invalid password. Try again'}) 
        return;
    }
    return res.render('users/loggedin')
})

module.exports = userRouter