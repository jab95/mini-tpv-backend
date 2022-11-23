//todas las rutas las juntamos en un fichero js centrado que luego usaremos en el index como required
//para no volver a importar aqui express. lo podemos importar desde el index, llamandolo luego incluyendolo

const comandasRoute = require("../../routes/comandas")
const Comanda = require("../../models/comanda").Comanda
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = (express,app)=>{


    //todo esto siempre antes que las rutas
    app.use(cors())

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.use("/comandas",comandasRoute)

   
   

}