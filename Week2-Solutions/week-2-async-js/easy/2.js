function counterWithoutSetTimeout(num){
    var counter=1;
    function inner(n){
        if (n<0){
            return;
        }
        console.log(counter++);
        setTimeout(inner,1000,n-1)
    }
    inner(num-1);
}
counterWithoutSetTimeout(10);