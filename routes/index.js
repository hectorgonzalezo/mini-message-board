const date = require('date-fns');
var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date.formatDistanceToNow(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date.formatDistanceToNow(new Date()),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Mini Messageboard", messages });
});

module.exports = router;
