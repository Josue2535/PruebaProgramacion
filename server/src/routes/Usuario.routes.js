const { Router } = require('express')
const usuarioCtrl = require('../controller/usuario')
const router = Router()

const userCtrl = require('../controller/usuario')

router.get('/', usuarioCtrl.getUser)
router.get('/:id', usuarioCtrl.getUser)
router.post('/', usuarioCtrl.createUser)
router

module.exports = router