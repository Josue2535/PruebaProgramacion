const Colaborador_CTRL = {}

const Colaborador = require('../model/Colaborador')

Colaborador_CTRL.getColaboradores = async(req, res) => {
    const colaboradores = await Colaborador.find()
    res.json(colaboradores)
}
Colaborador_CTRL.createColaborador = async(req, res) => {
    
    const newColaborador = new Colaborador(req.body)
    console.log(newColaborador)

    await newColaborador.save()
    res.send({message: 'Colaborador creado'})
}
Colaborador_CTRL.getColaborador = async(req, res) => {
    const colaborador = await Colaborador.findById(req.params.id)
    res.send(colaborador)
}

Colaborador_CTRL.upColaborador = async (req, res) => {
    await Colaborador.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Colaborador actualizado'})
}
Colaborador_CTRL.deleteColaborador = async (req, res) => {
    await Colaborador.findByIdAndDelete(req.params.id)
    res.json({status:'Colaborador eliminado'})
}

module.exports = Colaborador_CTRL