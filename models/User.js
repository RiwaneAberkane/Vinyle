const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true,
        minlength: 5
    }
})

userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

userSchema.methods.validatePassword = async (userPassword, stockedPassword) => {
    const result = await bcrypt.compare(userPassword, stockedPassword)
    return result 
}

const User = mongoose.model('User', userSchema)
module.exports = User