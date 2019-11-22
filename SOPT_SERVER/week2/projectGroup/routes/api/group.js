var express = require('express');
var read = require('../../module/csv2json.js');
var router = express.Router();
var filePath = "/Users/ju-yeon/Desktop/soptServer/week2/projectGroup/public/csvs/member.csv";


/* GET users listing. */

router.get('/', async function(req, res) {
    try{
        const groupArray = await read(filePath);

        var nameAndGroup = ""; 
        groupArray.forEach(element => {
        nameAndGroup += `<br> ${element.name} : ${element.groupIdx}조`;
    });
        res.status(200).send(nameAndGroup);
    }catch(err){
        console.log(`err: ${err}`)
    }
});


router.get('/:groupIdx', async function(req, res, next) {
    const groupIdx = req.params.groupIdx;
    const groupArray = await read(filePath);

    var groupMember = `${groupIdx}조`;
    groupArray.forEach(element=>{
        if(element.groupIdx == groupIdx)
        groupMember += `<br> ${element.name}`;
    });
    res.status(200).send(groupMember);

});

module.exports = router;
