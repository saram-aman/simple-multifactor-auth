let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Okta Authentication' })
})

module.exports = router
