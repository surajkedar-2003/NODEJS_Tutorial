const dbConnect = require('./database');

async function insert(){
    const db = await dbConnect();
   // console.log(db);
//    db.insertOne({id:102, name:"mobile", price:45000});
   db.insertMany([{id: 103, name: 'ipad', price: 200000},
    {id:104, name:'headphone', price : 32000},
    {id:105, name:"speaker", price: 42100},
    {id:106, name:'monitor', price: 12000},
    {id:107, name: 'mouse', price: 500}
   ])
   console.log('document inserted successfully..');
}
// insert();

async function show(){
    const db = await dbConnect();
    let data = await db.find({}).toArray();
    console.log(data);
}
show();
