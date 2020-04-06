const router = require('express').Router();
const stageController = require('../../../controllers/stageController.js');

// GET ALL STAGES
router.get('/all/:user_id', stageController.getAllStages);

// GET ONE STAGE
router.get('/:stage_id', stageController.getOneStage);

// UPDATE STAGE
router.put('/:stage_id', stageController.updateStage);

// CRESTE STAGE
router.post('/', stageController.createStage);

// DELETE STAGE
router.delete('/:stage_id', stageController.deleteStage);

module.exports = router;
