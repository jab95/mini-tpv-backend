const mongoose = require("mongoose")
const config = require("config")

const initDatabase = async() =>{

    await mongoose.connect(config.get("db.url"));
    console.log("conexion establecida")
    return;
}

module.exports = {
    initDatabase:initDatabase
}