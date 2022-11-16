var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {date: require('date-fns'), title: "Mini Messageboard", messages });
});

router.post('/new', (req, res, next) => {
  const name = req.body.name;
  const text = req.body.text;
  messages.push({text, user: name, added: new Date()})
  res.redirect('/');
})

module.exports = router;
