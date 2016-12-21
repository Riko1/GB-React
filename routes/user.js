var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');

router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if(err) {
        return next(err);
    }

    res.json(users);
  });
});

router.post('/', function (req, res, next) {
  var user = req.body;
  
  console.log(user);

  User.create(user, function (err, users) {
    if(err) {
        return next(err);
    }

    res.json(users);
  });
});

module.exports = router;