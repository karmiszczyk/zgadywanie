var express = require('express');
var router = express.Router();
var x = -1;

/* GET home page. */
router.get('/', function(req, res, next) {
    x = Math.floor((Math.random() * 10) + 1);
  res.render('index', { title: "Zgadnij liczbe" });
});

router.get('/verify/:number', function(req, res, next) {
  var number = req.params.number;

  if(number < x)
  {
    res.send("Liczba jest mniejsza");
  }
  if(number > x)
  {
    res.send("Liczba jest za duza");
  }

    res.send("Zgadles liczbe");
});

module.exports = router;

