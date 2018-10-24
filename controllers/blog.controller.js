const Blog = require('../models/blog.model');

function addBlog(req, res, next) {
  Blog.find({}, (error, blogs) => {
    const num  = blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 1;
    const blog = new Blog(
      {
        id: num,
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
        next(err);
        res.send('添加失败');
      } else res.send('添加成功');
    })
  });
}

function getBlogs(req, res, next) {
  Blog.find({}, (err, blogs) => {
    if (err) {
      next(err);
      res.send('获取博客列表失败');
    } else res.send(blogs);
  })
}

function deleteBlog(req, res, next) {
   Blog.deleteOne({id: req.query.id}, err => {
      if (err) {
        next(err);
        res.send('删除失败');
      } else res.send('删除成功');
   })
}

function editBlog(req, res, next) {
  Blog.updateOne({id: req.query.id},
    {$set: req.body}, err => {
     if (err) {
       next(err);
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