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
     console.log('recieved [GET] ')
     console.error('error test')
     console.log('debugging here')
         console.log(req.params.img)
     //     console.log(Object.keys(req))
     //     console.log(req.headers['user-agent'] )


    

        res.setHeader('Content-Type', 'image/svg+xml' )
        res.setHeader('Cache-Control', 'no-cache' )
        res.setHeader('content-security-policy', "default-src 'none'; img-src data:; style-src 'unsafe-inline'" )
        console.log('got to the end')
        return res.send(`<svg width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <image src="data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik7PC9zY3JpcHQ+Cg==" height="200" width="200"/>
      </svg>`)

     //    return res.end(trackImg)
})

app.get('/',async (req, res) => {
     console.log(req.headers['user-agent'])
     console.log(Date.now())
     console.error('this is an error')
     if(req.query.throw){
          throw 'asdf'
     }
          console.log(req.query)
res.send('ok')
})
app.listen(3333)
