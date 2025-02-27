const a=require('fs');

a.writeFile('4writingmaterial.txt','hi','utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file is written');
        
    }

})

a.readFile('4writingmaterial.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})