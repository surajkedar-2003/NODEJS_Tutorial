const dbConnect = require('./database');

async function insert(){
    const db = await dbConnect();
   // console.log(db);
   db.insertOne({id:102, name:"mobile", price:45000});
   console.log('document inserted successfully..');
}
insert();

// async function show(){
//     const db = await dbConnect();
//     db.find({}).toArray();
// }
// show();