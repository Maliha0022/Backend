const mongoose = require('mongoose');
require('dotenv').config();


const connectToDatabase = async function () {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase