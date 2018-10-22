const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {type: String, required: true},
  author: {},
  body: String,           //正文
  comments: [{            //评论
    author: String,
    date: Date,
    body: String
  }],
  date: {type: Date, default: Date.now},  //发布时间
  isDelete: Boolean,                        //是否删除
  tags: [{type: String}]
});

module.exports = mongoose.model('blog', BlogSchema);