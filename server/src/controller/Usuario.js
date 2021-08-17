const usuarioCtrl = {}

const Usuario = require('../model/Usuario')

usuarioCtrl.getUsers = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}
usuarioCtrl.createUser = async(req, res) => {
    
    const newUsuario = new Usuario(req.body)
    console.log(newUsuario)

    await newUsuario.save()
    res.send({message: 'Usuario Creado'})
}
usuarioCtrl.getUser = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.send(usuario)
}

usuarioCtrl.upUser = async (req, res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'usuario actualizado'})
}
usuarioCtrl.deleteUser = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({status:'usuario eliminado'})
}

module.exports = usuarioCtrl