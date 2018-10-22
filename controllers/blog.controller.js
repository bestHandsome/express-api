const Blog = require('../models/blog.model');

function addBlog(req, res, next) {
  let blog = new Blog(
    {
      title: req.body.title,
      content: req.body.content,
      online: req.body.online
    }
  );
  blog.save(function (err) {
    if (err) return next(err);
    else res.send('添加成功');
  })
}

function getBlogs(req, res, next) {
  Blog.find({}, (err, blogs) => {
    if (err) return next(err);
    else res.send(blogs);
  })
}

function deleteBlog(req, res, next) {
   Blog.deleteOne({title: req.query.title}, err => {
      if (err) return next(err);
      else res.send('删除成功');
   })
}

function editBlog(req, res, next) {
  Blog.updateOne({title: '第一篇'},
    {$set: req.body}, err => {
     if (err) return next(err);
     else res.send('修改成功');
  })
}

module.exports = {
  addBlog: addBlog,
  getBlogs: getBlogs,
  deleteBlog: deleteBlog,
  editBlog: editBlog
};