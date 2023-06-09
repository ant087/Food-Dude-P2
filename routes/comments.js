const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn')
const commentsCtrl = require('../controllers/comments')

router.post('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router; 