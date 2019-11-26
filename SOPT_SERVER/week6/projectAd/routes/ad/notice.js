var express = require('express');
var router = express.Router();


const dummy = {
    status: 200,
    success: true,
    message: "성공",
    data :  [{
        status : 0,
         ads :{
                HOT : false, 
                adsTitle : "HANKOOK.jpg",
                ads : "사회보장정보원/충무로",
                adsContents: "알바 직무에 관련된 내용으로 통일 다른 내용의 글은 작성금지",
                location : "중구 신당동",
                salary : "월 210만원"
          }
},{
    status : 0,
    ads :{
        HOT : false, 
        adsTitle : "HANKOOK.jpg",
        ads : "TV홈쇼핑",
        adsContents: "알바 직무에 관련된 내용으로 통일 다른 내용의 글은 작성금지",
        location : "중구 신당동",
        salary : "월 210만원"
    }

},{    
    status : 0,
    ads :{
        HOT : false, 
        adsTitle : "HANKOOK.jpg",
        ads : "사회보장정보원/충무로",
        adsContents: "알바 직무에 관련된 내용으로 통일 다른 내용의 글은 작성금지",
        location : "중구 신당동",
        salary : "월 210만원"
        }
},{        
    status : 1,
    ads :{
            HOT : true,
        adsTitle : "coupang.jpg",
        ads : "사회보장정보원/충무로",
        adsContents : "알바 직무에 관련된 내용으로 통일 다른 내용의 글은 작성금지",
        location : "중구 신당동",
        salary : "월 210만원"
        }

},{      
    status : 1,
    ads :{
        HOT : false,
        adsTitle : "coupang.jpg",
        ads : "사회보장정보원/충무로",
        adsContents : "알바 직무에 관련된 내용으로 통일 다른 내용의 글은 작성금지",
        location : "중구 신당동",
        salary : "월 210만원"
        }

},{     
    status : 1,
    ads :{
        HOT : true,
        adsTitle : "coupang.jpg",
        ads : "사회보장정보원/충무로",
        adsContents : "알바 직무에 관련된 내용으로 통일 다른 내용의 글은 작성금지",
        location : "중구 신당동",
        salary : "월 210만원"
        }
}]

};



router.get('/', (req, res) => {
    const notice= req.query.notice;
    console.log(notice);

    res.json(dummy);
});



module.exports = router;