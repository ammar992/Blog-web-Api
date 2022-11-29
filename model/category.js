const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
   username:{type:String,required:true}
},{timestamps:true})



const categoryModel = mongoose.model("post",categorySchema);



module.exports = categoryModel;