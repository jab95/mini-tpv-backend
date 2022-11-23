const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({

    user: String,
    pass:String
});

const User = mongoose.model("User",UserSchema); 

module.exports = {User:User}