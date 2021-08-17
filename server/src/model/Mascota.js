const {Schema,model} = require('mongoose')

const MascotaSchema = new Schema({
  _id: {type: Number, require:true},
  nombre: {type: String,require:true} ,
  raza: {type: String,require: true},
  usuario_id: {type: Number, require:true},
  sexo:{type: Number, require:true}
},{
  timestamps: true,
  versionKey: false
})
module.exports = model("Usuario", Usuario)