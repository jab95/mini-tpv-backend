const mongoose = require("mongoose");
const Comanda = require("../../models/comanda").Comanda
const wss = require("./appWebSocket").wss
const WebSocketServer = require('ws');

console.log("The WebSocket server is running on port 3101 111");


wss.on("connection",function connection(ws){
    console.log("cliente conectado")
})

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
    
    await comanda.save().then(dat=>{
        enviarDatosACliente(dat)

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

