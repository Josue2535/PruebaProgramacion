const usuarioCtrl = {}

const Usuario = require('../model/Usuario')

usuarioCtrl.getUsers = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}
usuarioCtrl.getUser = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}
usuarioCtrl.createUser = (req, res) => {}
usuarioCtrl.upUser = (req, res) => {}
usuarioCtrl.delateUser = (req, res) => {}

module.exports = usuarioCtrl