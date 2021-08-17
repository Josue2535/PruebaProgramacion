const { Router } = require('express')

const router = Router()

const ColaborradorCtrl = require('../controller/Colaborador')

router.get('/', ColaborradorCtrl.getColaboradores)
router.get('/:id', ColaborradorCtrl.getColaborador)
router.post('/', ColaborradorCtrl.createColaborador)
router.put('/:id', ColaborradorCtrl.upColaborador)
router.delete('/:id',ColaborradorCtrl.deleteColaborador)


module.exports = router