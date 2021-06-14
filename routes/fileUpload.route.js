const express = require('express');
const upload = require('../middleware/fileUpload');
const router = express.Router();
const fs = require('fs');
const {storeSingleFile,storeMultipleFiles} = require('../controllers/fileUpload.controller');

router.post('/upload-single', upload.single('file'), storeSingleFile);
router.post('/upload-multiple', upload.array('files',10), storeMultipleFiles);

module.exports = router;