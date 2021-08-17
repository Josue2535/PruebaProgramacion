const { Router } = require('express')

const router = Router()

const Detalle_Historia_Clinica_CTRL = require('../controller/Detalle_Historia_Clinica')

router.get('/', Detalle_Historia_Clinica_CTRL.getDetalles)
router.get('/:id', Detalle_Historia_Clinica_CTRL.getDetalle)
router.post('/', Detalle_Historia_Clinica_CTRL.createDetalles)
router.put('/:id', Detalle_Historia_Clinica_CTRL.upDetalle)
router.delete('/:id',Detalle_Historia_Clinica_CTRL.deleteDetalle)


module.exports = router