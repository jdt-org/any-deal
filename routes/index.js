var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');


/* router.get('/favicon.ico', (req, res) => {
  return
}) */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/results', function (req, res) {
  const { subreddit } = req.query;
  fetch(`https://api.reddit.com/r/${subreddit}/hot?limit=100`)
    .then(res => res.json())
    .then(data => {
      const subResults = data.data.children
      res.render('results', { subResults })
    })
})

module.exports = router;
 