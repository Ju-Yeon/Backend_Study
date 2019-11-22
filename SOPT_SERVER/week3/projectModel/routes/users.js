var express = require('express');
var router = express.Router();

const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');

const User = require('../model/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signin', (req,res) => {
  const {
    id,
    pwd,
  } = req.body;
  console.log(id,pwd);

  //TODO 1: 파라미터 값 체크
  if(!id || !pwd){
    res.status(statusCode.BAD_REQUEST)
    .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    return;
  }
  User.signin(id, pwd)
    .then(({code, json}) => res.status(code).send(json))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
    });
})

router.post('/signup', (req,res) => {
  const {
    id,
    pwd,
    name,
    phone,
  }=req.body;
  console.log(id, pwd, name, phone)

  //TODO 1: 파라미터 값 체크
  if(!id || !pwd || !name || !phone){
    res.status(statusCode.BAD_REQUEST)
    .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    return;
  }
  User.signup(id, pwd, name, phone)
  .then(({code,json}) => res.status(code).send(json))
  .catch(err =>{
    console.log(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR,
    authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  });
})



module.exports = router;
