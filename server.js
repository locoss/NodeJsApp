var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var routers = require('./config/routers');
var errorFlag = true;
console.log(typeof express);
console.log(typeof bodyParser);
for (var router in routers) {
    console.log(router);
    routers[router](express, bodyParser, function (err, router) {
        if (err) {
            console.log(err);
            errorFlag = false;
        } else {
            var model = router.init();
            console.log(model.route);
            app.use(model.route, model.router);
        }
    });
}


if (errorFlag) {
    app.use(express.static(__dirname + '/public'));
    app.listen(port, hostname, function () {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}