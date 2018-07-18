var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
app.use(cookieParser());

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Creating new middleware, it's equivalent to filters in java
// app.use('/', function (req, res, next) {
//     console.log('req url', req.url);
//     next();
// });

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // console.log('Cookies: ', req.cookies);
    // res.send('<html><body><h1>This is Html response!!Chakrapani</h1></body></html>');
    res.render('index');
});



app.get('/person/:name', function (req, res) {
    // console.log('Cookies: ', req.cookies);
    // res.send(`<html><body><h1>This is Html response!!person ${req.params.id}</h1></body></html>`);

    res.render('person', { NAME: req.params.name, AGE: req.query.age });
});

app.post('/person', urlencodedParser, function (req, res) {
    // console.log('Cookies: ', req.cookies);
    // res.send(`<html><body><h1>This is Html response!!person ${req.params.id}</h1></body></html>`);
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    //  res.render('person', { NAME: req.params.name, AGE: req.query.age, msg: req.body.username });
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Chakrapani', lastname: 'kulkarni' });
});



var port = process.env.PORT || 3000;
app.listen(port);

console.log('Hello')