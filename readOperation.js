const {MongoClient} = require('mongodb');
//const uri="mongodb://127.0.0.1"

const uri="mongodb+srv://disha:DKMongo%407555@cluster0.ssh4wdp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function main()
{
   try{
    await  client.connect();
    await read(client);
    return "done";
   }
   catch(e){
        console.error(e);
   }
   finally{
    await client.close();
   }
}
main().catch(console.error);

async function read(client){
    const db = client.db("mydata");
  const collection = db.collection("data");
  const data2= await collection.find({ name: { $eq: "aarshi" } }).toArray();
  console.log(data2);

}