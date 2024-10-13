const { Router } = require('express');
const authController = require('../controllers/authController');
const driverController = require('../middleware/upload');
const router = Router()


router.get('/login',authController.login_get );
router.post('/login',authController.login_post );
router.get('/signup', authController.signup_get );
router.post('/signup', authController.signup_post );
router.get('/driverrole',authController.driverrole_get);
// router.post('/driverrole',authController.driverrole_post);
// router.post('/upload-driver', upload.single('file_upload'), driverController.driverrole_post);
router.post('/driverrole', driverController, authController.driverrole_post);
router.get('/search',authController.busses_get);



module.exports = router;