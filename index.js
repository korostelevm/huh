// index.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  console.log(req.userAgent)
  
    console.log("A GET rekhq!")
.   var a = Math.random()
    console.log(a)
    res.send(`${a} what`)
})
app.listen(process.env.PORT || 3000)