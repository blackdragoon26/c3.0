
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function counter(n){
    var i=0;
    function innerwork(){
        i++;
        console.log(i);
        if(i==n){
            clearInterval(a);
        }

    }

    let a=setInterval(innerwork,1000);
}

counter(10);