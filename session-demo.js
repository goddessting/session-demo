var express = require('express');
var session = require('express-session');
var app = new express();

app.use(session({
    secret: "litingting",
    cookie: {maxAge: 1000 * 60},
}));

app.get('/', function (req, res) {
    if (req.session.isVisit) {
        req.session.isVisit++;
        res.send('<p>访问量:' + req.session.isVisit + '</p>');
    } else {
        req.session.isVisit = 1;
        res.send('欢迎初次光临');
    }
});

app.listen(3000);
