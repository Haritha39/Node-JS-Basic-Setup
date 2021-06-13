const express = require('express');
const router = express.Router();
const topicController=require('../controllers/topics.controller');

router.post('/createTopic', topicController.createTopics);
router.get('/getAllTopics', topicController.getAllTopics);
router.get('/getTopicsById/:id', topicController.getTopicsById);
router.put('/updateTopic/:id', topicController.updateTopic);
router.delete('/deleteTopic/:id', topicController.deleteTopic);
module.exports = router;