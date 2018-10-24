const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
const blog_controller = require('../controllers/blog.controller');
const note_controller = require('../controllers/note.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', function(res, req) {
  req.send('欢迎光临');
});

// 产品相关api
router.post('/product/add', product_controller.addProducts);
router.get('/product/list', product_controller.getProducts);
router.get('/product', product_controller.getProductById);

// 博客相关api
router.post('/blog/add', blog_controller.addBlog);
router.get('/blog/list', blog_controller.getBlogs);
router.delete('/blog/delete', blog_controller.deleteBlog);
router.put('/blog/update', blog_controller.editBlog);

// 笔记相关api
router.post('/note/add', note_controller.addNote);
router.get('/note/list', note_controller.getNotes);
router.delete('/note/delete', note_controller.deleteNote);
router.put('/note/update', note_controller.updateNote);

module.exports = router;
