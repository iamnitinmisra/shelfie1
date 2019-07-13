const express = require('express');
const massive = require('massive');
const { getAllProducts } = require('../server/controller')
require('./controller')
require('dotenv').config()

const app = express()
app.use(express.json()) 

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.get("/api/inventory", getAllProducts);

// const port = 6063;
app.listen(SERVER_PORT, ()=> console.log(`Server is up and running on port ${SERVER_PORT}`))




