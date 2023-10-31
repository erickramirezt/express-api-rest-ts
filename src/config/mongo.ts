import 'dotenv/config'
import { connect } from 'mongoose'

async function connectDB() {
    const { DB_URI } = process.env

    if (!DB_URI)
        throw new Error('DB_URI must be defined')
    
    try {
        await connect(DB_URI)
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err)
    }
}

export default connectDB