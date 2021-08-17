const {Schema,model} = require('mongoose')

const Colaborador = new Schema({

  nombre: {type: String,require:true} ,
  apellido: {type: String,require: true},
  cargo: {type: String,require: true},
  especialidad: {type: Number,require: true},
  tipo_documento: {type: String,require: true},
  documento_identificacion:{type: Number,require: true}
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("Colaborador", Colaborador)