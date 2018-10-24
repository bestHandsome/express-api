const Note = require('../models/note.model');

function addNote(req, res, next) {
  const note = new Note(
    {
      title: req.body.title,
      count: req.body.count,
      url: req.body.url,
      content: req.body.content
    }
  );
  
  note.save(err => {
    if (err) {
       next(err);
       res.send('添加失败');
    } else res.send('添加成功');
  })
}

function getNotes(req, res, next) {
  Note.find({}, (err, notes) => {
    if (err) {
      next(err);
      res.send('获取笔记列表失败');
    } else res.send(notes);
  })
}


function deleteNote(req, res, next) {
  Note.deleteone({title: req.query.title}, err => {
    if (err) {
      next(err);
      res.send('删除失败');
    } else res.send('删除成功');
  })
}

function updateNote(req, res, next) {
  Note.updateOne({title: ""}, {$set: req.body}, err => {
    if (err) {
      next(err);
      res.send('修改失败');
    } else res.send('修改成功');
  })
}

module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  deleteNote: deleteNote,
  updateNote: updateNote
};