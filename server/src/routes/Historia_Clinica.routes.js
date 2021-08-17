const { Router } = require('express')

const router = Router()

const Historia_Clinica_CTRL = require('../controller/Historia_Clinica')

router.get('/', Historia_Clinica_CTRL.getHistorias)
router.get('/:id', Historia_Clinica_CTRL.getHistoria)
router.post('/', Historia_Clinica_CTRL.createHistoria)
router.put('/:id', Historia_Clinica_CTRL.upHistoria)
router.delete('/:id',Historia_Clinica_CTRL.deleteHistoria)


module.exports = router