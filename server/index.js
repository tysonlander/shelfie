require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const shelfie_ctrl = require('./controllers')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
  .then((database) => {
  app.set('db', database)
  console.log("hello dog")
  })
  .catch(error => {
    if(error) throw error;
  })

app.get('/api/inventory', shelfie_ctrl.getAllInventory)

app.listen(SERVER_PORT, () => console.log(`spinning up on ${SERVER_PORT}`))