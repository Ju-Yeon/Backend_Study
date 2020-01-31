var express = require('express');
var router = express.Router();
var models = require('../models');

/**
 * 방 생성
 * 1. 친구 생길 때
 * 2. 단체 톡방 만들 때
 * -> 즉, room_members 만들어질 때 
 */

router.post('/', async function (req, res, next) {
    const roomName = req.body; 
    
    //1. 파라미터체크
    if (!roomName) {
        res.status(200).json({
            message: "필수 정보를 입력하세요."
        });
        return;
    }

    //2. 방 생성
    models.room.create({
        room_name: roomName,
      })
    var roomModel = new room()
    roomModel.name = roomName;
    roomModel.member.push(userId);
    roomModel.countUnread.push(0);
    roomModel.countMember = 1; //
    roomModel.save()
        .then((newRoom) => {
            console.log("Create 완료")
            res.status(200).json({
                message: "Create success",
                data: {
                    room: newRoom
                }
            })
        })
        .catch((err) => {
            res.status(200).json({
                message: err
            })
        })
});