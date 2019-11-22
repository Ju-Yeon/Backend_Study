const csv = require('csvtojson');

module.exports = function(filePath){
    return new Promise((resolve, reject)=>{
    csv().fromFile(filePath).then((jsonArr) => { 
        const randomNum = Math.random()*100; 
        jsonArr.forEach(element => {
            element.groupIdx = (element.groupIdx + randomNum)%6 +1; 
        })
        resolve(jsonArr);
    },(err) =>{
        reject(err); 
    })
})
}

