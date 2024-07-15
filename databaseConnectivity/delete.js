const dbConnect = require('./database');

async function deleteData(){
    const db = await dbConnect();
    let result = await db.deleteOne({name: 'ipad'});
    console.log(result);
    console.log('data delete successfully..');
}
deleteData();