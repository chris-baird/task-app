const router = require('express').Router();
const recordController = require('../../../controllers/recordController.js');

// GET ALL PROJECTS
router.get('/all/:user_id', recordController.getAllRecords);

// GET ONE PROJECT
router.get('/:record_id', recordController.getOneRecord);

// UPDATE PROJECT
router.put('/:record_id', recordController.updateRecord);

// CREATE PROJECT
router.post('/', recordController.createRecord);

// DELETE PROJECT
router.delete('/:record_id', recordController.deleteRecord);

module.exports = router;
