const { Router } = require('express')
const usuarioCtrl = require('../controller/Usuario')
const router = Router()

const userCtrl = require('../controller/Usuario')

router.get('/', usuarioCtrl.getUsers)
router.get('/:id', usuarioCtrl.getUser)
router.post('/', usuarioCtrl.createUser)


module.exports = router