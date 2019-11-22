const csv = require('csvtojson');

module.exports = function(filePath){
    return new Promise((resolve, reject)=>{
    csv().fromFile(filePath).then((jsonArr) => { 
        resolve(jsonArr);
    },(err) =>{
        reject(err); 
    })
})
}

