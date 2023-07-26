// import express from "express";
// import controller from "../controllers/controllers"
const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();
const privateRoutes = express.Router();

router.get('/', controller.main);
router.get('/accommodation/:id',controller.fetchAccommodation);

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/asTenant', controller.isTenant);
router.post('/asHost', controller.isHost);

privateRoutes.use(controller.authMiddleware);


// this rout will be nested
privateRoutes.post('/logout', controller.logout);
privateRoutes.post('/newAccommodation', controller.newAccommodation);
privateRoutes.get('/authStateTrue', controller.authStateTrue);

router.use('/auth',privateRoutes);

module.exports = router;