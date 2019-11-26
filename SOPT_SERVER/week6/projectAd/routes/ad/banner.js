var express = require('express');
var router = express.Router();

const statusCode = require('../../module/statusCode');

const dummy = {
    status: 200,
    success: true,
    message: "성공",
    data :[{
        imgUrl : `http://img.albamon.com/main/mobile/promotion/201911/191114_promotion.png` ,
        redirectUrl : `https://www.naver.com`
    },{
        imgUrl : `http://img.albamon.com/main/mobile/promotion/201911/topbanner_monsters4_수정.png` ,
        redirectUrl : `https://www.google.co.kr`
    },{
        imgUrl : `http://img.albamon.com/main/mobile/promotion/201909/topbanner03_09_190910.png` ,
        redirectUrl : `https://www.albamon.com`
    }]
}


router.get('/', (req, res, next) => {

    res.status(statusCode.OK)
    .send(dummy);
    console.log(dummy)

});





module.exports = router;
