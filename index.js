// index.js  
const express = require('express')
var Analytics = require('analytics-node');
var analytics = new Analytics(process.env.WRITE_KEY);
const app = express()
app.get('/:img',async (req, res) => {
     console.log('recieved [GET] ')
         console.log(req.params.img)
         console.log(Object.keys(req))
         console.log(req.headers['user-agent'] )


     let r = await analytics.track({
          anonymousId: 'anonymous',
          event: `Pixel ${req.params.img}`,
          properties: {
               ...req.headers
          }
        });
     console.log(r)

     const trackImg = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

     // res.writeHead(200, {
          // 'Content-Type': 'image/gif', 
          // 'Cache-Control': 'no-cache',
          // 'Content-Length': trackImg.length
     //    })
      
     //    const { campaign, list, id } = req.params 
     //    const { things } = req.query
        
        // db.save()  
        res.setHeader('Content-Type', 'image/svg+xml' )
        res.setHeader('Cache-Control', 'no-cache' )
        return res.send(`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <style>
          circle {
            background-image: url('https://cow-account.cyclic-app.com/svg-style');
            fill: gold;
            stroke: blue;
            stroke-width: 2px;
          }
        </style>
        <image x="200" y="200" width="100px" height="100px"
         href="https://cow-account.cyclic-app.com/svg-style"></image>
        <circle cx="5" cy="5" r="4" />
      </svg>`)
     //    return res.end(trackImg)
})
app.listen(process.env.PORT)
