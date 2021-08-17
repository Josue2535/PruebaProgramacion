const {Schema,model, Mongoose, mongo} = require('mongoose')

const Detalle_Historia_Clinica = new Schema({
  
  temperatura: {type: String,require:true} ,
  peso: {type: Number,require: true},
  frecuencia_cardiaca: {type: Number,require: true},
  frecuencia_respiratoria: {type: Number,require: true},
  fecha_hora: {type: String,require: true},
  alimentacion:{type: String,require: true},
  habitad:{type: String, require:true},
  observacion:{type: String, require:true},
  colaborador_id:{type:Schema.Types.ObjectId, require:true},
  historia_clinica_id:{type:Schema.Types.ObjectId, require:true}
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("Detalle_Historia_Clinica", Detalle_Historia_Clinica)