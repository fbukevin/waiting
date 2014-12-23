var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var wait = mongoose.model('wait');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

exports.index = function(req, res){
  wait.find(function(err, waits, count){  
    res.render('index', {
      title: 'Express Waiting List',
      waits: waits
    });
  });
};
/* Insert item */
exports.create = function(req, res){
  new wait({
    content : req.body.content,
    updated_at : Date.now()
  }).save(function(err, wait, count){
      res.redirect('/');
    });
};

/* Remove item */
exports.destroy = function(req, res){
  wait.findById(req.params.id, function(err, wait){
    wait.remove(function(err, todo){
      res.redirect('/');
    });
  });
};

/* Click and edit item */
exports.edit = function(req, res){
  wait.find(function(err, waits){
    res.render('edit', {
      title : 'Express Waiting List',
      waits : waits,
      current : req.params.id
    });
  });
};

/* Update item */
exports.update = function(req, res){
  wait.findById(req.params.id, function(err, wait){
   wait.content = req.body.content;
   wait.updated_at = Date.now();
   wait.save(function(err, wait, count){
     res.redirect('/');
   });
  });
};

exports.not_found = function(req, res){
  console.log("NOT " + req.params.content);
  res.redirect('./404.html');
};
