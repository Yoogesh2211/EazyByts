const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    userId:{
        type:Number,
        required:true,
        unique:true,
    },
    userName:{
        type:String,
        required:true,
    },
    userCity:{
        type:String,
        required:true,
    },
    userCountry:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userPhone:{
        type:Number,
        required:false,
    },
    userPassword:{
        type:String,
        required:true,
    }
})


const userModel=mongoose.model('userManagement',userSchema);
module.exports=userModel;

