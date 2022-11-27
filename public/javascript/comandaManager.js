const mongoose = require("mongoose");
const Comanda = require("../../models/comanda").Comanda
const WebSocketServer = require('ws');
const redis = require('redis');
const publisher = redis.createClient(process.env.PORT,"0.0.0.0");

publisher.connect()
console.log("The WebSocket server is running on port 3101 111");



let enviarDatosACliente = (comanda)=>{

    wss.clients.forEach(function each(myClient){

        if(myClient.readyState===WebSocketServer.OPEN){
            myClient.send(JSON.stringify(comanda))
        }
    })
}

let createComanda = async (mesa,platos)=>{

    let comanda = new Comanda({
        mesa: mesa,
        platos :platos  
    
    });
    
    await comanda.save().then(async dat=>{
        // enviarDatosACliente(dat)
        await publisher.publish("mensaje",JSON.stringify(dat))
        
    })

}

let getComandas = (page,limit)=>{
    let sort = {dia:-1}

    const options = {
        page: Number(page),
        limit: Number(limit),
        sort:sort
    } 

  return Comanda.paginate({},options);
}


module.exports = {
    createComanda:createComanda,
    getComandas:getComandas
}

