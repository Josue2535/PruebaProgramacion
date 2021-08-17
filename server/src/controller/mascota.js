const MascotaCtrl = {}

const Mascota = require('../model/Mascota')

MascotaCtrl.getMascotas = async(req, res) => {
    const mascotas = await Mascota.find()
    res.json(mascotas)
}
MascotaCtrl.createMascota = async(req, res) => {
    
    const newMascota = new Mascota(req.body)
    console.log(newMascota)

    await newMascota.save()
    res.send({message: 'Mascota Creado'})
}
MascotaCtrl.getMascota = async(req, res) => {
    const mascota = await Mascota.findById(req.params.id)
    res.send(mascota)
}

MascotaCtrl.upMascota = async (req, res) => {
    await Mascota.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Mascota actualizado'})
}
MascotaCtrl.deleteMascota = async (req, res) => {
    await Mascota.findByIdAndDelete(req.params.id)
    res.json({status:'Mascota eliminado'})
}

module.exports = MascotaCtrl