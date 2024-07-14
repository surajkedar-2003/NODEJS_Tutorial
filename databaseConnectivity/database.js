//import the mongoclient
//mongoclient is class use for making connection in mongodb

const {MongoClient} = require('mongodb');
//connection url

const url = 'mongodb://127.0.0.1:27017'
//creating instance of mongoclient
const client = new MongoClient(url);

async function main(){
    await client.connect();
    console.log('connected successfully to server');
    const db = client.db('company');
    const collectionName = 'domain';
    db.collection(collectionName);
    return db.collection(collectionName);
}

module.exports=main;