const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const Task = require('../models/task')
// require('dotenv').config()
// console.log(process.env.JWT_SECRETS)
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,

        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be Postive Number')
            }
        }
    },
    number: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 999999999) {
                throw new Error('Phone Number  is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('password cannot contain password');
            }
        }


    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
    //,
    // avatar: {
    //     type: Buffer
    // }
}, {
    timestamps: true
})
// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })
userSchema.methods.generateAuthTokens = async function () {
    const user = this
    //console.log(process.env.JWT_SECRET)
    const token1 = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: "7 days" })
    user.tokens = user.tokens.concat({ token: token1 })
    await user.save()
    return token1
}
// userSchema.methods.getPublicProfile = async function() {

//     const user = this
//     const userObject = user.toObject()
//     delete userObject.password
//     delete userObject.tokens
//     return userObject

// }
userSchema.methods.toJSON = function () {

    const user = this
    // console.log(this)
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject

}
userSchema.statics.findByCredentials = async (email, password) => {
    var user = await User.findOne({ email })
    if (!user) {
        user=null;
        //console.log("Unable to Login!")
       // throw new Error('Unable to login!')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        //console.log("Unable to Login!")
        user=null;
        //throw new Error('Unable to login!')
    }
    return user
}
userSchema.methods.findByMail=async(email)=>{
    var user = await User.findOne({ email })
    if(user==null){
        console.log("User not found");
        return 1;
    }
    else
        return 0;
}
//hash password before saving
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password =  await bcrypt.hash(user.password, 8)
       
        
    }
        // console.log("Password Hassed Succesfuly!")
        // next()
    // console.log(await bcrypt.compare('deepak@2001', user.password))
    next()
})
userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({ owner: user._id })
    next()
})
const User = mongoose.model('User', userSchema)
module.exports = User