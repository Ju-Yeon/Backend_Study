const express = require('express');
const router = express.Router();

const dummy = {
    status: 200,
    success: true,
    message: "와 성공햇네요 ㅊㅋㅊㅋ",
    data: {
        name: "김땡땡",
        profileUrl: "url",
        resumeCount: 3,
        applyCount: 2,
        noticeCount: 5,
        applicantCount: 2,
        hasAlert: "true",
        recentAlba: [
            "에버랜드",
            "토끼정",
            "에버랜드",
            "키즈까페"
        ],
        scrapAlba: [
            "CGV",
            "롯데월드",
            "개꿀알바",
        ]
    }
};

router.get('/', (req, res) => {
    const name = req.query.name;
    console.log(name);
    if (name !== undefined) {
        dummy.data.name = name;
    }
    res.json(dummy);
});

module.exports = router;