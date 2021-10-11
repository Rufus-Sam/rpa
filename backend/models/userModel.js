import mongoose from 'mongoose'

const userSchema = monggoose.Schema({
    name: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    watchAgain: [
        {
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            video: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Video'
            }
        }
    ]

})

const User = mongoose.model('User', userSchema)

export default User