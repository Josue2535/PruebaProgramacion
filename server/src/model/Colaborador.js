const {Schema,model} = require('mongoose')

const Colaborador = new Schema({
  id: {type: Number,require:true, require},
  nombre: {type: String,require:true} ,
  apellido: {type: String,require: true},
  tipo_documento: {type: String,require: true},
  documento_identificacion: {type: Number,require: true},
  estado: {type: String,require: true},
  sexo:{type: Number,require: true}
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("Colaborador", Colaborador)