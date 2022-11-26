const http = require("http");
const express = require("express");
const app = express();
const appDatabase = require("./public/javascript/appDatabase");
const config2 = require("./config/config")
const fs = require("fs")

appDatabase.initDatabase();

(async function(){

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express,app);

    const options = 
    {
        key: fs.readFileSync("certificados/key.pem"),
        cert: fs.readFileSync("certificados/cert.pem"),
        requestCert: false,
        rejectUnauthorized: false

    }

    http.createServer(options,app).listen(config2.PORT)
    
    module.exports = app;
})();
        



