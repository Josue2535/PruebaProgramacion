const {Schema,model} = require('mongoose')

const Historia_Clinica = new Schema({
  _id: {type: Number,require:true, require},
  mascota_id: {type: number,require:true} ,
  fecha_creacion: {type: Date,require: true},
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("historia_Clinica", Historia_Clinica)