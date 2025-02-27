
//File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman

// After the program runs, the output should be

// hello world my name is raman


//i will do you better, i am gonna write first hahahaha


let a=require('fs');
const { console } = require('inspector');
a.writeFile('1context.txt', 'hello     world    my    name   is       raman',(err)=>{
if(err){
    console.log(err);
}
else{
    console.log("data is written")
    a.readFile('1context.txt', 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            data=data.replace(/\s+/g,' ');
            
            
            console.log("After reading the data in files is \n", data);
            console.log("now lets write that data into the file.")
             a.writeFile('1context.txt', data,(error)=>{
                if (error) console.log(error);
                else console.log("i have reformed file but idk when i will be printed")});
        }
    })
}
})

