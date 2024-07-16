const express = require('express');
const router = express.Router();
const instagramController = require('../controllers/instagramController');

router.post('/connect', instagramController.connectInstagram);
router.get('/posts/:userId', instagramController.viewPosts);

module.exports = router;
