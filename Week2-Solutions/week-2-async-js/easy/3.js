const a=require('fs');


async function q3(filename) {


a.readFile(filename, 'utf-8', (err,data)=>{

if(err){
    console.log(err);
}
else{
    console.log(data);
}
})
console.log("when i come")
}


console.log("doing heavy ops")



for (let i=0;i<1000;i++){
    console.log("(.)(.)");
    
}

q3('3readingmaterial.txt')