const router = require('express').Router();
const phaseController = require('../../../controllers/phaseController.js');

// router.get('/', phaseController.getPhases);

// GET ALL PHASES
router.get('/all/:user_id', phaseController.getAllPhases);

// GET ONE PHASE
router.get('/:phase_id', phaseController.getOnePhase);

// UPDATE PHASE
router.put('/:phase_id', phaseController.updatePhase);

// CREATE PHASE
router.post('/', phaseController.createPhase);

// DELETE PHASE
router.delete('/:phase_id', phaseController.deletePhase);

module.exports = router;
