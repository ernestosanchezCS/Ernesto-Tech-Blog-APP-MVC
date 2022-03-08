const router = require('express').Router();
const userRoutes = require('./userRoutes');
const topicRoutes = require('./topicRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
