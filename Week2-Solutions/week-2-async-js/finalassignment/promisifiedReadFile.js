const s=require("fs");

function promisifiedReadFile(fileName){
    return new Promise(function(resolve,reject){
        s.readFile(fileName,"utf-8",function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}
promisifiedReadFile("ap.txt").then(()=>console.log("aah")).catch((err)=>console.log(err));