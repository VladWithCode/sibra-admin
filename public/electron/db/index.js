const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URL || 'mongodb://192.168.1.128/';
const client = new MongoClient(url);

async function main() {
    await client.connect();

    console.log('Connected to DB');

    const db = client.db('sibra-management');
    const collections = await db.collections();

    collections.forEach(col => console.log(col.namespace));
}

main().catch(console.dir);
