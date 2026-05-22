const { required } = require("joi");
const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,    
    },
    lastName:{
        type: String,
        required: true, 
    }
});

// console.log(passportLocalMongoose);

userSchema.plugin(passportLocalMongoose.default);

module.exports = mongoose.model("User", userSchema);