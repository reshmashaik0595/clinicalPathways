const express = require('express')
const router = express.Router()
const feedBackService = require('../services/feedBack.service')

router.post('/', feedBackService.createFeedback)
router.get('/', feedBackService.getByQuery)
router.put('/', feedBackService.updateFeedback)
router.delete('/', feedBackService.deleteByQuery)
router.post('/comments', feedBackService.createFeedbackComments)
router.get('/comments', feedBackService.getByQuery)

module.exports = router
