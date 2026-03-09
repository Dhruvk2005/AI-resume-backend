const express = require("express")
const mongoose = require("mongoose")

const signup = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("signupSchema",signup)
