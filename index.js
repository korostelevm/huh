// index.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  console.log(req.userAgent)
  
    console.log("A GET requhhest!")
    res.json({Hello:'😀'})
})
app.listen(process.env.PORT || 3000)