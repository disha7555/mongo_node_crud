const {MongoClient} = require('mongodb');
async function main()
{
   
const uri="mongodb+srv://disha:DKMongo%407555@cluster0.ssh4wdp.mongodb.net/?retryWrites=true&w=majority";
    
//below is local uri for local connection doesnt change the data in real , changes are made in a local copy of data
   // const uri="mongodb://127.0.0.1"
    const client = new MongoClient(uri);
   try{
    await  client.connect();
    await listDatabases(client);
   }
   catch(e){
        console.error(e);
   }
   finally{
    await client.close();
   }
}
main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};