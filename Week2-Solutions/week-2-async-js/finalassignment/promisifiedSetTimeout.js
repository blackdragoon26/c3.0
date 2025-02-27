function promisifiedSetTimeout(duration){
    return new Promise(function(resolve, reject){
        if(typeof(duration)!=="number"){reject();}
        setTimeout(resolve,duration);
    });
}
promisifiedSetTimeout(1000).then(()=>console.log("aah")).catch(()=>console.log("give integer value errrorrr"));