import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const mongodbLink = process.env.MONGO_URI
        const conn = await mongoose.connect(mongodbLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDb connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDb