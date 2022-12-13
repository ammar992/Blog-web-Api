const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');




router.post('/post',postController.createPost);
router.put('/post/update/:id',postController.updatePost);
router.delete('/post/delete/:id',postController.deletePost);
router.get('/post/get/:id',postController.getPost);
router.get('/post/getall',postController.getAllPost);


module.exports = router;