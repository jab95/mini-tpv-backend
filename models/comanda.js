const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")

let ComandaSchema = mongoose.Schema({

    mesa: {
        type: Number, 
        index:true,
        required:true
    },
    dia: {
      type:  Date,
      default: Date.now,
      index:true
    },
    platos: {
        type: [String],
        required:true
    }
});

ComandaSchema.plugin(mongoosePaginate)

const Comanda = mongoose.model("Comanda",ComandaSchema); 

module.exports = {Comanda:Comanda}