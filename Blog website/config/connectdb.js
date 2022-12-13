const mongoose = require("mongoose");


const DB_OPTIONS = {
    dbName:"Blog"
}

const connectDB = async (DATABASE_URL)=>{
    try {
       await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected successfully");
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDB;