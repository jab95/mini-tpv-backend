const http = require("http");
const config = require("config");
const express = require("express");
const app = express();
const appDatabase = require("./public/javascript/appDatabase");
const io = require('socket.io')(http);
const comandaManager = require("./public/javascript/comandaManager")

appDatabase.initDatabase();


(async function(){

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express,app);


    http.createServer(app).listen(config.get("app.port"),config.get("app.host"),function(req,res){
    });

    
    module.exports = app;
})();
        



