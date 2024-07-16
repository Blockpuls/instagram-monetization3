const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.post('/', linkController.addAffiliateLink);
router.get('/:userId', linkController.getLinks);

module.exports = router;
