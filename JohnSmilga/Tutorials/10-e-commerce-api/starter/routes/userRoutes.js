const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    authorizePermissions
} = require('../middleware/authentication');
const {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
} = require('../controllers/userController');


router.route('/').get(authenticateUser, authorizePermissions('admin','owner'), getAllUsers); // IMPORTANT - we have to put authorizePermissions after authenticateUser, because we have to identify user firs to be able to check his role

router.route('/showMe').get(authenticateUser, showCurrentUser);

router.route('/updateUser').patch(updateUser);

router.route('/updateUserPassword').patch(updateUserPassword);

router.route('/:id').get(authenticateUser, getSingleUser);



module.exports = router;