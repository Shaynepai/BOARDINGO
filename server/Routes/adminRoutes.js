const express = require('express');
const controller = require('../controllers/AdminControllers');
const usersController = require('../controllers/controllers');

const adminRouter = express.Router();
const authAdminRoute = express.Router();

adminRouter.post('/adminLogin',controller.administrativeLogin);
adminRouter.get('/admin/getAllData', controller.getAllData)
// adminRouter.post('/test', usersController.register);
// adminRouter.post('/testNext', usersController.isHost);
adminRouter.get('/delete', controller.deleteUser);
adminRouter.get('/admin/user/:id', controller.fetchUser)

authAdminRoute.use(controller.adminAuthControl);
authAdminRoute.post('/logout', controller.adminLogout);

//authAdminRoute.post('/newTenant',controller.register,controller.isTenant);
adminRouter.use('/admin/auth', authAdminRoute)


module.exports = adminRouter;