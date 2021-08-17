const {Schema,model} = require('mongoose')

const Detalle_Historia_Clinica = new Schema({
  _id: {type: Number,require:true, require},
  temperatura: {type: String,require:true} ,
  peso: {type: Number,require: true},
  frecuencia_cardiaca: {type: Number,require: true},
  frecuencia_respiratoria: {type: Number,require: true},
  fecha_hora: {type: timestamps,require: true},
  alimentacion:{type: Number,require: true},
  habitad:{type: String, require:true},
  observacion:{},
  colaborador_id:{},
  historia_clinica_id:{}
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("Detalle_Historia_Clinica", Detalle_Historia_Clinica)