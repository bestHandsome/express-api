const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
const blog_controller = require('../controllers/blog.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', function(res, req) {
  req.send('欢迎光临');
});
router.post('/product/add', product_controller.addProducts);
router.get('/product/list', product_controller.getProducts);
router.get('/product', product_controller.getProductById);
router.post('/blog/add', blog_controller.addBlog);
router.get('/blog/list', blog_controller.getBlogs);
router.delete('/blog/delete', blog_controller.deleteBlog);
router.put('/blog/update', blog_controller.editBlog);

module.exports = router;
