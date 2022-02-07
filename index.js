// index.js  
const express = require('express')
var Analytics = require('analytics-node');
var analytics = new Analytics(process.env.WRITE_KEY);
const app = express()

app.get('/track',async (req, res) => {
     console.log('recieved [TRACK] ')
     const trackImg = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
     let r = await analytics.track({
          anonymousId: 'anonymous',
          event: `Pixel ${req.params.img}`,
          properties: {
               ...req.headers
          } 
        });
     console.log(r)

     res.writeHead(200, {
          'Content-Type': 'image/gif', 
          'Cache-Control': 'no-cache',
          'Content-Length': trackImg.length,
        })
        return res.end(trackImg)
})
// app.post('/post, async (req,res)=>{res.send('ok')})
         
app.get('/:img',async (req, res) => {
 

        res.setHeader('Content-Type', 'image/svg+xml' )
        res.setHeader('Cache-Control', 'no-cache' )
        res.setHeader('content-security-policy', "default-src 'none'; img-src data:; style-src 'unsafe-inline'" )
        return res.send(`<svg width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <image src="data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik7PC9zY3JpcHQ+Cg==" height="200" width="200"/>
      </svg>`)

     //    return res.end(trackImg)
})

app.get('/',async (req, res) => {

     console.error('this is an error')
     if(req.query.throw){
          throw 'asdf'
     }
          console.log(req.query)
res.send('ok')
})
app.listen(3333)


// var http = require('http');
// http.createServer(function (req, res) {
//     console.log(`Just got a request at ${req.url}!`)
//     res.write('Yo!');
//     return res.end();
// }).listen(3000);
