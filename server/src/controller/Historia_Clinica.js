const Historia_Clinica_CTRL = {}

const Historia_Clinica = require('../model/Historia_Clinica')

Historia_Clinica_CTRL.getHistorias = async(req, res) => {
    const historias = await Historia_Clinica.find()
    res.json(historias)
}
Historia_Clinica_CTRL.createHistoria = async(req, res) => {
    
    const newHistoria = new Historia_Clinica(req.body)
    console.log(newHistoria)

    await newHistoria.save()
    res.send({message: 'Historia Creada'})
}
Historia_Clinica_CTRL.getHistoria = async(req, res) => {
    const historia = await Historia_Clinica.findById(req.params.id)
    res.send(historia)
}

Historia_Clinica_CTRL.upHistoria = async (req, res) => {
    await Historia_Clinica.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Historia actualizada'})
}
Historia_Clinica_CTRL.deleteHistoria = async (req, res) => {
    await Historia_Clinica.findByIdAndDelete(req.params.id)
    res.json({status:'Historia eliminada'})
}

module.exports = Historia_Clinica_CTRL