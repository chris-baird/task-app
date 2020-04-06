const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log('sdfdfd');
  res.sendFile(path.join(__dirname, '../CLIENT/dist/index.html'));
});

module.exports = router;
