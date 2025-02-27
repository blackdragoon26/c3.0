
function counter(num){
    var start=1;
    let a=setInterval(stypidfn,1000);
    

    function stypidfn(){
        console.log(start);
        
       
        if (start>num-1){
            clearInterval(a);
        
        }
        else{
            start++;
        }
        
    }
    
}
counter(10);

