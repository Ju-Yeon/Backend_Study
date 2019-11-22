const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');

const infoMap = [{
  id: 'sopt',
  pwd: '1234',
  name: 'sopt',
  phone: '010-2081-3818'
},{
  id: 'juyeon',
  pwd: '4321',
  name: '주연',
  phone: '010-9408-8238'
}];

const user = {
    signin: (id, pwd) => {
        return new Promise((resolve, reject) => {
            //TODO 2: 존재하는 아이디인지 확인
            const arr = infoMap.filter(it => it.id ==id);
            if(arr.length == 0){
                resolve({
                    code: statusCode.BAD_REQUEST,
                    json: authUtil.successFalse(responseMessage.NO_USER)
                });
            return;
            }
            //TODO 3: 비밀번호 일치하는지 확인
            const user = arr[0];
            if(user.pwd != pwd){
                resolve({
                    code: statusCode.UNAUTHORIZED,
                    json: authUtil.successFalse(responseMessage.MISS_MATCH_PW)
                });
            return;
            }
            //TODO 4: 유저 정보 응답하기
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.SIGN_IN_SUCCESS, user)
                });
            return;
            });
        },
    signup: (id, pwd, name, phone) =>{
        return new Promise((resolve, reject) => {
            //TODO 2: 존재하는 아이디인지 확인
            if(infoMap.filter(it => it.id == id).length > 0){
                resolve({
                    code: statusCode.UNAUTHORIZED,
                    json: authUtil.successFalse(responseMessage.ALREADY_ID)
                });
            return;
            }
            //TODO 3: 사용자 정보를 저장
            const userIdx = infoMap.push({
                id,
                pwd,
                name,
                phone
            });
            console.log(infoMap);
             //TODO 4: 새로 추가된 유저 index 반환
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.SIGN_UP_SUCCESS, userIdx)
                });
            return;
            
        })
    }
}

module.exports = user;

