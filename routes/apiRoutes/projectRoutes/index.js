const router = require('express').Router();
const projectController = require('../../../controllers/projectController.js');

// GET ALL PROJECTS
router.get('/all/:user_id', projectController.getAllProjects);

// GET ONE PROJECT
router.get('/:project_id', projectController.getOneProject);

// UPDATE PROJECT
router.put('/:project_id', projectController.updateProject);

// CREATE PROJECT
router.post('/', projectController.createProject);

// DELETE PROJECT
router.delete('/:project_id', projectController.deleteProject);

module.exports = router;
