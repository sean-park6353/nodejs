var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
//! app.engine('pug', require('pug').__express) 코드가 없으면 pug 모듈을 못 찾는 문제가 있다.
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.set('views', './views');

//* app.use()는 미들웨어를 등록하는 함수이다
//* 등록 후 다음 미들웨어로 넘기기 위해서는 next() 가 있어야한다
//* bodyParser.json()과 urlencoded()는 내부에 next()가 있다.
//! 직접 찾아보면 나옴!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/first_template', (req, res) => {
    res.render('first_view');
});

// app.post('/', (req, res) => {
//     var name = req.body.name
//     var age = req.body.age
//     console.log(`4. ${Date.now()}`);
//     res.send(`좋아 `)
// })


app.listen(3000, () => { console.log('포트에연결'); });