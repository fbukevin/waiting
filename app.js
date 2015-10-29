
require('./db'); // db.js should be called before others being called so that other sevices can access to database

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var favicon = require('favicon');
var routes = require('./routes/index');
var users = require('./routes/users');
var engine = require('ejs-locals');
var http = require('http');
//var methodOverride('method-override');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
 
// all environments
//app.use(favicon()); // uncommnet if you need to setup a favicon
//app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', engine);

//catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.get('/', routes.index);
app.post('/create', routes.create);
app.get('/destroy/:id', routes.destroy);
app.get('/edit/:id', routes.edit);
app.post('/update/:id', routes.update);
app.get('/:content', routes.not_found);


/* only for debugging */
// app.get('/', function(req, res){
//     res.send('hello');
// });

module.exports = app;
