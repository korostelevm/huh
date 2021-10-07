// index.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
     var a = Math.random();
     console.log('request recieved')
         console.log(req.headers)

    res.send(a.toString())
})
app.listen(process.env.PORT)
