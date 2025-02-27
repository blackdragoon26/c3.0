



let b=setInterval(()=>{
    let a=new Date();
    var temp=a.toLocaleTimeString()
    var pmet=a.toLocaleTimeString("en-GB")
    process.stdout.write("\r" +"12hour Fomat: " +temp+"                 "+"24hour Format: "+pmet);
    

},
1000);