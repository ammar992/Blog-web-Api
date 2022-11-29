const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true},
    photo:{type:String,required:false},
    username:{type:String,required:true},
    catogories:{type:Array,required:false}
},{timestamps:true})



const postModel = mongoose.model("post",postSchema);



module.exports = postModel;