const router  = require('express').Router();
const userController = require('../Controller/user.controller');
const jwtAuthenticater = require('../configs/jwt');

router.post('/gettoken',userController.login);

router.get('/sample',jwtAuthenticater.authenticateJWT,userController.sample);

module.exports = router;