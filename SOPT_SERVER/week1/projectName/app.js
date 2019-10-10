var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//라우터 선언
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//
//var boardRouter = require('./routes/api/board');
//var signinRouter = require('./routes/api/auth/signin');
//var signupRouter = require('./routes/api/auth/signup');


var app = express(); //app이 express()로 노드 느낌인건가?

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//**이부분 집중해서 볼것!라우터에서**/
app.use('/', indexRouter); // "/"를 통해 index.js파일로 연결되며, 
app.use('/users', usersRouter); // "/users"를 통해 users.js로 연결된다
//내가 해보기
//app.use('/api/board', boardRouter);
//app.use('/api/auth/signin', signinRouter);
//app.use('/api/auth/signup', signupRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
