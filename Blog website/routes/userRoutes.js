const express = require('express');
const router = express.Router();
const userCon = require('../controllers/userController');



router.put('/update/:id',userCon.updateUser);
router.delete('/delete/:id',userCon.deleteUser);
router.get('/getuser/:id',userCon.getUser);

module.exports = router;