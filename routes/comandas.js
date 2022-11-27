//MODULO DE RUTAS, PARA SU POSTERIOR CARGA SE EXPORTA COMO ROUTER Y SE USA CON APP.USE

const express = require("express");
const router = express.Router();
const Comanda = require("../models/comanda").Comanda
const comandaManager = require("../public/javascript/comandaManager");

router.get("/",(req,res)=>{
    res.send("<h1><p>Hello world 1</p></h1>")

})

router.get("/getAll",async (req,response,next)=>{

    let comandas = await comandaManager.getComandas(req.query.page,req.query.limit)
    response.status(200).json(comandas)
    next()
   
})

router.post("/add",async (req,res,next)=>{

    let comanda = await comandaManager.createComanda(req.body.mesa,req.body.platos);
    res.status(200).json(comanda)
    next()
})

module.exports = router