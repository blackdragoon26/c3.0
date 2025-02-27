//counter without setinterval

//i.e. set timeout

function counter(n) {
    var temp=n;
    var i=1;
    setTimeout(inner,1000,temp-1);
    function inner(value){
       
        console.log(i++);
        let a=setTimeout(inner, 1000, temp--);
        if(value==2){
            clearTimeout(a);
        }
        
    }


  

}


function counterbetter(n) {
    let i = 1;

    function inner(value) {
        if (value < 0) return; // Stop when value reaches -1

        console.log(i++);
        setTimeout(() => inner(value - 1), 1000); // Decrease value correctly
    }

    inner(n); // Start the counter
}
counterbetter(10);