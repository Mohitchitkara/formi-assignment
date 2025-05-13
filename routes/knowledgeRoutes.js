const express = require('express')
const router = express.Router()
const controller = require('../controllers/knowledgeController')

router.post('/', controller.getChunk)

module.exports = router
