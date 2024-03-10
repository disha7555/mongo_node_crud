const {MongoClient} = require('mongodb');
//const uri="mongodb://127.0.0.1"

const uri="mongodb+srv://disha:DKMongo%407555@cluster0.ssh4wdp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const location1="Barsana";
async function main()
{
   try{
    await  client.connect();
    await update(client,location1);
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

async function update(client,location1){
    const db = client.db("mydata");
  const collection = db.collection("data");

  await collection.updateOne({name:"anandi"},{$set:{"location":location1}});

}