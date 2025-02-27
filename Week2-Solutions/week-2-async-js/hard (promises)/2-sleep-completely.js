/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {//we not using setTimout since it does not halt the thread completely
    return new Promise (function(resolve,reject){
        let ms=new Date().getTime();
       
        
        while(new Date().getTime()<ms+milliseconds){}
        resolve();
    });
}


module.exports = sleep;
