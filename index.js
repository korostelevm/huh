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
app.get('/:img',async (req, res) => {
     console.log('recieved [GET] ')
         console.log(req.params.img)
     //     console.log(Object.keys(req))
     //     console.log(req.headers['user-agent'] )


    

        res.setHeader('Content-Type', 'image/svg+xml' )
        res.setHeader('Cache-Control', 'no-cache' )
        res.setHeader('content-security-policy', "default-src 'none'; img-src data:; style-src 'unsafe-inline'" )
        return res.send(`<svg width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <script>console.log('asdf')</script>
        <image href="https://cow-account.cyclic-app.com/track" height="200" width="200"/>
      </svg>`)
     //    return res.end(trackImg)
})
app.listen(process.env.PORT)
