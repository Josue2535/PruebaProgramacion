const {Schema,model} = require('mongoose')

const MascotaSchema = new Schema({
  
  nombre: {type: String,require:true} ,
  raza: {type: String,require: true},
  usuario_id: {type: Schema.Types.ObjectId, require:true},
  sexo:{type: Number, require:true}
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("Mascota", MascotaSchema)