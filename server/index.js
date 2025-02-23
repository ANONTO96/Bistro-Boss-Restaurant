require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@anonto96.bxfwp.mongodb.net/?retryWrites=true&w=majority&appName=Anonto96`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const database = client.db('bistroDb');
    const userCollection = database.collection('users')
    const menuCollection = database.collection('menu');
    const reviewsCollection = database.collection('reviews');
    const cartCollection = database.collection('cart');

    // users 
    app.post('/users', async(req, res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })
    // menu
    app.get('/menu', async(req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result)
    })
    // review 
    app.get('/reviews', async(req, res) => {
      const result = await reviewsCollection.find().toArray();
      res.send(result)
    })

    // cart collection
    app.post('/cart',async (req, res) => {
      // getting data
      const cartItem = req.body;
      // inserting to collection
      const result = await cartCollection.insertOne(cartItem);
      // response sending
      res.send(result);
    })
    // getting cart data for a specific user
    app.get('/carts/:email',async (req, res)=>{
      const email = req.params.email
      const query = {email: email}
      const result = await cartCollection.find(query).toArray();
      res.send(result); 
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res) => {
    res.send('hello from the server')
})

app.listen(port, () => {
    console.log(`running on port : ${port}`)
})
/**
 * -------------------
 *  NAMING CONVENTION
 * -------------------
 * app.get('/users')
 * app.get('/users/:id')
 * app.post('/users')
 * app.put('/users/:id)
 * app.patch('/users/:id')
 * app.delete('/users/:id')
 */