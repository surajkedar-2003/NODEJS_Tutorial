const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'filesModule');

for(let i=0; i<5; i++){
    fs.writeFile(`./hello${i}.txt`, "good morning", (err)=>{
        if(err){
            console.log(err);
        }
    })
}
console.log('file created successfully');
