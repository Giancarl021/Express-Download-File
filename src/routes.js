const express = require('express');
const multer = require('multer');
const storage = require('./services/multer-storage');

const upload = multer({ storage });

const routes = express.Router();

const uploadController = require('./controllers/upload');

routes.post('/upload', upload.array('files'), uploadController);

module.exports = routes;