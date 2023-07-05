const express = require('express');
const HomeController = require('./controllers/HomeController');
const route = express.Router();
const AuthController = require('./controllers/AuthController');


route.post('/', HomeController.setUser);
route.get('/auth', AuthController.verifyToken);
module.exports = route;