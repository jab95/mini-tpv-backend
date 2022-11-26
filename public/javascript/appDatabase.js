const mongoose = require("mongoose")
const config2 = require("../../config/config")

const initDatabase = async() =>{

    await mongoose.connect(config2.DB_HOST);
    console.log("conexion establecida")
    return;
}

module.exports = {
    initDatabase:initDatabase
}