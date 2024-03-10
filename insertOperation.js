const {MongoClient} = require('mongodb');
//const uri="mongodb://127.0.0.1"

const uri="mongodb+srv://disha:DKMongo%407555@cluster0.ssh4wdp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const data1 = 
        
 
{"_id":{"ObjectId":"64c23350e32f4a51b19b9250"},
"name":"achyuta",
"location":"Vrindavan",
"gender":"female",
"age":25};

const data3=[
  {"_id":{"ObjectId":"64c23350e32f4a51b19b9251"},
"name":"Vaishali",
"location":"Pune",
"gender":"female",
"age":23},
{"_id":{"ObjectId":"64c23350e32f4a51b19b9252"},
"name":"aakruti",
"location":"Brij",
"gender":"female",
"age":25},
{"_id":{"ObjectId":"64c23350e32f4a51b19b9253"},
"name":"isha",
"location":"Mumbai",
"gender":"female",
"age":24}
];
async function main()
{
   try{
    await  client.connect();
    //await insert(client,data1);
    await insertmany(client,data3);
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

async function insert(client,data1){
    const db = client.db("mydata");
  const collection = db.collection("data");

  await collection.insertOne(data1);

}
async function insertmany(client,data3){
  const db = client.db("mydata");
const collection = db.collection("data");

await collection.insertMany(data3);

}