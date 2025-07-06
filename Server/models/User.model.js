import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName : {
        type : String ,
        required : true ,        
    } ,
    email : {
        type : String ,
        unique : true ,
        required : true ,        
    } ,
    password : {
        type : String ,
        required : true , 
    }
}, {timestamps : true})

export const User = mongoose.model("User" , UserSchema)