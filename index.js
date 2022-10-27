require("dotenv").config();
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('This changes come from Github')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})
