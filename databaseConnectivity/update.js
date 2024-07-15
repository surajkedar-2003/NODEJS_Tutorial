const dbConnect = require('./database');

async function update(){
    const db = await dbConnect();
    let result =  await db.updateOne({name:'headphone'},{$set:{name:'microphone'}});
    console.log(result);
}

update();