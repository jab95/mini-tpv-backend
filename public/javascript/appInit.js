//todas las rutas las juntamos en un fichero js centrado que luego usaremos en el index como required
//para no volver a importar aqui express. lo podemos importar desde el index, llamandolo luego incluyendolo

const comandasRoute = require("../../routes/comandas")
const Comanda = require("../../models/comanda").Comanda
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet")

module.exports = (express,app)=>{

    const corsOption = {
        origin:true,
        methods: ["GET","PUT","POST","DELETE"],
        allowedHeaders: ["Origin","X-Requested-With","Content-Type","Accept","content-type","authorization"],
        credentials:true,
        maxAge:600
    }

    app.use(helmet())
    // todo esto siempre antes que las rutas
    app.use(cors(corsOption))
    // app.use(cors())

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.use("/comandas",comandasRoute)

   
   

}