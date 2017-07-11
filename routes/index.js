var express = require('express');
var router = express.Router();
var sidebar = {
    sidebar: [
      { title: '标题一', id: 1 },
      { title: '标题二', id: 2 },
      { title: '标题三', id: 3 }
    ]
  }

router.get('/', function (req, res, next) {
  res.render('index', Object.assign({}, {title: 'Express'}, sidebar))
});

/* GET home page. */
router.get('/:title', function (req, res, next) {
  res.render('index', Object.assign({}, req.params, sidebar))
});

module.exports = router;
