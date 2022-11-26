const http = require("http");
const express = require("express");
const app = express();
const appDatabase = require("./public/javascript/appDatabase");
const config2 = require("./config/config")
appDatabase.initDatabase();

(async function(){

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express,app);

    http.createServer(app).listen(config2.PORT)
    
    module.exports = app;
})();
        



