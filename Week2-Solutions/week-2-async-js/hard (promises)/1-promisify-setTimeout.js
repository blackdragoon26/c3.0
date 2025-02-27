/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(nseconds) {
    return new Promise(function (resolve,reject){
        setTimeout(resolve,nseconds*1000);

    });
}


module.exports = wait;
