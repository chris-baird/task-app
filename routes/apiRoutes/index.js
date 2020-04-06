const router = require('express').Router();
const userRoutes = require('./userRoutes');
const phaseRoutes = require('./phaseRoutes');
const stageRoutes = require('./stageRoutes');
const projectRoutes = require('./projectRoutes');
const recordRoutes = require('./recordRoutes');

router.use('/users', userRoutes);
router.use('/phases', phaseRoutes);
router.use('/stages', stageRoutes);
router.use('/projects', projectRoutes);
router.use('/records', recordRoutes);

module.exports = router;
