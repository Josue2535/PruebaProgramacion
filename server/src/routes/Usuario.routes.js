const { Router } = require('express')
const usuarioCtrl = require('../controller/Usuario')
const router = Router()



router.get('/', usuarioCtrl.getUsers)
router.get('/:id', usuarioCtrl.getUser)
router.post('/', usuarioCtrl.createUser)
router.put('/:id', usuarioCtrl.upUser)
router.delete('/:id',usuarioCtrl.deleteUser)


module.exports = router