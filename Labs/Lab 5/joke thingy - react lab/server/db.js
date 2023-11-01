const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO)
    const conn = await mongoose.connect("mongodb+srv://avinashcube:mongodb@avinashcluster.eqzygkc.mongodb.net/?retryWrites=true&w=majority")
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB