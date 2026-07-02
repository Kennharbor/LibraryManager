const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoDb);
        console.log("mongoDb is connected")
    }
    catch (error) {
        console.log(error);
        process.exit(1)
    }
    }