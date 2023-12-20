import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { notes?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.ATLAS_URI || "");
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const notesCollection: mongoDB.Collection = db.collection(process.env.DB_NAME || "");
 
    collections.notes = notesCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notesCollection.collectionName}`);
}