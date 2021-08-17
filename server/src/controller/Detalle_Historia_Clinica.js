const Detalle_Historia_Clinica_CTRL = {}

const Detalle_Historia_Clinica = require('../model/Detalle_Historia_Clinica')

Detalle_Historia_Clinica_CTRL.getDetalles = async(req, res) => {
    const detalles = await Detalle_Historia_Clinica.find()
    res.json(detalles)
}
Detalle_Historia_Clinica_CTRL.createDetalles = async(req, res) => {
    
    const newDetalles = new Detalle_Historia_Clinica(req.body)
    console.log(newDetalles)

    await newDetalles.save()
    res.send({message: 'Detalles de historia Creada'})
}
Detalle_Historia_Clinica_CTRL.getDetalle = async(req, res) => {
    const detalle = await Detalle_Historia_Clinica.findById(req.params.id)
    res.send(detalle)
}

Detalle_Historia_Clinica_CTRL.upDetalle = async (req, res) => {
    await Detalle_Historia_Clinica.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Historia actualizada'})
}
Detalle_Historia_Clinica_CTRL.deleteDetalle = async (req, res) => {
    await Detalle_Historia_Clinica.findByIdAndDelete(req.params.id)
    res.json({status:'Historia eliminada'})
}

module.exports = Detalle_Historia_Clinica_CTRL