const http = require("https");
const express = require("express");
const app = express();
const appDatabase = require("./public/javascript/appDatabase");
const config2 = require("./config/config")
const fs = require("fs")
const WebSocketServer = require('ws');
// const redis = require('redis');

appDatabase.initDatabase();

(async function(){

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express,app);
    // const client = redis.createClient(process.env.PORT,"0.0.0.0"); //creates a new client


    // client.on('connect', function() {
    //     console.log('connected');
    // });


    const options = 
    {
        key: fs.readFileSync("./certificados/key.pem","utf8"),
        cert: fs.readFileSync("./certificados/cert.pem","utf8"),
        requestCert: false,
        rejectUnauthorized: false,
        secureOptions: require("constants").SSL_OP_NO_SSLv3 | require("constants").SSL_OP_NO_TLSv1,
        // honorCipherOrder:true
    }

    http.createServer(options,app).listen(config2.PORT)
    // const wss = new WebSocketServer.Server({server})
    // // const subscriber = client.duplicate();

    // wss.on('connection', function open(ws) {
    //   ws.send("holaaaaaa")
    //     console.log("conectado")
    // });
      
//   await subscriber.connect();

//   await subscriber.subscribe('mensaje', (message) => {
//         wss.clients.forEach(async function each(myClient){
//             if(myClient.readyState===WebSocketServer.OPEN){
//                 await myClient.send(message)
//             }
//         })
    

//     // 'message'
//   });


    module.exports = app;
})();
        



