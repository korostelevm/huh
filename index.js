// index.js  
const express = require('express')
const app = express()
app.get('/', (req, res) => {
     var a = Math.random();
     console.log('recieved [GET] ')
         console.log(Object.keys(req))
         console.log(req.headers['user-agent']    )
              console.log(process.env   )
     let response = {
          user_agent:req.headers['user-agent']
     }
    res.json(response)
})
app.listen(process.env.PORT)
