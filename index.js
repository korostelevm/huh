// index.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  console.log(req.userAgent)
  
    console.log("A GET rekhq!")
    res.json({Hello:'😀hhh'})
})
app.listen(process.env.PORT || 3000)