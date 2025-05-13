const express = require('express')
const router = express.Router()
const controller = require('../controllers/logController')

router.post('/', controller.logConversation)

module.exports = router
