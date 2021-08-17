const {Schema,model} = require('mongoose')

const Historia_Clinica = new Schema({
  
  mascota_id: {type: Schema.Types.ObjectId,require:true} ,
  fecha_creacion: {type:Date,require: true},
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("historia_Clinica", Historia_Clinica)