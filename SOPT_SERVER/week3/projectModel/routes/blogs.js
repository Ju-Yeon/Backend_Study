var express = require('express');
var router = express.Router();
const blog = require('../model/blog');

router.get('/', async (req, res) => {
//TODO : 블로그 전체 보기
    //var blogs = await blog.read();
    //res.send(blogs);

    blog.read()
    .then(({code, json}) => res.status(code).send(json))
    .catch(err => {
    console.log(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR,
    authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
    });
});

router.post('/create', async (req, res) => {
    //TODO : 블로그 작성 하기
    const {
        content,
        writer
    } = req.body;
    console.log(content, writer);

  //TODO 1: 파라미터 값 체크
  if(!content || !writer){
    res.status(statusCode.BAD_REQUEST)
    .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    return;
  }

  blog.create(content, writer)
  .then(({code, json}) => res.status(code).send(json))
  .catch(err => {
    console.log(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR,
    authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  });

});

router.get('/:id', async (req, res) => {
    //TODO : 블로그 개별 보기
    const blogIdx = req.params.id;

    if(!blogIdx){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
        return;
      }
      
      blog.read(blogIdx)
      .then(({code, json}) => res.status(code).send(json))
      .catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR,
        authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
      });
      //res.send(blogEach);

});

router.put('/', async (req, res) => {
//TODO : 블로그 수정 보기

//
});

router.delete('/', (req, res) => {
//TODO : 블로그 삭제하기

//
});


module.exports = router;