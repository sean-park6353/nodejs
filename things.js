var express = require('express')
var router = express.Router()



router.get('/', (req, res) => {
    console.log(`2번 ${Date.now()}`);
    res.send('GET route on things')
})
router.post('/', (req, res) => {
    res.send('POST route on things')
})
module.exports = router