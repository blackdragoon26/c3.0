function promisifiedFetch(Response){
    return new Promise(function(resolve,reject){
        fetch(Response).then(x=>{
            if(!x.ok){reject();}
            else{
                resolve(x);
            }
        });
       

    });
}//ig code is okay eh