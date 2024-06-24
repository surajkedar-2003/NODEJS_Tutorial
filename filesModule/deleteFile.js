const fs = require('fs');

// unlink is used to delete file

//asynchronous delete

fs.unlink('./f2.txt', (err)=>{
    if(err){
        console.log(err);
    }
})
console.log('delete file successfully');

//synchronous delete
 
fs.unlinkSync("./f3.txt");
console.log('file delete successfully');
