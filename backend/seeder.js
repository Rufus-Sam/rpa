import mongoose from 'mongoose'
import colors from 'colors'
import connectDb from './config/db.js'
import users from './data/users.js'
import videos from './data/videos.js'
import User from './models/userModel.js'
import Video from './models/videoModel.js'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'

dotenv.config()
connectDb()

const importData = asyncHandler(async () => {

    await User.deleteMany()
    await Video.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id
    const sampleVideos = videos.map((video) => {
        return { ...video, user: adminUser }
    })
    await Video.insertMany(sampleVideos)

    console.log("Data Imported".green.inverse)
    process.exit()
})
const deleteData = asyncHandler(async () => {

    await User.deleteMany()
    await Video.deleteMany()

    console.log("Data Deleted".green.inverse)
    process.exit()

})

if (process.argv[2] === '-d') {
    deleteData()
} else {
    importData()
}