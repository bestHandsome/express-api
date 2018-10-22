const Blog = require('../models/blog.model');

function addBlog(req, res, next) {
  let blog = new Blog(
    {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      comments: req.body.comments,
      isDelete: false,
      tag: req.body.tag
    }
  );
  blog.save(function (err) {
    if (err) {
      res.send('添加失败');
    } else res.send('添加成功');
  })
}

function getBlogs(req, res, next) {
  Blog.find({}, (err, blogs) => {
    if (err) return next(err);
    else res.send(blogs);
  })
}

function deleteBlog(req, res) {
   Blog.deleteOne({title: req.query.title}, err => {
      if (err) {
        res.send('删除失败');
      } else res.send('删除成功');
   })
}

function editBlog(req, res, next) {
  Blog.updateOne({title: '第一篇'},
    {$set: req.body}, err => {
     if (err) {
       res.send('修改失败');
     } else res.send('修改成功');
  })
}

module.exports = {
  addBlog: addBlog,
  getBlogs: getBlogs,
  deleteBlog: deleteBlog,
  editBlog: editBlog
};