const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const app = express();
app.use(cors());
const port = process.env.PORT || 5100;
app.use(express.json());



const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@teamhexacoders.ek82ng1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();


        await client.db("admin").command({ ping: 1 });
        console.log("Doc House successfully connected to MongoDB!");
    } catch (err) {
        console.log(err.massage);
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Doc House server is running");
});

app.listen(port, (req, res) => {
    console.log(
        `Doc House server is running on port ${port}`
    );
});