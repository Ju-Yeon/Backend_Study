const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');

const blogMap = [{
    blogIdx: 1,
    content: 'shout our passion together',
    writer: 'sopt'
},{
    blogIdx: 2,
    content: 'try everything',
    writer: 'judy'
}];

const board = {
    create: (content, writer) => {
        return new Promise((resolve, reject) => {
            const blogIdx = blogMap.length + 1;
            const userIdx = blogMap.push({
                blogIdx,
                content,
                writer
            });
            console.log(blogMap);
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.BLOG_CREATE_SUCCESS, userIdx)
                });
            return;
        })
    },
    read: (blogIdx) => {
        return new Promise ((resolve, reject) => {
            try{
                if( !blogIdx ){
                var blogs = "";
                blogMap.forEach(element => {
                blogs += `<br> ${element.blogIdx} <br> ${element.content} <br> ${element.writer} <br>`;
                })
                resolve({
                    code: statusCode.OK,
                    json: blogs
                });
            }else if ( blogIdx ){
                var blogEach = "";
                blogMap.forEach(element => {
                if(element.blogIdx == blogIdx)
                    blogEach += `<br> ${element.blogIdx} <br> ${element.content} <br> ${element.writer} <br>`;
                })
                resolve({
                    code: statusCode.OK,
                    json: blogEach
                });
            }
            }catch{
                console.log(`err : ${err}`);
            }
        });

    },
    update: (blogIdx, content, writer) => {

    },
    delete: (blogIdx, writer) => {

    }
}

module.exports = board;