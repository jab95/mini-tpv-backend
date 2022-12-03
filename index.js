const http = require("https");
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
        key: fs.readFileSync("certificados/private.pem","utf8"),
        cert: fs.readFileSync("certificados/myCA.pem","utf8"),
        requestCert: false,
        rejectUnauthorized: false,
        secureOptions: require("constants").SSL_OP_NO_SSLv3 | require("constants").SSL_OP_NO_TLSv1,
        honorCipherOrder:true
    }

    await http.createServer(options,app).listen(config2.PORT,()=>{
        console.log("listening ",process.env.PORT)
    })

    module.exports = app;
})();
        



