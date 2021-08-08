var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const whiteList = require('../whiteList');
const sortTags = require('../controller/sortTags')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { whiteList });
});

router.get('/results', function (req, res) {
  const { subreddit } = req.query;
  if (whiteList.indexOf(subreddit) === -1) {
    res.send('Nope')
  } else {
    fetch(`https://api.reddit.com/r/${subreddit}/hot?limit=100`)
      .then(res => res.json())
      .then(body => {
        const subResults = body.data.children
        console.log(sortTags(subResults))
        res.render('results', { subResults })
    })
  }
})

module.exports = router;
 
