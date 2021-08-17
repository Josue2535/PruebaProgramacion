const { Router } = require('express')

const router = Router()

const MascotaCtrl = require('../controller/mascota')

router.get('/', MascotaCtrl.getMascotas)
router.get('/:id', MascotaCtrl.getMascota)
router.post('/', MascotaCtrl.createMascota)
router.put('/:id', MascotaCtrl.upMascota)
router.delete('/:id',MascotaCtrl.deleteMascota)


module.exports = router