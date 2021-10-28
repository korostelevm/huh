// index.js  
const express = require('express')
const app = express()
app.get('/', (req, res) => {
     var a = Math.random();
     console.log('recieved [GET] /asdf ')
         console.log(Object.keys(req))
         console.log(req.headers['user-agent']    )

    res.send(Math.random())
})
app.listen(process.env.PORT)
